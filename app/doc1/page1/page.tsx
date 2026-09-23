import React from 'react'
import { BidDocuments } from '@/components/documents/BidDocuments'
import { DocumentCanvas, DocumentToolbar } from '@/components/documents/DocumentToolbar'
import { SAMPLE_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page1() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <BidDocuments doc={buildDocData(SAMPLE_TENDER)} />
    </DocumentCanvas>
  )
}
