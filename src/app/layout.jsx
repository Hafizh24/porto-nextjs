import { Poppins } from 'next/font/google'
import './globals.css'
import Theme from '@/components/utils/ThemeProvider'
import StickyNavbar from '@/components/Navbar/index.jsx'
import SimpleFooter from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900']
})

export const metadata = {
  title: 'Hafizh Khairuddin',
  description: 'Personal Website of Hafizh Khairuddin'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <!-- BootStrap Icon --> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </head>
      <body className={`${poppins.className} bg-[#f8f7f4] dark:bg-[#1e293b]`}>
        <Theme attribute="class" defaultTheme="system">
          <StickyNavbar />
          {children}
          <SimpleFooter />
        </Theme>
      </body>
    </html>
  )
}
