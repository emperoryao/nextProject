import type { Metadata } from 'next'
import { ABeeZee, ADLaM_Display, Comforter, Geist, Geist_Mono, Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import './globals.css'
import Link from 'next/link'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })
// const inter = Comforter({ subsets: ['latin'], weight: '400' })
const inter = ADLaM_Display({ subsets: ['latin'], weight: '400' })
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          {children}
          {modal}
        </AntdRegistry>
      </body>
    </html>
  )
}
