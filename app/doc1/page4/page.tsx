import React from 'react'
import { SubmissionChecklist } from '@/components/documents/SubmissionChecklist'
import { DocumentCanvas, DocumentToolbar } from '@/components/documents/DocumentToolbar'
import { SAMPLE_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page4() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <SubmissionChecklist doc={buildDocData(SAMPLE_TENDER)} />
    </DocumentCanvas>
  )
}
