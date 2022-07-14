import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import gsap from 'gsap'

const SearchIcon = ({ isSearchOpen, toggleSearch }) => {
  return (
    <button className='h-12 w-12 leading-none' onClick={toggleSearch}>
      <span className='sr-only'>Bouton de recherche</span>
      {isSearchOpen ? (
        <span className='w-6 h-6 text-2xl'>✕</span>
      ) : (
        <Image src='/search-icon.svg' alt='' width='24' height='24' />
      )}
    </button>
  )
}

const HamburgerIcon = ({ isNavOpen, toggleNav }) => {
  const hamburgerLineStyle =
    'h-0.5 w-6 my-[0.1565rem] bg-black transition ease transform duration-300'

  return (
    <button
      className='nav-btn flex flex-col h-12 w-12 justify-center items-center'
      onClick={toggleNav}>
      <div
        className={`${hamburgerLineStyle} ${
          isNavOpen ? 'rotate-45 translate-y-1.5' : null
        }`}
      />
      <div
        className={`${hamburgerLineStyle} ${isNavOpen ? 'opacity-0' : null}`}
      />
      <div
        className={`${hamburgerLineStyle} ${
          isNavOpen ? '-rotate-45 -translate-y-1.5' : null
        }`}
      />
    </button>
  )
}

const Nav = () => {
  return (
    <nav className='nav hidden w-full h-full overflow-hidden'>
      <div className='w-full font-semibold mb-2 text-3xl border-y-2 py-2'>
        <Link href='/'>Link</Link>
      </div>
      <p className='font-semibold mb-2 text-3xl border-b-2 py-2'>Link</p>
      <p className='font-semibold mb-2 text-3xl border-b-2 py-2'>Link</p>
      <p className='font-semibold mb-2 text-3xl border-b-2 py-2'>Link</p>
      <p className='font-semibold mb-2 text-3xl border-b-2 py-2'>Link</p>
    </nav>
  )
}

const Search = () => {
  return (
    <form action='/' className='hidden search w-full h-full'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search'
        className='w-full p-4 bg-gray-100'
      />
    </form>
  )
}

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const expandHeader = (height) => {
    gsap.to('.header', {
      duration: 0.5,
      height,
      ease: 'power2.out',
    })

    // prevents scroll
    document.querySelector('body').classList.add('fixed')
  }

  const collapseHeader = () => {
    gsap.to('.header', {
      duration: 0.5,
      height: '4rem',
      ease: 'power2.out',
    })

    // prevents scroll
    document.querySelector('body').classList.remove('fixed')
  }

  const toggleNav = () => {
    const search = document.querySelector('.search')
    const nav = document.querySelector('.nav')

    if (!isNavOpen) {
      nav.classList.remove('hidden')
      search.classList.add('hidden')
      setIsSearchOpen(false)
      expandHeader('25rem')
    } else {
      collapseHeader()
    }
    setIsNavOpen(!isNavOpen)
  }

  const toggleSearch = () => {
    const search = document.querySelector('.search')
    const nav = document.querySelector('.nav')

    if (!isSearchOpen) {
      search.classList.remove('hidden')
      nav.classList.add('hidden')
      setIsNavOpen(false)
      expandHeader('7.5rem')
    } else {
      collapseHeader()
    }
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <header className='header h-16 overflow-hidden px-4'>
      <div className='flex justify-between '>
        {/* LOGO */}
        <div className='flex items-center'>
          <h1 className='sr-only'>Antistaville</h1>
          <Image
            src='/antistaville.svg'
            alt='Logo de Antistaville'
            height='20'
            width='128'
          />
        </div>

        {/* MOBILE NAV BUTTONS */}
        <div className='flex items-center h-16 sm:hidden'>
          <SearchIcon isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />
          <HamburgerIcon isNavOpen={isNavOpen} toggleNav={toggleNav} />
        </div>
      </div>
      <Search />
      <Nav />
    </header>
  )
}

export default Header
