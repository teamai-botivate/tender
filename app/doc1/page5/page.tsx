import React from 'react'
import { StampPaperDocuments } from '@/components/documents/StampPaperDocuments'
import { DocumentCanvas, DocumentToolbar } from '@/components/documents/DocumentToolbar'
import { SAMPLE_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page5() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <StampPaperDocuments doc={buildDocData(SAMPLE_TENDER)} />
    </DocumentCanvas>
  )
}
