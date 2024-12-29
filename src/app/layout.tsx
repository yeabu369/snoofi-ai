import './globals.css'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SNOOFI AI',
  description: 'An AI chatbot representing the Reddit dog mascot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <h1 className="text-3xl font-bold text-center py-4 bg-[#FF4500] text-white">SNOOFI AI</h1>
        {children}
      </body>
    </html>
  )
}

