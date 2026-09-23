'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { AlertTriangle } from 'lucide-react'
import { useTenders } from '@/context/TenderContext'
import { buildDocData, missingDocFields } from '@/lib/tender-docs'
import { DocumentCanvas, DocumentToolbar } from '@/components/documents/DocumentToolbar'
import { DOCUMENT_SECTIONS, TenderDocumentSet } from '@/components/documents/TenderDocumentSet'

export default function TenderDocumentsPage() {
  const params = useParams<{ id: string }>()
  const id = decodeURIComponent(params.id)
  const { tenders } = useTenders()
  const tender = tenders.find(t => t.id === id)
  const doc = useMemo(() => (tender ? buildDocData(tender) : null), [tender])

  if (!tender || !doc) {
    return (
      <section className="page">
        <div className="card p-8 text-center">
          <h2 className="text-lg font-bold mb-2">Tender not found</h2>
          <p className="text-sm text-slate-500 mb-4">No tender with ID {id} exists in this workspace.</p>
          <Link href="/tender-details" className="primary-button inline-flex">
            Go to Tender Details
          </Link>
        </div>
      </section>
    )
  }

  const missing = missingDocFields(tender)

  return (
    <DocumentCanvas>
      <DocumentToolbar backHref="/tender-details" backLabel="Back to Tenders">
        <div className="text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{tender.id}</p>
          <p className="text-sm font-semibold text-slate-800 line-clamp-1">{tender.title}</p>
        </div>
      </DocumentToolbar>

      <div className="no-print max-w-[210mm] mx-auto mb-8 space-y-4">
        {missing.length > 0 && (
          <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <div>
              <p className="font-semibold">Some tender details are empty and print as blanks:</p>
              <p className="mt-1">{missing.join(', ')}.</p>
              <p className="mt-1">Edit the tender (or upload the tender PDF) on the Tender Details page to fill them.</p>
            </div>
          </div>
        )}
        <nav className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Documents in this bid set</p>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            {DOCUMENT_SECTIONS.map(s => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-emerald-700 hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <TenderDocumentSet doc={doc} />
    </DocumentCanvas>
  )
}
