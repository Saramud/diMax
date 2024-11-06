// app/layout.tsx
import React from 'react'
import localFont from 'next/font/local'
import './globals.css'

import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const prataRegular = localFont({
  src: './fonts/Prata-Regular.ttf',
  variable: '--font-prata-regular',
  weight: '100 900',
})

export const metadata = {
  title: 'Профессиональный автоподбор и диагностика — diMAXcar',
  description: 'Автоподобор и диагностика авто, автомобили из Японии и Европы',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${prataRegular.variable}`}>
        {children}
      </body>
    </html>
  )
}
