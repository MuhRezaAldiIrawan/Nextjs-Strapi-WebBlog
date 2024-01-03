import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
import '@/public/css/tailwind.min.css'
import '@/public/libs/icofont/icofont.min.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#ECEFF2] dark:bg-gray-900"> 
          {children}
      </body>
    </html>
  )
}
