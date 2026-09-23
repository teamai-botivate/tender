'use client'

import React from 'react'
import { StagePageContent } from '@/components/common/StagePageContent'

export default function DocumentReadyPage() {
  return (
    <StagePageContent
      stage="Document Ready"
      description="Assemble sworn affidavits, signed annexures, auditor certificates, and mandatory statutory documents."
      stageNumber={4}
    />
  )
}
