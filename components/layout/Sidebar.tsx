'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ClipboardCheck,
  FileCheck2,
  FileText,
  FolderKanban,
  Globe,
  LayoutDashboard,
  LogOut,
  Package,
  Settings2,
  ShieldCheck,
  Upload,
  X,
  Zap,
} from 'lucide-react'
import { useTenders } from '@/context/TenderContext'

const navItems = [
  { label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { label: '1. Tender Details', path: '/tender-details', icon: FileText, key: 'Tender Details' },
  { label: '2. Eligibility Check', path: '/eligibility-check', icon: ClipboardCheck, key: 'Eligibility Check' },
  { label: '3. Sample Details', path: '/sample-details', icon: Package, key: 'Sample Details' },
  { label: '4. EMD Ready', path: '/emd-ready', icon: ShieldCheck, key: 'EMD Ready' },
  { label: '5. Document Ready', path: '/document-ready', icon: FileCheck2, key: 'Document Ready' },
  { label: '6. Document Upload in portal', path: '/document-upload-in-portal', icon: Upload, key: 'Document Upload in portal' },
  { label: '7. Submit in website', path: '/submit-in-website', icon: Globe, key: 'Submit in website' },
  { label: '8. Technical Open Check', path: '/technical-open-check', icon: Settings2, key: 'Technical Open Check' },
  { label: '9. Financial Open Check', path: '/financial-open-check', icon: Zap, key: 'Financial Open Check' },
  { label: 'All Document', path: '/doc1', icon: FileText, key: 'All Document' },
]

export function Sidebar({
  mobileOpen,
  onCloseMobile,
}: {
  mobileOpen: boolean
  onCloseMobile: () => void
}) {
  const pathname = usePathname()
  const { tenders, logout } = useTenders()

  const getCount = (key?: string) => {
    if (!key) return null
    if (key === 'Tender Details') return tenders.length
    return tenders.filter(t => t.stage === key).length
  }

  return (
    <>
      {mobileOpen && (
        <button
          className="scrim"
          aria-label="Close navigation"
          onClick={onCloseMobile}
        />
      )}

      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        {/* 1. FIXED HEADER - Does NOT scroll */}
        <div className="sidebar-header">
          <Link href="/" className="brand" onClick={onCloseMobile}>
            <div className="brand-mark">
              <FileCheck2 />
            </div>
            <div className="brand-text">
              <strong>Tender FMS</strong>
              <span>Workflow Hub</span>
            </div>
          </Link>
          <button
            className="close-mobile"
            aria-label="Close menu"
            onClick={onCloseMobile}
          >
            <X />
          </button>
        </div>

        {/* 2. SCROLLABLE NAVIGATION - ONLY this area scrolls */}
        <nav className="sidebar-nav">
          <p className="sidebar-section-title">Navigation</p>
          {navItems.map(item => {
            const Icon = item.icon
            const isActive =
              item.path === '/'
                ? pathname === '/'
                : pathname.startsWith(item.path)
            const count = getCount(item.key)

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={onCloseMobile}
              >
                <Icon />
                <span>{item.label}</span>
                {(item as any).badge ? (
                  <span className="nav-count bg-red-600/30 text-red-300 font-bold border border-red-500/30 text-[10px]">
                    {(item as any).badge}
                  </span>
                ) : count !== null && count > 0 ? (
                  <span className="nav-count">{count}</span>
                ) : null}
              </Link>
            )
          })}
        </nav>

        {/* 3. FIXED FOOTER - Does NOT scroll, includes Settings, Logout, and User Card */}
        <div className="sidebar-footer">
          <Link
            href="/settings"
            className={`nav-item ${pathname === '/settings' ? 'active' : ''}`}
            onClick={onCloseMobile}
          >
            <Settings2 />
            <span>Settings</span>
          </Link>

          {/* Logout button permanently fixed in footer */}
          <button
            className="nav-item logout-nav"
            onClick={() => {
              onCloseMobile()
              logout()
            }}
          >
            <LogOut />
            <span>Logout</span>
          </button>

          <div className="profile-card">
            <div className="avatar">AS</div>
            <div className="profile-info">
              <strong>Arjun Sharma</strong>
              <small>Administrator</small>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
