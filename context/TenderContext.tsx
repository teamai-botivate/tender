'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Masters, Stage, Status, Tender } from '@/types/tender'

interface TenderContextType {
  hydrated: boolean
  loggedIn: boolean
  tenders: Tender[]
  masters: Masters
  toast: string
  notify: (msg: string) => void
  login: () => void
  logout: () => void
  addTender: (data: Omit<Tender, 'id'> & { id?: string }) => string
  updateTender: (id: string, data: Partial<Tender>) => void
  deleteTender: (id: string) => void
  advanceStage: (id: string, targetStage?: Stage, targetStatus?: Status, remarks?: string) => void
  setMasters: React.Dispatch<React.SetStateAction<Masters>>
}

const STORAGE_KEY = 'tender-fms-state-v2'

export const defaultMasters: Masters = {
  states: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Delhi', 'Gujarat', 'Uttar Pradesh', 'Karnataka'],
  departments: ['Public Works', 'Urban Development', 'Energy', 'Water Resources', 'Health Department', 'Education'],
  firms: ['Arjun Infra Pvt. Ltd.', 'Sharma Projects', 'Apex Builders'],
  tenderTypes: ['Open Tender', 'Limited Tender', 'EOI', 'Global Tender'],
}

export const stagesList: { label: Stage; path: string; short: string }[] = [
  { label: 'Eligibility Check', path: '/eligibility-check', short: 'Eligibility' },
  { label: 'Sample Details', path: '/sample-details', short: 'Sample' },
  { label: 'EMD Ready', path: '/emd-ready', short: 'EMD Ready' },
  { label: 'Document Ready', path: '/document-ready', short: 'Documents' },
  { label: 'Document Upload in portal', path: '/document-upload-in-portal', short: 'Portal Upload' },
  { label: 'Submit in website', path: '/submit-in-website', short: 'Website Submit' },
  { label: 'Technical Open Check', path: '/technical-open-check', short: 'Technical' },
  { label: 'Financial Open Check', path: '/financial-open-check', short: 'Financial' },
]

const TenderContext = createContext<TenderContextType | undefined>(undefined)

export function TenderProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true) // default true so user immediately sees dashboard
  // Requirement 3: all dummy data removed -> empty array by default
  const [tenders, setTenders] = useState<Tender[]>([])
  const [masters, setMasters] = useState<Masters>(defaultMasters)
  const [toast, setToast] = useState('')

  const notify = (msg: string) => {
    setToast(msg)
    window.setTimeout(() => setToast(''), 2800)
  }

  // Load from local storage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed.tenders)) {
          // Validate and sanitize stages
          const sanitized: Tender[] = parsed.tenders.map((t: any) => {
            let st = t.stage
            if (st === 'Submit In Website') st = 'Submit in website'
            const validStages: Stage[] = [
              'Eligibility Check',
              'Sample Details',
              'EMD Ready',
              'Document Ready',
              'Document Upload in portal',
              'Submit in website',
              'Technical Open Check',
              'Financial Open Check',
            ]
            if (!validStages.includes(st)) st = 'Eligibility Check'
            return { ...t, stage: st }
          })
          setTenders(sanitized)
        } else {
          setTenders([])
        }
        if (parsed.masters) setMasters(parsed.masters)
        if (typeof parsed.loggedIn === 'boolean') setLoggedIn(parsed.loggedIn)
      } else {
        // First run - empty tenders list (NO dummy data)
        setTenders([])
        setMasters(defaultMasters)
      }
    } catch {
      setTenders([])
      setMasters(defaultMasters)
    }
    setHydrated(true)
  }, [])

  // Auto-sync to local storage whenever tenders, masters, or loggedIn changes
  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ tenders, masters, loggedIn })
      )
    }
  }, [hydrated, tenders, masters, loggedIn])

  const login = () => {
    setLoggedIn(true)
    notify('Signed in successfully')
  }

  const logout = () => {
    setLoggedIn(false)
    notify('You have been logged out')
  }

  const addTender = (data: Omit<Tender, 'id'> & { id?: string }) => {
    const generatedId =
      data.id?.trim() || `TND-${new Date().getFullYear()}-${String(tenders.length + 1).padStart(3, '0')}`
    const newTender: Tender = {
      ...data,
      id: generatedId,
      owner: data.owner || 'Admin',
      createdAt: new Date().toISOString(),
    }
    setTenders(prev => [newTender, ...prev])
    notify(`Tender ${generatedId} created successfully`)
    return generatedId
  }

  const updateTender = (id: string, data: Partial<Tender>) => {
    setTenders(prev =>
      prev.map(t => (t.id === id ? { ...t, ...data } : t))
    )
    notify(`Tender ${id} updated`)
  }

  const deleteTender = (id: string) => {
    setTenders(prev => prev.filter(t => t.id !== id))
    notify(`Tender ${id} deleted`)
  }

  const advanceStage = (
    id: string,
    targetStage?: Stage,
    targetStatus?: Status,
    remarks?: string
  ) => {
    setTenders(prev =>
      prev.map(t => {
        if (t.id !== id) return t
        let nextStage = targetStage
        if (!nextStage) {
          const currentIdx = stagesList.findIndex(s => s.label === t.stage)
          const nextIdx = Math.min(currentIdx + 1, stagesList.length - 1)
          nextStage = stagesList[nextIdx].label
        }
        const isLastStage = nextStage === 'Financial Open Check'
        const nextStatus = targetStatus || (isLastStage ? 'Completed' : 'Ready')
        return {
          ...t,
          stage: nextStage,
          status: nextStatus,
          remarks: remarks !== undefined ? remarks : t.remarks,
        }
      })
    )
    notify(`Tender moved to next stage & saved`)
  }

  return (
    <TenderContext.Provider
      value={{
        hydrated,
        loggedIn,
        tenders,
        masters,
        toast,
        notify,
        login,
        logout,
        addTender,
        updateTender,
        deleteTender,
        advanceStage,
        setMasters,
      }}
    >
      {children}
    </TenderContext.Provider>
  )
}

export function useTenders() {
  const context = useContext(TenderContext)
  if (!context) {
    throw new Error('useTenders must be used within a TenderProvider')
  }
  return context
}
