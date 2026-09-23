'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Bell, ChevronDown, Menu } from 'lucide-react'

const routeTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/tender-details': 'Tender Details',
  '/eligibility-check': 'Eligibility Check',
  '/sample-details': 'Sample Details',
  '/emd-ready': 'EMD Ready',
  '/document-ready': 'Document Ready',
  '/document-upload-in-portal': 'Document Upload in portal',
  '/submit-in-website': 'Submit in website',
  '/technical-open-check': 'Technical Open Check',
  '/financial-open-check': 'Financial Open Check',
  '/settings': 'Settings',
}

export function Topbar({ onOpenMobile }: { onOpenMobile: () => void }) {
  const pathname = usePathname()
  const title = routeTitles[pathname] || 'Tender FMS'

  return (
    <header className="topbar">
      <div className="flex items-center gap-3">
        <button
          className="mobile-menu"
          aria-label="Open menu"
          onClick={onOpenMobile}
        >
          <Menu />
        </button>
        <div className="breadcrumbs">
          <span>Tender FMS</span>
          <span>/</span>
          <strong>{title}</strong>
        </div>
      </div>

      <div className="top-actions">
        <button className="icon-button" aria-label="Notifications">
          <Bell />
          <i />
        </button>
        <div className="flex items-center gap-2 text-slate-500 cursor-pointer">
          <div className="avatar">AS</div>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </header>
  )
}
