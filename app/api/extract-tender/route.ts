import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const maxDuration = 120

const MAX_PDF_BYTES = 25 * 1024 * 1024
const MODEL = process.env.OPENAI_MODEL || 'gpt-4.1'

const nullableString = { type: ['string', 'null'] }

const strictObject = (properties: Record<string, unknown>) => ({
  type: 'object',
  additionalProperties: false,
  required: Object.keys(properties),
  properties,
})

// Structured Outputs schema: every field is required but may be null when the PDF does not state it.
const TENDER_SCHEMA = strictObject({
  title: { ...nullableString, description: 'Short title / name of work of the tender' },
  authority: { ...nullableString, description: 'Short name or abbreviation of the issuing authority, e.g. CSPDCL, NHAI' },
  authorityFullName: { ...nullableString, description: 'Full legal name of the issuing authority' },
  addresseeDesignation: { ...nullableString, description: 'Officer to whom bids are addressed, e.g. "The Executive Director (RA&PM)"' },
  authorityAddress: { ...nullableString, description: 'Postal address for bid submission' },
  department: { ...nullableString, description: 'Sector / department, e.g. Energy, Public Works, Water Resources' },
  state: { ...nullableString, description: 'Indian state where the work is executed' },
  estimatedValue: { ...nullableString, description: 'Estimated tender value with currency, e.g. "₹ 45 Cr"' },
  rfsNo: { ...nullableString, description: 'Tender / NIT / RfS / RFP reference number' },
  rfsDate: { ...nullableString, description: 'Date of the tender notice, YYYY-MM-DD' },
  corrigendum: { ...nullableString, description: 'Latest corrigendum reference, e.g. "Corrigendum-1 dated 03.09.2026"' },
  workName: { ...nullableString, description: 'Full name / scope of work exactly as written in the tender' },
  shortWorkName: { ...nullableString, description: 'One-line name of work for envelope labels' },
  bidDeadlineDate: { ...nullableString, description: 'Last date of bid submission, YYYY-MM-DD' },
  bidDeadlineTime: { ...nullableString, description: 'Bid submission deadline time, e.g. "15:00 Hrs."' },
  tenderFeePerPackage: { ...nullableString, description: 'Tender / processing fee per package in rupees, digits with Indian commas, e.g. "10,000"' },
  bidValidityDays: { ...nullableString, description: 'Bid validity period in days, digits only' },
  financialRequirementCr: { ...nullableString, description: 'Cumulative financial eligibility requirement (turnover/MAAT) in Rs. Crore, digits only' },
  technicalRequirement: { ...nullableString, description: 'Cumulative technical eligibility requirement, short phrase' },
  jurisdiction: { ...nullableString, description: 'City whose courts have jurisdiction' },
  packages: {
    type: 'array',
    description: 'Every package / lot / region in the tender. One entry if the tender is not split into packages.',
    items: strictObject({
      code: { type: 'string', description: 'Package code, e.g. "P-1"' },
      region: { type: 'string', description: 'Region / area / lot name' },
      rfx: { type: 'string', description: 'RFX / event / lot number, empty string if none' },
      emdLakh: { type: 'string', description: 'EMD / bid security for this package in Rs. Lakh, digits only (e.g. 92 or 12.5)' },
    }),
  },
  beneficiaryBank: strictObject({
    accountHolder: nullableString,
    bankName: nullableString,
    branch: nullableString,
    accountNo: nullableString,
    ifsc: nullableString,
    accountType: nullableString,
  }),
})

const INSTRUCTIONS =
  'You extract structured data from Indian government tender documents (NIT / RfS / RFP / bid documents). ' +
  'Read the whole PDF, including tables and corrigenda. Only report values the document actually states; use null ' +
  'for anything not present. Never guess. Convert every date to YYYY-MM-DD. Convert EMD amounts to Rs. Lakh ' +
  '(e.g. Rs. 92,00,000 = 92). Return beneficiary bank details only if they are for the authority (the payee).'

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'OPENAI_API_KEY is not configured on the server. Add it to .env.local and restart the app.' },
      { status: 500 }
    )
  }

  let file: File | null = null
  try {
    const form = await request.formData()
    const entry = form.get('file')
    file = entry instanceof File ? entry : null
  } catch {
    return NextResponse.json({ error: 'Invalid upload.' }, { status: 400 })
  }

  if (!file) return NextResponse.json({ error: 'No PDF file uploaded.' }, { status: 400 })
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    return NextResponse.json({ error: 'Only PDF files are supported.' }, { status: 400 })
  }
  if (file.size > MAX_PDF_BYTES) {
    return NextResponse.json({ error: 'PDF is larger than 25 MB.' }, { status: 413 })
  }

  const base64 = Buffer.from(await file.arrayBuffer()).toString('base64')

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      instructions: INSTRUCTIONS,
      input: [
        {
          role: 'user',
          content: [
            { type: 'input_file', filename: file.name, file_data: `data:application/pdf;base64,${base64}` },
            { type: 'input_text', text: 'Extract the tender details from this document.' },
          ],
        },
      ],
      text: {
        format: { type: 'json_schema', name: 'tender_details', strict: true, schema: TENDER_SCHEMA },
      },
    }),
  })

  const payload = await response.json().catch(() => null)
  if (!response.ok) {
    const message = payload?.error?.message || `OpenAI request failed (${response.status}).`
    return NextResponse.json({ error: message }, { status: 502 })
  }

  const content = (payload?.output ?? []).flatMap((item: any) => item?.content ?? [])
  const refusal = content.find((c: any) => c?.type === 'refusal')
  if (refusal) return NextResponse.json({ error: `Model refused: ${refusal.refusal}` }, { status: 502 })

  const text = content.find((c: any) => c?.type === 'output_text')?.text
  try {
    return NextResponse.json({ data: JSON.parse(text) })
  } catch {
    return NextResponse.json({ error: 'Could not read the extracted data from the model response.' }, { status: 502 })
  }
}
