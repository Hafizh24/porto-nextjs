import { Inter } from 'next/font/google'
import './globals.css'
import StickyNavbar from './components/Navbar/index.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hafizh Khairuddin',
  description: 'Personal Website of Hafizh Khairuddin'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- BootStrap Icon --> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        {/* <!-- AOS --> */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={inter.className}>
        <StickyNavbar />
        {children}
      </body>
    </html>
  )
}
