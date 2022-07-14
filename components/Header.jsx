import React from 'react'
import Image from 'next/image'

const SearchIcon = () => {
  return (
    <button className='h-12 w-12 leading-none'>
      <span className='sr-only'>Bouton de recherche</span>
      <Image src='/search-icon.svg' alt='' width='24' height='24' />
    </button>
  )
}

const HamburgerIcon = () => {
  const HamburgerLineStyle =
    'h-0.5 w-6 my-[0.1565rem] bg-black transition ease transform duration-300'

  return (
    <button className='nav-btn flex flex-col h-12 w-12 justify-center items-center'>
      <div className={HamburgerLineStyle} />
      <div className={HamburgerLineStyle} />
      <div className={HamburgerLineStyle} />
    </button>
  )
}

const Header = () => {
  return (
    <header className='px-4'>
      <div className='flex justify-between items-center py-6 border-b border-gray-200'>
        <div className='flex items-center'>
          <h1 className='sr-only'>Antistaville</h1>
          <Image
            src='/antistaville.svg'
            alt='Logo de Antistaville'
            height='20'
            width='128'
          />
        </div>

        <div className='flex'>
          <SearchIcon />
          <HamburgerIcon />
        </div>
      </div>
    </header>
  )
}

export default Header
