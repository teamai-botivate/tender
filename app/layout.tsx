import type { Metadata } from 'next'
import './globals.css'
import { TenderProvider } from '@/context/TenderContext'
import { AppShell } from '@/components/layout/AppShell'

export const metadata: Metadata = {
  title: 'Tender FMS - Tender Pipeline & Workflow Management System',
  description: 'Enterprise workflow management system for tracking tender stages, compliance checks, submissions, and bid openings.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TenderProvider>
          <AppShell>{children}</AppShell>
        </TenderProvider>
      </body>
    </html>
  )
}
