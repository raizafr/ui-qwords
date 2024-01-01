import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qwords.com: Cloud Web Hosting Indonesia Akses Cepat Aman',
  description: 'Hosting Indonesia Terbaik uptime server 99.99%, garansi 30 hari uang kembali. Cloud Hosting Terbaik untuk website, bisnis online dan reseller domain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
