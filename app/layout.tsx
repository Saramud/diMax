// app/layout.tsx
import React from 'react'
import './globals.css'

import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
  title: 'Профессиональный автоподбор и диагностика — diMAXcar',
  description: 'Автоподобор и диагностика авто, автомобили из Японии и Европы',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
