import React from 'react'
import { SubmissionChecklist } from '@/components/documents/SubmissionChecklist'
import { DocumentCanvas, DocumentToolbar, BlankTemplateNotice } from '@/components/documents/DocumentToolbar'
import { BLANK_TENDER, buildDocData } from '@/lib/tender-docs'

export default function Page4() {
  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/doc1" />
      <BlankTemplateNotice />
      <SubmissionChecklist doc={buildDocData(BLANK_TENDER)} />
    </DocumentCanvas>
  )
}
