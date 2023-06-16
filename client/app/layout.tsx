import './globals.css'
import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vending machine',
  description: 'Blue Vending',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, RootLayoutTwClass.body)}>
        {children}
      </body>
    </html>
  )
}

const RootLayoutTwClass = {
  body: `bg-base-100 h-[100svh]`,
}
