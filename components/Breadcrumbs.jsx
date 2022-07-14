import React from 'react'
import Link from 'next/link'

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav>
      <ul className='flex text-gray-700'>
        <li className='hidden sm:visible sm:flex mr-1'>
          <Link href='/' passHref>
            <a>
              <span className='mr-1'>Accueil</span>
              <span className=''>{'>'}</span>
            </a>
          </Link>
        </li>

        {crumbs.map((item, index) => {
          return index === crumbs.length - 1 ? (
            <li
              className='hidden sm:visible sm:flex mr-1'
              key={`crumb-${index}`}>
              <Link href='/' passHref>
                <p aria-current='page'>{item}</p>
              </Link>
            </li>
          ) : (
            <li className='flex mr-1'>
              <Link href={`/${item}`} passHref>
                <a>
                  <span className='sm:hidden mr-2'>{'<'}</span>
                  <span className='mr-1'>{item}</span>
                  <span className='hidden sm:visible'>{'>'}</span>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
