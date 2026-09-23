'use client'

import React, { useState } from 'react'
import { CheckCircle2, Pencil, Plus, Settings2, Trash2 } from 'lucide-react'
import { MasterKey } from '@/types/tender'
import { useTenders } from '@/context/TenderContext'

export default function SettingsPage() {
  const { masters, setMasters, notify } = useTenders()

  const labels: Record<MasterKey, string> = {
    states: 'States & Regions',
    departments: 'Departments',
    firms: 'Bidding Firms',
    tenderTypes: 'Tender Types',
  }

  const [selected, setSelected] = useState<MasterKey>('states')
  const [newValue, setNewValue] = useState('')

  const handleAdd = () => {
    const trimmed = newValue.trim()
    if (!trimmed) return
    if (masters[selected].includes(trimmed)) {
      notify(`'${trimmed}' already exists in ${labels[selected]}`)
      return
    }

    setMasters(prev => ({
      ...prev,
      [selected]: [...prev[selected], trimmed],
    }))
    setNewValue('')
    notify(`Added '${trimmed}' to ${labels[selected]}`)
  }

  const handleRemove = (item: string) => {
    if (window.confirm(`Delete '${item}' from ${labels[selected]}?`)) {
      setMasters(prev => ({
        ...prev,
        [selected]: prev[selected].filter(x => x !== item),
      }))
      notify(`Removed '${item}' from ${labels[selected]}`)
    }
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">CONFIGURATION & MASTERS</p>
          <h1>System Settings</h1>
          <p>Configure dropdown options, master categories, and organization parameters.</p>
        </div>
        <div className="badge badge-green flex items-center gap-1.5 py-1.5 px-3">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Syncs with Local Storage</span>
        </div>
      </div>

      <div className="card grid lg:grid-cols-[240px_1fr] min-h-[440px] overflow-hidden border border-slate-200">
        {/* Settings Navigation Tabs */}
        <aside className="border-r border-slate-100 p-4 bg-slate-50/70 flex flex-col gap-1">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2">
            Master Data
          </p>
          {(Object.keys(labels) as MasterKey[]).map(key => {
            const isSel = selected === key
            return (
              <button
                key={key}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isSel
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
                onClick={() => setSelected(key)}
              >
                <div className="flex items-center gap-2">
                  <Settings2 className="w-4 h-4" />
                  <span>{labels[key]}</span>
                </div>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    isSel ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {masters[key].length}
                </span>
              </button>
            )
          })}
        </aside>

        {/* Master Data Content Pane */}
        <div className="p-7">
          <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 m-0">{labels[selected]}</h2>
              <p className="text-xs text-slate-500 m-1">
                These values are populated in dropdown menus throughout tender forms.
              </p>
            </div>
            <span className="badge badge-blue">Active Master</span>
          </div>

          {/* Add input */}
          <div className="flex gap-2 max-w-md mb-6">
            <input
              value={newValue}
              onChange={e => setNewValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAdd()}
              placeholder={`Add new ${labels[selected].toLowerCase()}...`}
              className="border border-slate-200 rounded-lg px-3 py-2 text-xs flex-1 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <button className="primary-button text-xs py-2" onClick={handleAdd}>
              <Plus className="w-3.5 h-3.5" /> Add Value
            </button>
          </div>

          {/* List of items */}
          <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">
            {masters[selected].map(item => (
              <div
                key={item}
                className="flex items-center justify-between px-4 py-3 bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-xs font-medium text-slate-700">{item}</span>
                <button
                  className="icon-action delete"
                  title={`Delete ${item}`}
                  onClick={() => handleRemove(item)}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
