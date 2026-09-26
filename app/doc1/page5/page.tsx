import React from 'react'
import { StampPaperDocuments } from '@/components/documents/StampPaperDocuments'
import { DocumentCanvas, DocumentToolbar, BlankTemplateNotice } from '@/components/documents/DocumentToolbar'
import { BLANK_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page5() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <BlankTemplateNotice />
      <StampPaperDocuments doc={buildDocData(BLANK_TENDER)} />
    </DocumentCanvas>
  )
}
