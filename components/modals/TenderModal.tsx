'use client'

import React, { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { Masters, Stage, Status, Tender } from '@/types/tender'
import { stagesList } from '@/context/TenderContext'

interface TenderModalProps {
  mode: 'new' | 'edit' | 'process'
  tender?: Tender
  masters: Masters
  onClose: () => void
  onSave: (tender: Tender) => void
}

export function TenderModal({
  mode,
  tender,
  masters,
  onClose,
  onSave,
}: TenderModalProps) {
  const currentStageIndex = tender
    ? stagesList.findIndex(s => s.label === tender.stage)
    : 0

  const defaultNextStage =
    currentStageIndex >= 0 && currentStageIndex < stagesList.length - 1
      ? stagesList[currentStageIndex + 1].label
      : tender?.stage || 'Eligibility Check'

  const [form, setForm] = useState<Tender>(
    tender || {
      id: '',
      title: '',
      authority: '',
      department: masters.departments[0] || 'Public Works',
      state: masters.states[0] || 'Madhya Pradesh',
      value: '',
      stage: 'Eligibility Check',
      status: 'In Progress',
      due: new Date().toISOString().slice(0, 10),
      owner: 'Admin',
      remarks: '',
    }
  )

  const [targetStage, setTargetStage] = useState<Stage>(
    mode === 'process' ? defaultNextStage : form.stage
  )

  const set = (key: keyof Tender, value: any) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title.trim() || !form.authority.trim()) return

    if (mode === 'process') {
      const isFinal = targetStage === 'Financial Open Check'
      const updatedStatus: Status = isFinal ? 'Completed' : form.status === 'Completed' ? 'Completed' : 'Ready'
      onSave({
        ...form,
        stage: targetStage,
        status: updatedStatus,
      })
    } else {
      onSave(form)
    }
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-head">
          <div>
            <p className="eyebrow">
              {mode === 'new'
                ? 'NEW TENDER RECORD'
                : mode === 'edit'
                ? 'UPDATE RECORD'
                : 'WORKFLOW ACTION'}
            </p>
            <h2>
              {mode === 'new'
                ? 'Create New Tender'
                : mode === 'edit'
                ? 'Edit Tender Details'
                : `Process Stage: ${form.stage}`}
            </h2>
          </div>
          <button onClick={onClose} aria-label="Close modal">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="modal-record-pill">
          <span className="badge badge-blue">{form.id || 'Draft Record'}</span>
          <span>All changes persist automatically to Local Storage.</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="full-col">
              Tender Title *
              <input
                value={form.title}
                onChange={e => set('title', e.target.value)}
                placeholder="e.g. Multi-lane Highway resurfacing and drainage"
                required
              />
            </label>

            <label>
              Issuing Authority / Client *
              <input
                value={form.authority}
                onChange={e => set('authority', e.target.value)}
                placeholder="e.g. Municipal Corporation / NHAI"
                required
              />
            </label>

            <label>
              Tender Value (Estimated)
              <input
                value={form.value}
                onChange={e => set('value', e.target.value)}
                placeholder="e.g. ₹ 4.5 Cr"
              />
            </label>

            <label>
              Department
              <select
                value={form.department}
                onChange={e => set('department', e.target.value)}
              >
                {masters.departments.map(d => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>

            <label>
              State / Region
              <select
                value={form.state}
                onChange={e => set('state', e.target.value)}
              >
                {masters.states.map(s => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Submission Due Date
              <input
                type="date"
                value={form.due}
                onChange={e => set('due', e.target.value)}
              />
            </label>

            {mode === 'process' ? (
              <label>
                Move to Stage *
                <select
                  value={targetStage}
                  onChange={e => setTargetStage(e.target.value as Stage)}
                >
                  {stagesList.map(s => (
                    <option key={s.label} value={s.label}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            ) : (
              <label>
                Current Stage
                <select
                  value={form.stage}
                  onChange={e => set('stage', e.target.value as Stage)}
                >
                  {stagesList.map(s => (
                    <option key={s.label} value={s.label}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label>
              Status
              <select
                value={form.status}
                onChange={e => set('status', e.target.value as Status)}
              >
                <option value="In Progress">In Progress</option>
                <option value="Ready">Ready</option>
                <option value="Submitted">Submitted</option>
                <option value="Completed">Completed</option>
                <option value="At Risk">At Risk</option>
              </select>
            </label>

            <label className="full-col">
              Remarks & Stage Verification Notes
              <textarea
                value={form.remarks || ''}
                onChange={e => set('remarks', e.target.value)}
                placeholder="Enter stage completion notes, checklist items, or document references..."
              />
            </label>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="primary-button"
              disabled={!form.title.trim() || !form.authority.trim()}
            >
              {mode === 'new'
                ? 'Create Tender'
                : mode === 'edit'
                ? 'Save Changes'
                : 'Complete & Advance'}{' '}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
