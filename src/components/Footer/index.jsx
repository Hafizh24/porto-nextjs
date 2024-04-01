'use client'

import { Typography } from '@material-tailwind/react'

const SimpleFooter = () => {
  return (
    <>
      <footer className="flex w-full justify-center border-t border-blue-gray-50 py-6">
        <Typography className="text-lg font-medium text-dark dark:text-white">
          2024 | Hafizh Khairuddin
        </Typography>
      </footer>
    </>
  )
}

export default SimpleFooter
