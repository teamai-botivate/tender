import React from 'react'
import { EmdGuarantees } from '@/components/documents/EmdGuarantees'
import { DocumentCanvas, DocumentToolbar, BlankTemplateNotice } from '@/components/documents/DocumentToolbar'
import { BLANK_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page2() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <BlankTemplateNotice />
      <EmdGuarantees doc={buildDocData(BLANK_TENDER)} />
    </DocumentCanvas>
  )
}
