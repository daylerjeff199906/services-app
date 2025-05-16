import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Jobli - Encuentra y ofrece servicios urgentes al instante',
  description:
    'Una forma rápida y sencilla de conectar a personas que necesitan ayuda ahora con quienes están listos para trabajar.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          toastOptions={{
            className:
              'bg-white text-gray-900 dark:bg-gray-900 dark:text-white',
            style: {
              backgroundColor: 'white',
              color: 'black'
            }
          }}
          position="top-right"
          closeButton={false}
        />
      </body>
    </html>
  )
}
