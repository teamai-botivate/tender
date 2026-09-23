import { Tender, TenderBidDetails } from '@/types/tender'

export const BLANK = '__________'

export const emptyBid = (): TenderBidDetails => ({
  rfsNo: '',
  rfsDate: '',
  corrigendum: '',
  workName: '',
  shortWorkName: '',
  authorityFullName: '',
  addresseeDesignation: '',
  authorityAddress: '',
  bidDeadlineTime: '',
  tenderFeePerPackage: '',
  bidValidityDays: '180',
  financialRequirementCr: '',
  technicalRequirement: '',
  jurisdiction: '',
  signingDate: new Date().toISOString().slice(0, 10),
  place: 'Anand',
  packages: [],
  beneficiaryBank: {
    accountHolder: '',
    bankName: '',
    branch: '',
    accountNo: '',
    ifsc: '',
    accountType: '',
  },
})

// The original CSPDCL tender the document templates were built from.
// Used by the /doc1 preview pages.
export const SAMPLE_TENDER: Tender = {
  id: 'SAMPLE-CSPDCL',
  title: 'Grid-Connected Rooftop Solar Plants (Residential) — PM-Surya Ghar ULA, EPC (CAPEX)',
  authority: 'CSPDCL',
  department: 'Energy',
  state: 'Chhattisgarh',
  value: '',
  stage: 'Document Ready',
  status: 'In Progress',
  due: '2026-09-10',
  owner: 'Admin',
  bid: {
    rfsNo: 'CSPDCL/NIT/ULA-114.23 MW-/1095',
    rfsDate: '2026-07-14',
    corrigendum: 'Corrigendum-1 dated 03.09.2026',
    workName:
      'Design, Supply, Erection, Testing and Commissioning including Warranty, Comprehensive Operation & Maintenance of ' +
      'Grid-Connected Rooftop Solar Plants of Various Capacities in the Residential Sector under the Utility-Led Aggregation ' +
      '(ULA) Models of PM-Surya Ghar: Muft Bijli Yojana of MNRE under EPC (CAPEX) in the State of Chhattisgarh',
    shortWorkName:
      'Grid-Connected Rooftop Solar Plants (Residential) under PM-Surya Ghar: Muft Bijli Yojana — Utility-Led Aggregation (ULA) Models, EPC (CAPEX), Chhattisgarh',
    authorityFullName: 'Chhattisgarh State Power Distribution Company Limited',
    addresseeDesignation: 'The Executive Director (RA&PM)',
    authorityAddress: '4th Floor, Sewa Bhawan, Danganiya, Raipur – 492013 (C.G.)',
    bidDeadlineTime: '15:00 Hrs.',
    tenderFeePerPackage: '10,000',
    bidValidityDays: '180',
    financialRequirementCr: '301.00',
    technicalRequirement: '60,100 kWp OR 10,000 installations',
    jurisdiction: 'Raipur',
    signingDate: '2026-09-09',
    place: 'Anand',
    packages: [
      { code: 'P-1', region: 'Raipur Rural', rfx: '8100052802', emdLakh: '92' },
      { code: 'P-2', region: 'Raipur City', rfx: '8100052825', emdLakh: '24' },
      { code: 'P-3', region: 'Durg', rfx: '8100052828', emdLakh: '81' },
      { code: 'P-4', region: 'Bilaspur', rfx: '8100052832', emdLakh: '96' },
      { code: 'P-5', region: 'Rajnandgaon', rfx: '8100052833', emdLakh: '54' },
      { code: 'P-6', region: 'Raigarh', rfx: '8100052843', emdLakh: '88' },
      { code: 'P-7', region: 'Jagdalpur', rfx: '8100052844', emdLakh: '157' },
    ],
    beneficiaryBank: {
      accountHolder: 'Manager (CAU), CSPDCL, Raipur (C.G.)',
      bankName: 'Punjab National Bank',
      branch: 'Jaistambh Chowk Branch, Raipur (C.G.)',
      accountNo: '0399002100077705',
      ifsc: 'PUNB0039900',
      accountType: 'Current Account',
    },
  },
}

const ONES = [
  '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
]
const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

function twoDigits(n: number): string {
  if (n < 20) return ONES[n]
  return TENS[Math.floor(n / 10)] + (n % 10 ? `-${ONES[n % 10]}` : '')
}

function threeDigits(n: number): string {
  const hundreds = Math.floor(n / 100)
  const rest = n % 100
  return [hundreds ? `${ONES[hundreds]} Hundred` : '', rest ? twoDigits(rest) : ''].filter(Boolean).join(' ')
}

// Indian numbering system: 15700000 -> "One Crore Fifty-Seven Lakh"
export function numberToIndianWords(value: number): string {
  const n = Math.round(value)
  if (n === 0) return 'Zero'
  const crore = Math.floor(n / 10000000)
  const lakh = Math.floor((n % 10000000) / 100000)
  const thousand = Math.floor((n % 100000) / 1000)
  const rest = n % 1000
  return [
    crore ? `${numberToIndianWords(crore)} Crore` : '',
    lakh ? `${twoDigits(lakh)} Lakh` : '',
    thousand ? `${twoDigits(thousand)} Thousand` : '',
    rest ? threeDigits(rest) : '',
  ]
    .filter(Boolean)
    .join(' ')
}

export function toNumber(value: string): number {
  const n = parseFloat(String(value ?? '').replace(/[^0-9.]/g, ''))
  return Number.isFinite(n) ? n : 0
}

// "2026-09-09" -> "09.09.2026"
export function formatDocDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '')
  return m ? `${m[3]}.${m[2]}.${m[1]}` : iso || BLANK
}

// "2026-09-09" -> "9th day of September 2026"
export function formatDocDateLong(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '')
  if (!m) return iso || BLANK
  const day = Number(m[3])
  const suffix =
    day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th'
  const month = new Date(Number(m[1]), Number(m[2]) - 1, 1).toLocaleString('en-IN', { month: 'long' })
  return `${day}${suffix} day of ${month} ${m[1]}`
}

const or = (value: string | undefined) => value?.trim() || BLANK

export interface ResolvedPackage {
  code: string
  region: string
  rfx: string
  emdLakh: number
  amountStr: string
  amountWords: string
}

export type DocData = ReturnType<typeof buildDocData>

// Resolves a tender into every string the document templates print.
export function buildDocData(tender: Tender) {
  const bid = tender.bid ?? emptyBid()

  const packages: ResolvedPackage[] = bid.packages.map(p => {
    const emdLakh = toNumber(p.emdLakh)
    const rupees = Math.round(emdLakh * 100000)
    return {
      code: or(p.code),
      region: or(p.region),
      rfx: or(p.rfx),
      emdLakh,
      amountStr: `${rupees.toLocaleString('en-IN')}/-`,
      amountWords: `${numberToIndianWords(rupees)} only`,
    }
  })

  const totalEmdLakh = packages.reduce((sum, p) => sum + p.emdLakh, 0)
  const rfs = `${or(bid.rfsNo)} dated ${formatDocDate(bid.rfsDate)}`
  const corrigendum = bid.corrigendum.trim()

  return {
    tender,
    bid,
    authority: or(tender.authority),
    authorityFullName: or(bid.authorityFullName),
    addressee: or(bid.addresseeDesignation),
    authorityAddress: or(bid.authorityAddress),
    state: or(tender.state),
    rfs,
    rfsFull: corrigendum ? `${rfs} read with ${corrigendum}` : rfs,
    corrigendum,
    workName: or(bid.workName || tender.title),
    shortWorkName: or(bid.shortWorkName || tender.title),
    packages,
    packagesLabel: packages.length
      ? packages.map(p => `${p.code} (${p.region})`).join(', ')
      : BLANK,
    packageCount: packages.length,
    packageRange: packages.length > 1 ? `${packages[0].code} to ${packages[packages.length - 1].code}` : packages[0]?.code ?? BLANK,
    totalEmdLakh: totalEmdLakh.toFixed(2),
    totalEmdCrore: (totalEmdLakh / 100).toFixed(2),
    tenderFee: or(bid.tenderFeePerPackage),
    bidValidityDays: or(bid.bidValidityDays),
    financialRequirementCr: bid.financialRequirementCr.trim(),
    technicalRequirement: bid.technicalRequirement.trim(),
    jurisdiction: or(bid.jurisdiction),
    signDate: formatDocDate(bid.signingDate),
    signDateLong: formatDocDateLong(bid.signingDate),
    place: or(bid.place),
    deadline: [formatDocDate(tender.due), bid.bidDeadlineTime.trim()].filter(Boolean).join(', '),
    bank: bid.beneficiaryBank,
  }
}

// Fields that should be filled before the documents are printed.
export function missingDocFields(tender: Tender): string[] {
  const bid = tender.bid
  if (!bid) return ['Tender document details']
  const checks: [string, string][] = [
    ['RfS / Tender No.', bid.rfsNo],
    ['RfS / Tender Date', bid.rfsDate],
    ['Name of Work', bid.workName],
    ['Authority Full Name', bid.authorityFullName],
    ['Addressee Designation', bid.addresseeDesignation],
    ['Authority Address', bid.authorityAddress],
    ['Tender Fee per Package', bid.tenderFeePerPackage],
    ['Jurisdiction', bid.jurisdiction],
    ['Signing Date', bid.signingDate],
  ]
  const missing = checks.filter(([, v]) => !v?.trim()).map(([label]) => label)
  if (!bid.packages.length) missing.push('At least one Package')
  if (bid.packages.some(p => !p.emdLakh.trim())) missing.push('EMD amount for every Package')
  return missing
}
