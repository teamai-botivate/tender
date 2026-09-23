export type RotomagDocCategory =
  | 'Bid Documents'
  | 'Bank Guarantee'
  | 'Packaging & Dispatch'
  | 'Checklist'
  | 'Legal & Notary'

export interface RotomagDocItem {
  id: string
  title: string
  shortTitle: string
  category: RotomagDocCategory
  fileName: string
  pdfUrl: string
  pages: number
  bidder: string
  rfsNo: string
  packagesCovered: string[]
  totalEMD: string
  description: string
  documentType: string
  sourceNote: string
}

const RFS = 'CSPDCL/NIT/ULA-114.23 MW-/1095'
const BIDDER = 'ROTOMAG ENERTEC LIMITED'
const PACKAGES = ['P-1', 'P-2', 'P-3', 'P-4', 'P-5', 'P-6', 'P-7']

export const ROTOMAG_DOCUMENTS: RotomagDocItem[] = [
  {
    id: 'letterhead-bid-documents',
    title: 'Bid Documents on Company Letterhead',
    shortTitle: 'Letterhead Bid Documents',
    category: 'Bid Documents',
    fileName: 'ROTOMAG_Bid_Documents_on_Letterhead.pdf',
    pdfUrl: '/docs/ROTOMAG_Bid_Documents_on_Letterhead.pdf',
    pages: 16,
    bidder: BIDDER,
    rfsNo: RFS,
    packagesCovered: PACKAGES,
    totalEMD: 'Rs. 5.92 Crore',
    description: 'Signed bid formats and bidder particulars prepared on the company letterhead for the CSPDCL ULA tender.',
    documentType: 'Official bid / letterhead set',
    sourceNote: 'Rendered directly from the supplied PDF; no document text is recreated in the UI.',
  },
  {
    id: 'emd-bank-guarantees',
    title: 'EMD / Bid Security Bank Guarantees — Annexure-K',
    shortTitle: 'EMD Bank Guarantees',
    category: 'Bank Guarantee',
    fileName: 'ROTOMAG_EMD_Bank_Guarantees_Annexure-K.pdf',
    pdfUrl: '/docs/ROTOMAG_EMD_Bank_Guarantees_Annexure-K.pdf',
    pages: 4,
    bidder: BIDDER,
    rfsNo: RFS,
    packagesCovered: PACKAGES,
    totalEMD: 'Rs. 592.00 Lakh',
    description: 'Annexure-K bank guarantee set covering the bid security requirement for Packages P-1 through P-7.',
    documentType: 'EMD / Bank Guarantee',
    sourceNote: 'Package amounts and wording remain in the original supplied PDF.',
  },
  {
    id: 'envelope-stickers',
    title: 'Envelope Stickers & Sealed Cover Labels',
    shortTitle: 'Envelope Stickers',
    category: 'Packaging & Dispatch',
    fileName: 'ROTOMAG_Envelope_Stickers.pdf',
    pdfUrl: '/docs/ROTOMAG_Envelope_Stickers.pdf',
    pages: 3,
    bidder: BIDDER,
    rfsNo: RFS,
    packagesCovered: PACKAGES,
    totalEMD: 'Rs. 5.92 Crore',
    description: 'Print-ready outer-cover and envelope labels for physical submission and dispatch of the tender bid.',
    documentType: 'Print / dispatch labels',
    sourceNote: 'The supplied PDF is the authoritative artwork shown in the preview and viewer.',
  },
  {
    id: 'final-submission-checklist',
    title: 'Final Submission Checklist',
    shortTitle: 'Submission Checklist',
    category: 'Checklist',
    fileName: 'ROTOMAG_Final_Submission_Checklist.pdf',
    pdfUrl: '/docs/ROTOMAG_Final_Submission_Checklist.pdf',
    pages: 1,
    bidder: BIDDER,
    rfsNo: RFS,
    packagesCovered: PACKAGES,
    totalEMD: 'Rs. 5.92 Crore',
    description: 'Master pre-dispatch checklist covering Envelope-I and Envelope-II submission requirements.',
    documentType: 'Master submission checklist',
    sourceNote: 'Checklist labels are kept as supplied in the original PDF.',
  },
  {
    id: 'stamp-paper-notarised-docs',
    title: 'Stamp-Paper & Notarised Documents',
    shortTitle: 'Legal & Notary Set',
    category: 'Legal & Notary',
    fileName: 'ROTOMAG_Stamp-Paper_Notarised_Documents.pdf',
    pdfUrl: '/docs/ROTOMAG_Stamp-Paper_Notarised_Documents.pdf',
    pages: 4,
    bidder: BIDDER,
    rfsNo: RFS,
    packagesCovered: PACKAGES,
    totalEMD: 'Rs. 5.92 Crore',
    description: 'Power of Attorney and stamp-paper / notarised declarations and undertakings included in the supplied legal set.',
    documentType: 'Legal / notarised document set',
    sourceNote: 'The PDF remains the source of truth for signatures, witness blocks, stamp-paper language and notarisation fields.',
  },
]
