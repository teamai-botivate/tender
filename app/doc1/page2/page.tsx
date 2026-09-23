import React from 'react'
import { EmdGuarantees } from '@/components/documents/EmdGuarantees'
import { DocumentCanvas, DocumentToolbar } from '@/components/documents/DocumentToolbar'
import { SAMPLE_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page2() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <EmdGuarantees doc={buildDocData(SAMPLE_TENDER)} />
    </DocumentCanvas>
  )
}
