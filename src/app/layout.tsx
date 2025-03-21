import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Klāvs Kalniņš - Unity Fullstack Developer',
  description: 'Portfolio of Klāvs Kalniņš - Creatively Versatile Programmer - Fullstack Developer - Unity Game Developer',
  keywords: ['Unity Developer', 'Fullstack Developer', 'Game Development', 'C#', 'DOTNET', 'React', 'Next.js', 'Portfolio', 'Klāvs Kalniņš'],
  openGraph: {
    title: 'Klāvs Kalniņš - Unity Fullstack Developer',
    description: 'Discover the portfolio of Klāvs Kalniņš, a creatively versatile fullstack developer and Unity game developer.',
    url: 'https://klavs.lv',
    siteName: 'Klāvs Kalniņš Portfolio',
    images: [
      {
        url: 'https://klavs.lv/partea/line_art.svg',
        width: 1200,
        height: 630,
        alt: 'Klāvs Kalniņš Portfolio Preview',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://klavs.lv',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
