'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Clock3, FileText, Pencil, Plus, Trash2 } from 'lucide-react'
import { Status, Tender } from '@/types/tender'

interface TenderTableProps {
  tenders: Tender[]
  onProcess: (tender: Tender) => void
  onEdit?: (tender: Tender) => void
  onDelete?: (id: string) => void
  history?: boolean
  emptyMessage?: string
  showCreateButton?: boolean
  onCreateClick?: () => void
}

function statusTone(status: Status) {
  switch (status) {
    case 'Ready':
    case 'Completed':
      return 'badge-green'
    case 'At Risk':
      return 'badge-red'
    case 'Submitted':
      return 'badge-blue'
    case 'In Progress':
    default:
      return 'badge-amber'
  }
}

function dueLabel(date: string) {
  if (!date) return 'No date'
  const days = Math.ceil((new Date(date).getTime() - Date.now()) / 86400000)
  if (days < 0) return 'Overdue'
  if (days === 0) return 'Today'
  if (days === 1) return 'Tomorrow'
  return new Date(date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })
}

export function TenderTable({
  tenders,
  onProcess,
  onEdit,
  onDelete,
  history = false,
  emptyMessage,
  showCreateButton = false,
  onCreateClick,
}: TenderTableProps) {
  return (
    <div className="table-wrap">
      {tenders.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon-box">
            <FileText />
          </div>
          <h3>{history ? 'No completed records' : 'No tenders available'}</h3>
          <p>
            {emptyMessage ||
              (history
                ? 'Processed and completed records will be archived here.'
                : 'No tenders found in this view. Start by creating a new tender.')}
          </p>
          {showCreateButton && (
            onCreateClick ? (
              <button className="primary-button" onClick={onCreateClick}>
                <Plus className="w-4 h-4" /> Add New Tender
              </button>
            ) : (
              <Link href="/tender-details" className="primary-button">
                <Plus className="w-4 h-4" /> Go to Tender Details
              </Link>
            )
          )}
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              {/* Requirement 4: Action is the FIRST column */}
              <th className="action-col">Action</th>
              <th>Tender</th>
              <th>Department</th>
              <th>State</th>
              <th>Stage</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tenders.map(t => (
              <tr key={t.id}>
                {/* First column: Action */}
                <td className="action-col">
                  <div className="action-group">
                    <button
                      className="table-action"
                      title={history ? 'View Tender Details' : 'Process to next stage'}
                      onClick={() => onProcess(t)}
                    >
                      {history ? 'View' : 'Process'} <ArrowRight />
                    </button>
                    {onEdit && (
                      <button
                        className="icon-action"
                        title="Edit details"
                        onClick={() => onEdit(t)}
                      >
                        <Pencil />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        className="icon-action delete"
                        title="Delete tender"
                        onClick={() => onDelete(t.id)}
                      >
                        <Trash2 />
                      </button>
                    )}
                  </div>
                </td>
                <td>
                  <div className="tender-name">
                    <strong>{t.title}</strong>
                    <small>
                      {t.id} · {t.authority} {t.value ? `· ${t.value}` : ''}
                    </small>
                  </div>
                </td>
                <td>{t.department}</td>
                <td>{t.state}</td>
                <td>
                  <span className="badge badge-slate">{t.stage}</span>
                </td>
                <td>
                  <span className={`badge ${statusTone(t.status)}`}>{t.status}</span>
                </td>
                <td>
                  <span className="due-badge">
                    <Clock3 />
                    {dueLabel(t.due)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
