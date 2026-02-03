import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renando | 3D Artist & VFX Specialist',
  description: 'Crafting immersive digital worlds. Portfolio of 3D art and VFX projects.',
  themeColor: '#000000',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
