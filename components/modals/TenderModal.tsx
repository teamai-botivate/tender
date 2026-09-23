'use client'

import React, { useState } from 'react'
import { ArrowRight, FileUp, Loader2, Plus, Sparkles, Trash2, X } from 'lucide-react'
import { BeneficiaryBank, Masters, Stage, Status, Tender, TenderBidDetails, TenderPackage } from '@/types/tender'
import { stagesList } from '@/context/TenderContext'
import { emptyBid } from '@/lib/tender-docs'

// Shape returned by /api/extract-tender (null = not stated in the PDF)
type Extracted = {
  [K in
    | 'title' | 'authority' | 'authorityFullName' | 'addresseeDesignation' | 'authorityAddress' | 'department'
    | 'state' | 'estimatedValue' | 'rfsNo' | 'rfsDate' | 'corrigendum' | 'workName' | 'shortWorkName'
    | 'bidDeadlineDate' | 'bidDeadlineTime' | 'tenderFeePerPackage' | 'bidValidityDays'
    | 'financialRequirementCr' | 'technicalRequirement' | 'jurisdiction']: string | null
} & {
  packages: TenderPackage[]
  beneficiaryBank: { [K in keyof BeneficiaryBank]: string | null }
}

const isDate = (v: string | null): v is string => !!v && /^\d{4}-\d{2}-\d{2}$/.test(v)

// Prefer the existing master spelling when the extracted value matches one case-insensitively.
const matchMaster = (value: string, list: string[]) =>
  list.find(item => item.toLowerCase() === value.toLowerCase()) ?? value

function applyExtraction(form: Tender, x: Extracted, masters: Masters): { tender: Tender; filled: number } {
  let filled = 0
  const pick = (value: string | null, current: string) => {
    const v = value?.trim()
    if (!v) return current
    filled++
    return v
  }

  const bid: TenderBidDetails = { ...(form.bid ?? emptyBid()) }
  bid.rfsNo = pick(x.rfsNo, bid.rfsNo)
  bid.rfsDate = isDate(x.rfsDate) ? pick(x.rfsDate, bid.rfsDate) : bid.rfsDate
  bid.corrigendum = pick(x.corrigendum, bid.corrigendum)
  bid.workName = pick(x.workName, bid.workName)
  bid.shortWorkName = pick(x.shortWorkName, bid.shortWorkName)
  bid.authorityFullName = pick(x.authorityFullName, bid.authorityFullName)
  bid.addresseeDesignation = pick(x.addresseeDesignation, bid.addresseeDesignation)
  bid.authorityAddress = pick(x.authorityAddress, bid.authorityAddress)
  bid.bidDeadlineTime = pick(x.bidDeadlineTime, bid.bidDeadlineTime)
  bid.tenderFeePerPackage = pick(x.tenderFeePerPackage, bid.tenderFeePerPackage)
  bid.bidValidityDays = pick(x.bidValidityDays, bid.bidValidityDays)
  bid.financialRequirementCr = pick(x.financialRequirementCr, bid.financialRequirementCr)
  bid.technicalRequirement = pick(x.technicalRequirement, bid.technicalRequirement)
  bid.jurisdiction = pick(x.jurisdiction, bid.jurisdiction)
  if (x.packages?.length) {
    bid.packages = x.packages.map(p => ({ code: p.code, region: p.region, rfx: p.rfx, emdLakh: p.emdLakh }))
    filled++
  }
  const bank = { ...bid.beneficiaryBank }
  for (const key of Object.keys(bank) as (keyof BeneficiaryBank)[]) {
    bank[key] = pick(x.beneficiaryBank?.[key] ?? null, bank[key])
  }
  bid.beneficiaryBank = bank

  const tender: Tender = {
    ...form,
    title: pick(x.title ?? x.shortWorkName, form.title),
    authority: pick(x.authority, form.authority),
    value: pick(x.estimatedValue, form.value),
    department: x.department?.trim() ? matchMaster(pick(x.department, form.department), masters.departments) : form.department,
    state: x.state?.trim() ? matchMaster(pick(x.state, form.state), masters.states) : form.state,
    due: isDate(x.bidDeadlineDate) ? pick(x.bidDeadlineDate, form.due) : form.due,
    bid,
  }
  return { tender, filled }
}

// Keep a value that is not in the master list selectable (e.g. a state read from a PDF).
const withCurrent = (list: string[], current: string) =>
  current && !list.includes(current) ? [...list, current] : list

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
      bid: emptyBid(),
    }
  )

  const [targetStage, setTargetStage] = useState<Stage>(
    mode === 'process' ? defaultNextStage : form.stage
  )

  const set = (key: keyof Tender, value: any) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const showBidDetails = mode !== 'process'
  const bid = form.bid ?? emptyBid()

  const setBid = <K extends keyof TenderBidDetails>(key: K, value: TenderBidDetails[K]) =>
    setForm(prev => ({ ...prev, bid: { ...(prev.bid ?? emptyBid()), [key]: value } }))

  const setBank = (key: keyof BeneficiaryBank, value: string) =>
    setBid('beneficiaryBank', { ...bid.beneficiaryBank, [key]: value })

  const setPackage = (index: number, key: keyof TenderPackage, value: string) =>
    setBid('packages', bid.packages.map((p, i) => (i === index ? { ...p, [key]: value } : p)))

  const addPackage = () =>
    setBid('packages', [...bid.packages, { code: `P-${bid.packages.length + 1}`, region: '', rfx: '', emdLakh: '' }])

  const removePackage = (index: number) =>
    setBid('packages', bid.packages.filter((_, i) => i !== index))

  const [extracting, setExtracting] = useState(false)
  const [extractMessage, setExtractMessage] = useState<{ tone: 'ok' | 'error'; text: string } | null>(null)

  const handlePdfUpload = async (file: File | undefined) => {
    if (!file) return
    setExtracting(true)
    setExtractMessage(null)
    try {
      const body = new FormData()
      body.append('file', file)
      const res = await fetch('/api/extract-tender', { method: 'POST', body })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.data) throw new Error(json.error || 'Could not read the PDF.')
      const extracted = json.data as Extracted
      const { filled } = applyExtraction(form, extracted, masters)
      setForm(prev => applyExtraction(prev, extracted, masters).tender)
      setExtractMessage({
        tone: 'ok',
        text: `Filled ${filled} field${filled === 1 ? '' : 's'} from “${file.name}”. Please review before saving.`,
      })
    } catch (err) {
      setExtractMessage({ tone: 'error', text: err instanceof Error ? err.message : 'Could not read the PDF.' })
    } finally {
      setExtracting(false)
    }
  }

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
      <div className={showBidDetails ? 'modal modal-wide' : 'modal'}>
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
                {withCurrent(masters.departments, form.department).map(d => (
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
                {withCurrent(masters.states, form.state).map(s => (
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

            {showBidDetails && (
              <>
                <div className="pdf-autofill">
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-900">
                    <Sparkles className="w-4 h-4" /> Auto-fill from Tender PDF (AI)
                  </div>
                  <p className="text-xs text-blue-900/70 -mt-1">
                    Upload the tender / NIT / RfS PDF and the fields below (and every generated document) will be filled
                    automatically. Review the values before saving.
                  </p>
                  <div className="flex items-center gap-3">
                    <label className="secondary-button cursor-pointer text-xs">
                      <FileUp className="w-4 h-4" />
                      {extracting ? 'Reading PDF…' : 'Upload Tender PDF'}
                      <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        disabled={extracting}
                        onChange={e => {
                          const file = e.target.files?.[0]
                          e.target.value = ''
                          handlePdfUpload(file)
                        }}
                      />
                    </label>
                    {extracting && <Loader2 className="w-4 h-4 animate-spin text-blue-600" />}
                  </div>
                  {extractMessage && (
                    <p className={extractMessage.tone === 'ok' ? 'text-xs text-emerald-700' : 'text-xs text-red-600'}>
                      {extractMessage.text}
                    </p>
                  )}
                </div>

                <div className="form-section-title">Document Details (used to auto-fill bid documents)</div>

                <label>
                  RfS / Tender No.
                  <input
                    value={bid.rfsNo}
                    onChange={e => setBid('rfsNo', e.target.value)}
                    placeholder="e.g. CSPDCL/NIT/ULA-114.23 MW-/1095"
                  />
                </label>
                <label>
                  RfS / Tender Date
                  <input type="date" value={bid.rfsDate} onChange={e => setBid('rfsDate', e.target.value)} />
                </label>
                <label>
                  Corrigendum
                  <input
                    value={bid.corrigendum}
                    onChange={e => setBid('corrigendum', e.target.value)}
                    placeholder="e.g. Corrigendum-1 dated 03.09.2026"
                  />
                </label>
                <label>
                  Authority Full Name
                  <input
                    value={bid.authorityFullName}
                    onChange={e => setBid('authorityFullName', e.target.value)}
                    placeholder="e.g. Chhattisgarh State Power Distribution Company Limited"
                  />
                </label>
                <label>
                  Addressee Designation
                  <input
                    value={bid.addresseeDesignation}
                    onChange={e => setBid('addresseeDesignation', e.target.value)}
                    placeholder="e.g. The Executive Director (RA&PM)"
                  />
                </label>
                <label>
                  Jurisdiction (Courts at)
                  <input value={bid.jurisdiction} onChange={e => setBid('jurisdiction', e.target.value)} placeholder="e.g. Raipur" />
                </label>
                <label className="full-col">
                  Authority Address
                  <textarea
                    value={bid.authorityAddress}
                    onChange={e => setBid('authorityAddress', e.target.value)}
                    placeholder="Full postal address for bid submission"
                  />
                </label>
                <label className="full-col">
                  Name of Work
                  <textarea
                    value={bid.workName}
                    onChange={e => setBid('workName', e.target.value)}
                    placeholder="Full scope of work as per the tender"
                  />
                </label>
                <label>
                  Short Name of Work
                  <input
                    value={bid.shortWorkName}
                    onChange={e => setBid('shortWorkName', e.target.value)}
                    placeholder="One line, used on envelope stickers"
                  />
                </label>
                <label>
                  Bid Deadline Time
                  <input
                    value={bid.bidDeadlineTime}
                    onChange={e => setBid('bidDeadlineTime', e.target.value)}
                    placeholder="e.g. 15:00 Hrs."
                  />
                </label>
                <label>
                  Tender Fee (per package)
                  <input value={bid.tenderFeePerPackage} onChange={e => setBid('tenderFeePerPackage', e.target.value)} placeholder="e.g. 10,000" />
                </label>
                <label>
                  Bid Validity (days)
                  <input value={bid.bidValidityDays} onChange={e => setBid('bidValidityDays', e.target.value)} placeholder="e.g. 180" />
                </label>
                <label>
                  Financial Requirement (Rs. Cr)
                  <input
                    value={bid.financialRequirementCr}
                    onChange={e => setBid('financialRequirementCr', e.target.value)}
                    placeholder="e.g. 301.00"
                  />
                </label>
                <label>
                  Technical Requirement
                  <input
                    value={bid.technicalRequirement}
                    onChange={e => setBid('technicalRequirement', e.target.value)}
                    placeholder="e.g. 60,100 kWp OR 10,000 installations"
                  />
                </label>

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

                <div className="form-section-title">Beneficiary Bank Details (for EMD Bank Guarantee)</div>
                <label>
                  Account Holder
                  <input value={bid.beneficiaryBank.accountHolder} onChange={e => setBank('accountHolder', e.target.value)} />
                </label>
                <label>
                  Bank Name
                  <input value={bid.beneficiaryBank.bankName} onChange={e => setBank('bankName', e.target.value)} />
                </label>
                <label>
                  Branch
                  <input value={bid.beneficiaryBank.branch} onChange={e => setBank('branch', e.target.value)} />
                </label>
                <label>
                  Account No.
                  <input value={bid.beneficiaryBank.accountNo} onChange={e => setBank('accountNo', e.target.value)} />
                </label>
                <label>
                  IFSC Code
                  <input value={bid.beneficiaryBank.ifsc} onChange={e => setBank('ifsc', e.target.value)} />
                </label>
                <label>
                  Account Type
                  <input value={bid.beneficiaryBank.accountType} onChange={e => setBank('accountType', e.target.value)} />
                </label>
              </>
            )}
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
