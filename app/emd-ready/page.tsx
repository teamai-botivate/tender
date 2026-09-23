'use client'

import React from 'react'
import { StagePageContent } from '@/components/common/StagePageContent'

export default function EmdReadyPage() {
  return (
    <StagePageContent
      stage="EMD Ready"
      description="Manage Earnest Money Deposit (EMD), Bank Guarantee (BG), DD confirmation, and fee exemptions."
      stageNumber={3}
    />
  )
}
