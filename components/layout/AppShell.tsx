'use client'

import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, FileCheck2, LogIn } from 'lucide-react'
import { useTenders } from '@/context/TenderContext'
import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'

export function AppShell({ children }: { children: React.ReactNode }) {
  const { hydrated, loggedIn, login, toast } = useTenders()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!hydrated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-blue-400 gap-3">
        <FileCheck2 className="w-10 h-10 animate-bounce" />
        <span className="font-semibold tracking-wide text-slate-200">Initializing Tender FMS...</span>
      </div>
    )
  }

  if (!loggedIn) {
    return (
      <main className="min-h-screen grid lg:grid-cols-2 bg-white">
        <section className="bg-slate-900 p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <strong className="block text-lg">Tender FMS</strong>
              <span className="text-xs text-blue-400 tracking-wider uppercase font-semibold">Workflow Engine</span>
            </div>
          </div>
          <div className="max-w-md my-12">
            <p className="text-blue-400 font-bold text-xs tracking-wider uppercase mb-3">TENDER OPERATIONS SIMPLIFIED</p>
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-white mb-4">
              Move every tender forward with speed and precision.
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Complete workflow tracking from Eligibility verification to Financial Bid Opening.
            </p>
          </div>
          <div className="border-t border-slate-800 pt-6 flex items-center gap-6">
            <div>
              <strong className="text-2xl font-bold text-white block">100%</strong>
              <span className="text-xs text-slate-400">Local Storage Sync</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <strong className="text-2xl font-bold text-white block">8 Stages</strong>
              <span className="text-xs text-slate-400">Milestone Pipeline</span>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-sm">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <LogIn className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Sign in to Tender FMS</h2>
            <p className="text-slate-500 text-xs mb-8">Enter your credentials to access your workspace.</p>

            <form
              onSubmit={e => {
                e.preventDefault()
                login()
              }}
              className="flex flex-col gap-4"
            >
              <label className="flex flex-col gap-1.5 text-xs font-semibold text-slate-700">
                Email Address
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="admin@company.com"
                  required
                  className="border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="flex flex-col gap-1.5 text-xs font-semibold text-slate-700">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <button type="submit" className="primary-button w-full py-3 mt-2">
                Sign in to Workspace <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-center text-xs text-slate-400 mt-6">Demo mode · use any email and password</p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <div className="app-shell">
      <Sidebar
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="main-content">
        <Topbar onOpenMobile={() => setMobileOpen(true)} />
        {children}
      </div>

      {toast && (
        <div className="toast">
          <CheckCircle2 className="w-5 h-5" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  )
}
