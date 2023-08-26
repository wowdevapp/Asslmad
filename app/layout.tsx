'use client'
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import type { Metadata } from 'next'
import { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { OfferModal } from './components/modals/OfferModal'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import createEmotionCache from './createEmotionCache'
import './globals.css'
import ToasterProvider from './providers/ToasterProvider'
const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const font = Nunito({ subsets: ['latin'] })
const theme = createTheme({
  palette: {
    primary: {
      main: '#EAB308',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export const metadata: Metadata = {
  title: 'Asslmad platform',
  description: 'Asslmad for learning',
}

export default function RootLayout({
  children,
  emotionCache = clientSideEmotionCache,
}: {
  children: React.ReactNode
  emotionCache: EmotionCache
}) {
  return (
    <html lang="en">
    <body className={font.className}>
      <CacheProvider value={emotionCache} >
        <ThemeProvider theme={theme}>
            <ToasterProvider />
            <RegisterModal />
            <OfferModal />
            <Navbar></Navbar>
            <div className='pb-20 pt-28'>
              {children}
            </div>
        </ThemeProvider>
      </CacheProvider>
    </body>
    </html>
  )
}
