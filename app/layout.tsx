import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'G4 Shul — Torah · Chevra · Fabreng',
  description: 'A working beis medrash on the lower east side. Three minyanim a day, a shiur every night, and a chevra that shows up.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
