'use client'

import React from 'react'
import { StagePageContent } from '@/components/common/StagePageContent'

export default function EligibilityCheckPage() {
  return (
    <StagePageContent
      stage="Eligibility Check"
      description="Verify turnover, experience certificates, joint venture criteria, and qualification conditions."
      stageNumber={1}
    />
  )
}
