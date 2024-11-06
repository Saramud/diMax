// app/layout.tsx
import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Автоподбор',
  description: 'Автоподобор и диагностика авто, автомобили из Японии и Европы',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
