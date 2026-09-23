'use client'

import React from 'react'
import { StagePageContent } from '@/components/common/StagePageContent'

export default function SampleDetailsPage() {
  return (
    <StagePageContent
      stage="Sample Details"
      description="Track product samples, lab test reports, physical specifications, and sample submission approvals."
      stageNumber={2}
    />
  )
}
