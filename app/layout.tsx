import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import ToasterProvider from './providers/ToasterProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asslmad platform',
  description: 'Asslmad for learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <RegisterModal />
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}
