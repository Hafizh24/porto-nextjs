'use client'

import { Navbar, Typography, IconButton, Collapse } from '@material-tailwind/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ThemeToggle from '../utils/ThemeToggle'

const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" className="group p-1">
        <Link
          href={'/'}
          className="text-lg text-dark transition-all group-hover:text-primary dark:text-white">
          Home
        </Link>
      </Typography>
      <Typography as="li" className="group p-1">
        <Link
          href={'/about'}
          className="text-lg text-dark transition-all group-hover:text-primary dark:text-white">
          About
        </Link>
      </Typography>
      <Typography as="li" className="group p-1">
        <Link
          href={'/projects'}
          className="text-lg text-dark transition-all group-hover:text-primary dark:text-white">
          Projects
        </Link>
      </Typography>
      {/* <Typography as="li" className="group p-1">
        <Link
          href={'/contact'}
          className="text-lg text-dark transition-all group-hover:text-primary">
          Contact
        </Link>
      </Typography> */}
    </ul>
  )

  return (
    <>
      <Navbar
        variant="gradient"
        className="sticky top-0 z-10 h-max max-w-full rounded-none border-none bg-transparent px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center">
          <Link href="/" className=" py-2 text-lg font-bold uppercase text-primary">
            HafizhKh
          </Link>
          <div className="flex w-full items-center">
            <div className="hidden lg:ml-8 lg:mr-4 lg:block">{navList}</div>
            <ThemeToggle />
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 dark:text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </>
  )
}

export default StickyNavbar
