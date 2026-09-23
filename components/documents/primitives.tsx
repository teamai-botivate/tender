import React from 'react'
import { COMPANY } from '@/lib/company'
import { DocData } from '@/lib/tender-docs'

export const TABLE = 'w-full border-collapse border border-black mb-6 table-fixed text-[11px] leading-tight break-words'
export const CELL = 'border border-black p-1 break-words hyphens-auto'
export const HEAD_ROW = 'bg-green-700 text-white'

export const DocumentHeader = () => (
  <div className="flex justify-between items-start mb-10 border-b-[3px] border-[#C6D22A]/50 pb-6">
    <div className="space-y-1">
      <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">{COMPANY.name}</h1>
      <p className="text-xs text-slate-500 font-medium">(Formerly known as {COMPANY.formerName})</p>
      <p className="text-xs text-slate-500 font-medium">CIN : {COMPANY.cin}</p>
      <p className="text-xs text-slate-500 mt-2">Regd. Office : {COMPANY.address}</p>
      <p className="text-xs text-slate-500">
        Tel. : {COMPANY.phone} • <span className="text-blue-500">{COMPANY.email}</span> •{' '}
        <span className="text-blue-500">{COMPANY.website}</span>
      </p>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200 shadow-sm">
        <div className="w-8 h-8 rounded-full border-[5px] border-t-green-500 border-r-blue-500 border-b-yellow-500 border-l-blue-400"></div>
      </div>
      <div>
        <div className="text-3xl font-black italic text-[#8CC63F] tracking-tighter drop-shadow-sm">ROTOMAG</div>
        <div className="text-xs italic text-blue-500 font-semibold mt-0.5">
          water <span className="text-green-500">energy</span> <span className="text-slate-400">motion</span>
        </div>
      </div>
    </div>
  </div>
)

export const SignatureBlock = ({ doc }: { doc: DocData }) => (
  <div className="mt-16 pt-8 border-t border-slate-200">
    <p className="font-bold mb-8 text-slate-700">For {COMPANY.name}</p>
    <p className="text-slate-600 font-medium">
      ({COMPANY.signatory} — {COMPANY.signatoryDesignation})
    </p>
    <div className="flex justify-between mt-4 text-slate-500 text-sm font-medium">
      <p>Date: {doc.signDate}</p>
      <p>Place: {doc.place}</p>
    </div>
  </div>
)

export const A4Page = ({ children, letterhead = true }: { children: React.ReactNode; letterhead?: boolean }) => (
  <div className="a4-page bg-white w-[210mm] min-h-[297mm] mx-auto p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] mb-16 text-sm text-slate-800 leading-relaxed font-sans border border-slate-200 rounded-sm relative overflow-hidden">
    {letterhead && <DocumentHeader />}
    {children}
  </div>
)

export const FormatTag = ({ children }: { children: React.ReactNode }) => (
  <div className="text-right font-bold underline mb-4">{children}</div>
)

export const DocTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-center font-bold text-green-600 text-lg mb-6">{children}</h2>
)

export const StampNote = ({ notarised = false }: { notarised?: boolean }) => (
  <p className="text-center italic text-xs mb-8 text-gray-500">
    (To be printed/executed on non-judicial stamp paper of appropriate value
    {notarised ? ' and duly NOTARISED' : ''}.)
  </p>
)

export const WitnessNotary = () => (
  <div className="flex justify-between items-center text-sm border-t border-gray-300 pt-8">
    <p>WITNESSES: 1. ________________ 2. ________________</p>
    <p>NOTARY (Seal & Signature): __________________</p>
  </div>
)
