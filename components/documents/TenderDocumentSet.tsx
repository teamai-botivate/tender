import React from 'react'
import { DocData } from '@/lib/tender-docs'
import { SubmissionChecklist } from './SubmissionChecklist'
import { BidDocuments } from './BidDocuments'
import { EmdGuarantees } from './EmdGuarantees'
import { StampPaperDocuments } from './StampPaperDocuments'
import { EnvelopeStickers } from './EnvelopeStickers'

// Submission order: index first, then Envelope-I / Envelope-II contents, then the cover stickers.
export const DOCUMENT_SECTIONS: { id: string; title: string; render: (doc: DocData) => React.ReactNode }[] = [
  { id: 'checklist', title: 'Bid Submission Checklist / Index', render: doc => <SubmissionChecklist doc={doc} /> },
  { id: 'bid-documents', title: 'Bid Documents on Letterhead (Formats 2, 1, 6, 9, 7, 10, 12)', render: doc => <BidDocuments doc={doc} /> },
  { id: 'emd', title: 'EMD Bank Guarantees (Annexure-K)', render: doc => <EmdGuarantees doc={doc} /> },
  { id: 'stamp-paper', title: 'Stamp Paper Documents (Format-5, Annexure D, H, E)', render: doc => <StampPaperDocuments doc={doc} /> },
  { id: 'envelopes', title: 'Envelope Stickers', render: doc => <EnvelopeStickers doc={doc} /> },
]

export function TenderDocumentSet({ doc }: { doc: DocData }) {
  return (
    <>
      {DOCUMENT_SECTIONS.map(section => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h3 className="no-print text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 max-w-[210mm] mx-auto">
            {section.title}
          </h3>
          {section.render(doc)}
        </section>
      ))}
    </>
  )
}
