import React from 'react'
import { EnvelopeStickers } from '@/components/documents/EnvelopeStickers'
import { DocumentCanvas, DocumentToolbar } from '@/components/documents/DocumentToolbar'
import { SAMPLE_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page3() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <EnvelopeStickers doc={buildDocData(SAMPLE_TENDER)} />
    </DocumentCanvas>
  )
}
