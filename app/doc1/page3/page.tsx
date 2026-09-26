import React from 'react'
import { EnvelopeStickers } from '@/components/documents/EnvelopeStickers'
import { DocumentCanvas, DocumentToolbar, BlankTemplateNotice } from '@/components/documents/DocumentToolbar'
import { BLANK_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page3() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <BlankTemplateNotice />
      <EnvelopeStickers doc={buildDocData(BLANK_TENDER)} />
    </DocumentCanvas>
  )
}
