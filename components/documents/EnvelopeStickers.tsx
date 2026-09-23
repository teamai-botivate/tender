import React from 'react'
import { COMPANY } from '@/lib/company'
import { DocData } from '@/lib/tender-docs'
import { A4Page } from './primitives'

function Sticker({ doc, title, contains, banner }: { doc: DocData; title: string; contains: string; banner: string }) {
  return (
    <A4Page>
      <div className="bg-green-700 text-white text-center font-bold text-lg p-2 mb-4 uppercase">{title}</div>
      <p className="font-bold mb-2">RfS No.: {doc.rfs}</p>
      {doc.corrigendum && <p className="text-xs text-gray-600 mb-4">(read with {doc.corrigendum})</p>}
      <p className="mb-2 text-sm">Name of Work: {doc.shortWorkName}</p>
      <p className="font-bold mb-6 text-sm">Packages: {doc.packagesLabel}</p>

      <p className="font-bold mb-2">TO:</p>
      <p className="mb-1">{doc.addressee},</p>
      <p className="mb-1">
        {doc.authorityFullName} ({doc.authority}),
      </p>
      <p className="mb-8 whitespace-pre-line">{doc.authorityAddress}</p>

      <p className="font-bold mb-2">FROM (Bidder):</p>
      <p className="font-bold mb-1">{COMPANY.name}</p>
      <p className="mb-1 text-sm">{COMPANY.address}</p>
      <p className="mb-8 text-sm">
        Contact: {COMPANY.signatory}, {COMPANY.signatoryDesignation} — {COMPANY.phone} — {COMPANY.email}
      </p>

      <p className="font-bold text-green-700 text-sm mb-6 text-justify">CONTAINS: {contains}</p>
      <p className="font-bold text-red-600 text-center mb-6">{banner}</p>
      <div className="flex justify-between text-sm border-t border-black pt-2 mt-12">
        <p>Bid Deadline: to reach by {doc.deadline}</p>
        <p>Bidder&apos;s Seal & Signature: ____________________</p>
      </div>
    </A4Page>
  )
}

export function EnvelopeStickers({ doc }: { doc: DocData }) {
  return (
    <>
      <Sticker
        doc={doc}
        title="Outer Sealed Cover — Bid Documents"
        contains="Envelope-I (Covering Letter, Tender Fee & Bid Security/EMD) and Envelope-II (Techno-Commercial Documents)."
        banner={`DO NOT OPEN — TO BE OPENED ONLY BY ${doc.authority} ON THE SCHEDULED BID-OPENING DATE.`}
      />
      <Sticker
        doc={doc}
        title="Envelope-I"
        contains={`Covering Letter (Format-2); online Tender Processing Fee & EMD confirmation; Original EMD Bank Guarantees (Annexure-K) for ${doc.packageRange} — total Rs. ${doc.totalEmdCrore} Crore.`}
        banner="ENVELOPE-I — COVERING LETTER, TENDER FEE & BID SECURITY (EMD)"
      />
      <Sticker
        doc={doc}
        title="Envelope-II"
        contains="Techno-Commercial Documents — Formats 1/2/5/6/7/9/10/11/12; Annexures D/E/F/H/I; COI, MoA/AoA, GST & PAN; CA-certified financials & audited accounts; Experience Certificate + LOA; signed & stamped RfS. (NO Price Bid.)"
        banner="ENVELOPE-II — TECHNO-COMMERCIAL DOCUMENTS (NO PRICE BID)"
      />
    </>
  )
}
