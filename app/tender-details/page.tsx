'use client'

import React, { useMemo, useState } from 'react'
import { Filter, Plus, Search } from 'lucide-react'
import { useTenders, stagesList } from '@/context/TenderContext'
import { TenderTable } from '@/components/tables/TenderTable'
import { TenderModal } from '@/components/modals/TenderModal'
import { Tender } from '@/types/tender'

export default function TenderDetailsPage() {
  const { tenders, masters, addTender, updateTender, deleteTender, advanceStage } = useTenders()
  const [tab, setTab] = useState<'all' | 'pending' | 'completed'>('all')
  const [query, setQuery] = useState('')
  const [stageFilter, setStageFilter] = useState('All stages')
  const [modal, setModal] = useState<{ mode: 'new' | 'edit' | 'process'; tender?: Tender } | null>(null)

  const filtered = useMemo(() => {
    let list = tenders
    if (tab === 'completed') list = tenders.filter(t => t.status === 'Completed')
    if (tab === 'pending') list = tenders.filter(t => t.status !== 'Completed')

    if (stageFilter !== 'All stages') {
      list = list.filter(t => t.stage === stageFilter)
    }

    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        t =>
          t.title.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q) ||
          t.authority.toLowerCase().includes(q) ||
          t.department.toLowerCase().includes(q) ||
          t.state.toLowerCase().includes(q)
      )
    }
    return list
  }, [tenders, tab, stageFilter, query])

  const handleSaveModal = (saved: Tender) => {
    if (modal?.mode === 'new') {
      addTender(saved)
    } else if (modal?.mode === 'edit' && modal.tender) {
      updateTender(modal.tender.id, saved)
    } else if (modal?.mode === 'process' && modal.tender) {
      advanceStage(modal.tender.id, saved.stage, saved.status, saved.remarks)
    }
    setModal(null)
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">TENDER MANAGEMENT REPOSITORY</p>
          <h1>1. Tender Details</h1>
          <p>Create, track, and manage all tender records across stages.</p>
        </div>
        <button
          className="primary-button"
          onClick={() => setModal({ mode: 'new' })}
        >
          <Plus className="w-4 h-4" /> Add New Tender
        </button>
      </div>

      <div className="card list-card">
        <div className="tabs">
          <button
            className={tab === 'all' ? 'tab active' : 'tab'}
            onClick={() => setTab('all')}
          >
            All Records <span>{tenders.length}</span>
          </button>
          <button
            className={tab === 'pending' ? 'tab active' : 'tab'}
            onClick={() => setTab('pending')}
          >
            Pending Action <span>{tenders.filter(t => t.status !== 'Completed').length}</span>
          </button>
          <button
            className={tab === 'completed' ? 'tab active' : 'tab'}
            onClick={() => setTab('completed')}
          >
            Completed / History <span>{tenders.filter(t => t.status === 'Completed').length}</span>
          </button>
        </div>

        <div className="filters-bar">
          <div className="search-box">
            <Search />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by tender name, ID, authority, department..."
            />
          </div>

          <select
            value={stageFilter}
            onChange={e => setStageFilter(e.target.value)}
          >
            <option>All stages</option>
            {stagesList.map(s => (
              <option key={s.label} value={s.label}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Reusable Fixed 400px table with Action as column 1 */}
        <TenderTable
          tenders={filtered}
          onProcess={t => setModal({ mode: 'process', tender: t })}
          onEdit={t => setModal({ mode: 'edit', tender: t })}
          onDelete={id => {
            if (window.confirm(`Are you sure you want to delete tender ${id}?`)) {
              deleteTender(id)
            }
          }}
          history={tab === 'completed'}
          emptyMessage="No tenders found. Click 'Add New Tender' to create your first tender."
          showCreateButton={true}
          onCreateClick={() => setModal({ mode: 'new' })}
        />
      </div>

      {modal && (
        <TenderModal
          mode={modal.mode}
          tender={modal.tender}
          masters={masters}
          onClose={() => setModal(null)}
          onSave={handleSaveModal}
        />
      )}
    </section>
  )
}
