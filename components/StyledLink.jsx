import React from 'react'
import Link from 'next/link'

const StyledLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className='w-fit text-mint-500 underline underline-offset-1 hover:bg-lime-100'>
        {children}
      </a>
    </Link>
  )
}

export default StyledLink
