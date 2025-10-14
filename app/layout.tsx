import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexus Gym - One membership for all your fitness needs',
  description: 'A fitness movement that is worth breaking a sweat for. Unlimited access to group classes, all gyms and at-home workouts in Tirupur.',
  keywords: 'fitness, gym, workout, nexus pass, group classes, at-home workouts, tirupur, tamil nadu',
  authors: [{ name: 'Nexus Gym' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
