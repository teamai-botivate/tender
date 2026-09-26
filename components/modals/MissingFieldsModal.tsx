'use client'

import React, { useState } from 'react'
import { ArrowRight, Plus, Trash2, X } from 'lucide-react'
import { Tender, TenderBidDetails } from '@/types/tender'
import { emptyBid } from '@/lib/tender-docs'

type TextBidKey =
  | 'rfsNo' | 'rfsDate' | 'workName' | 'authorityFullName' | 'addresseeDesignation'
  | 'authorityAddress' | 'tenderFeePerPackage' | 'jurisdiction' | 'signingDate'

interface FieldConfig {
  label: string
  key: TextBidKey
  type?: 'text' | 'date' | 'textarea'
  placeholder?: string
}

// Mirrors the label strings lib/tender-docs.ts#missingDocFields() reports, so
// only the fields that are actually missing show up here.
const SIMPLE_FIELDS: FieldConfig[] = [
  { label: 'RfS / Tender No.', key: 'rfsNo', placeholder: 'e.g. CSPDCL/NIT/ULA-114.23 MW-/1095' },
  { label: 'RfS / Tender Date', key: 'rfsDate', type: 'date' },
  { label: 'Name of Work', key: 'workName', type: 'textarea', placeholder: 'Full scope of work as per the tender' },
  { label: 'Authority Full Name', key: 'authorityFullName', placeholder: 'e.g. Chhattisgarh State Power Distribution Company Limited' },
  { label: 'Addressee Designation', key: 'addresseeDesignation', placeholder: 'e.g. The Executive Director (RA&PM)' },
  { label: 'Authority Address', key: 'authorityAddress', type: 'textarea', placeholder: 'Full postal address for bid submission' },
  { label: 'Tender Fee per Package', key: 'tenderFeePerPackage', placeholder: 'e.g. 10,000' },
  { label: 'Jurisdiction', key: 'jurisdiction', placeholder: 'e.g. Raipur' },
  { label: 'Signing Date', key: 'signingDate', type: 'date' },
]

export function MissingFieldsModal({
  tender,
  missing,
  onClose,
  onSave,
}: {
  tender: Tender
  missing: string[]
  onClose: () => void
  onSave: (tender: Tender) => void
}) {
  const [form, setForm] = useState<Tender>(tender)
  const bid = form.bid ?? emptyBid()

  const setBid = <K extends keyof TenderBidDetails>(key: K, value: TenderBidDetails[K]) =>
    setForm(prev => ({ ...prev, bid: { ...(prev.bid ?? emptyBid()), [key]: value } }))

  const setText = (key: TextBidKey, value: string) => setBid(key, value)

  const missingSet = new Set(missing)
  const fields = SIMPLE_FIELDS.filter(f => missingSet.has(f.label))
  const needsPackages = missingSet.has('At least one Package') || missingSet.has('EMD amount for every Package')
  const needsComponents = missingSet.has('Technical Components (Format-12)')

  const setPackage = (index: number, key: 'code' | 'region' | 'rfx' | 'emdLakh', value: string) =>
    setBid('packages', bid.packages.map((p, i) => (i === index ? { ...p, [key]: value } : p)))
  const addPackage = () =>
    setBid('packages', [...bid.packages, { code: `P-${bid.packages.length + 1}`, region: '', rfx: '', emdLakh: '' }])
  const removePackage = (index: number) => setBid('packages', bid.packages.filter((_, i) => i !== index))

  const setComponent = (index: number, key: 'item' | 'make' | 'compliance', value: string) =>
    setBid('technicalComponents', bid.technicalComponents.map((c, i) => (i === index ? { ...c, [key]: value } : c)))
  const addComponent = () => setBid('technicalComponents', [...bid.technicalComponents, { item: '', make: '', compliance: '' }])
  const removeComponent = (index: number) =>
    setBid('technicalComponents', bid.technicalComponents.filter((_, i) => i !== index))

  return (
    <div className="modal-backdrop" style={{ zIndex: 60 }}>
      <div className="modal modal-wide">
        <div className="modal-head">
          <div>
            <p className="eyebrow">FILL MISSING FIELDS</p>
            <h2>Complete {tender.id}&apos;s bid documents</h2>
          </div>
          <button onClick={onClose} aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="modal-record-pill">
          <span>Only the fields still missing from the bid documents are shown here.</span>
        </div>

        <div className="form-grid">
          {fields.map(f => (
            <label key={f.key} className={f.type === 'textarea' ? 'full-col' : ''}>
              {f.label}
              {f.type === 'textarea' ? (
                <textarea value={bid[f.key]} onChange={e => setText(f.key, e.target.value)} placeholder={f.placeholder} />
              ) : (
                <input
                  type={f.type === 'date' ? 'date' : 'text'}
                  value={bid[f.key]}
                  onChange={e => setText(f.key, e.target.value)}
                  placeholder={f.placeholder}
                />
              )}
            </label>
          ))}

          {needsPackages && (
            <>
              <div className="form-section-title">Packages / Lots & EMD</div>
              <div className="full-col flex flex-col gap-2">
                {bid.packages.map((pkg, i) => (
                  <div className="package-row" key={i}>
                    <input value={pkg.code} onChange={e => setPackage(i, 'code', e.target.value)} placeholder="P-1" />
                    <input value={pkg.region} onChange={e => setPackage(i, 'region', e.target.value)} placeholder="Region" />
                    <input value={pkg.rfx} onChange={e => setPackage(i, 'rfx', e.target.value)} placeholder="RFX No." />
                    <input value={pkg.emdLakh} onChange={e => setPackage(i, 'emdLakh', e.target.value)} placeholder="EMD (Lakh)" />
                    <button type="button" className="icon-action delete" title="Remove package" onClick={() => removePackage(i)}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button type="button" className="secondary-button text-xs self-start" onClick={addPackage}>
                  <Plus className="w-4 h-4" /> Add Package
                </button>
              </div>
            </>
          )}

          {needsComponents && (
            <>
              <div className="form-section-title">Technical Components (Format-12)</div>
              <div className="full-col flex flex-col gap-2">
                {bid.technicalComponents.map((c, i) => (
                  <div className="component-row" key={i}>
                    <input value={c.item} onChange={e => setComponent(i, 'item', e.target.value)} placeholder="Item, e.g. Solar PV Module" />
                    <input value={c.make} onChange={e => setComponent(i, 'make', e.target.value)} placeholder="Make(s) proposed" />
                    <input value={c.compliance} onChange={e => setComponent(i, 'compliance', e.target.value)} placeholder="Compliance standard (IS/IEC)" />
                    <button type="button" className="icon-action delete" title="Remove component" onClick={() => removeComponent(i)}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button type="button" className="secondary-button text-xs self-start" onClick={addComponent}>
                  <Plus className="w-4 h-4" /> Add Component
                </button>
              </div>
            </>
          )}
        </div>

        <div className="modal-actions">
          <button type="button" className="secondary-button" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="primary-button" onClick={() => onSave(form)}>
            Save & Preview <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
