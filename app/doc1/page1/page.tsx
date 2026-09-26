import React from 'react'
import { BidDocuments } from '@/components/documents/BidDocuments'
import { DocumentCanvas, DocumentToolbar, BlankTemplateNotice } from '@/components/documents/DocumentToolbar'
import { BLANK_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page1() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <BlankTemplateNotice />
      <BidDocuments doc={buildDocData(BLANK_TENDER)} />
    </DocumentCanvas>
  )
}
