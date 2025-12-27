import './globals.css'
import localFont from 'next/font/local'
import { Shrikhand } from 'next/font/google'

const rethinkSans = localFont({
  src: '../public/fonts/RethinkSans-VariableFont_wght.ttf',
  variable: '--font-rethink-sans',
  display: 'swap',
})

const moligaDemo = localFont({
  src: '../public/fonts/Moliga-DEMO.otf',
  variable: '--font-moliga',
  display: 'swap',
})

const shrikhand = Shrikhand({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-shrikhand',
  display: 'swap',
})

export const metadata = {
  title: 'Home: Manav Juthani',
  description: 'Personal portfolio website of Manav Juthani - Data Science student at Simon Fraser University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rethinkSans.variable} ${moligaDemo.variable} ${shrikhand.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Iceland&family=Shrikhand&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

