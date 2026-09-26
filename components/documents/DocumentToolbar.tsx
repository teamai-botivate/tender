'use client'

import React from 'react'
import Link from 'next/link'
import { Printer } from 'lucide-react'

export function DocumentToolbar({
  backHref,
  backLabel = 'Back to Dashboard',
  children,
}: {
  backHref: string
  backLabel?: string
  children?: React.ReactNode
}) {
  return (
    <div className="no-print sticky top-4 z-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200 p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors border border-slate-200"
      >
        &larr; {backLabel}
      </Link>
      {children}
      <button
        type="button"
        onClick={() => window.print()}
        className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm active:scale-95 flex items-center gap-2"
      >
        <Printer className="w-4 h-4" />
        Print / Save as PDF
      </button>
    </div>
  )
}

export function DocumentCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="doc-canvas min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-12 px-4 sm:px-8 overflow-auto">
      <div className="max-w-5xl mx-auto relative">{children}</div>
    </div>
  )
}

export function BlankTemplateNotice() {
  return (
    <div className="no-print max-w-[210mm] mx-auto mb-8 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
      <p className="font-semibold">This is a blank template.</p>
      <p className="mt-1">
        Every <span className="font-mono">__________</span> is a field that fills in automatically from the tender
        form or an uploaded tender PDF. Open a real tender&apos;s documents from{' '}
        <Link href="/tender-details" className="underline">
          Tender Details
        </Link>{' '}
        to see them filled in.
      </p>
    </div>
  )
}
