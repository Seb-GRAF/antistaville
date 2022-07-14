import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

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
  const [currentRoute, setCurrentRoute] = useState('/')
  const router = useRouter()

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0]

    const nestedRoutes = pathWithoutQuery
      .split('/')
      .filter((route) => route.length > 0)

    setCurrentRoute(nestedRoutes[0])
  }, [])

  const linkStyle =
    'font-semibold lg:font-normal  mb-2 lg:mb-0 text-2xl lg:text-base border-t-2 lg:border-none py-2 lg:py-0 lg:hover:underline lg:hover:underline-offset-4'
  const activeStyle = 'lg:underline lg:underline-offset-4'

  return (
    <nav className='nav hidden lg:flex lg:gap-4 lg:items-center lg:justify-center w-full lg:w-fit h-full overflow-hidden'>
      <div
        className={`${linkStyle} ${
          currentRoute == 'administration-et-autorites' ? activeStyle : null
        }
        `}>
        <Link href='/administration'>Administration et autorités</Link>
      </div>
      <div
        className={`${linkStyle} ${
          currentRoute == 'vie-pratique' ? activeStyle : null
        }
        `}>
        <Link href='/vie-pratique'>Vie pratique</Link>
      </div>
      <div
        className={`${linkStyle} ${
          currentRoute == 'culture-sport-loisirs' ? activeStyle : null
        }
        `}>
        <Link href='/culture-sport-loisirs'>Culture, sport et loisirs</Link>
      </div>
      <div
        className={`${linkStyle} ${
          currentRoute == 'agenda' ? activeStyle : null
        }`}>
        <Link href='/agenda'>Agenda</Link>
      </div>
      <div
        className={`${linkStyle} ${
          currentRoute == 'actualites' ? activeStyle : null
        }`}>
        <Link href='/actualites'>Actualités</Link>
      </div>
      <div
        className={`lg:hidden border-b-2 ${linkStyle} ${
          currentRoute == 'guichet' ? activeStyle : null
        }`}>
        <Link href='/guichet'>Guichet</Link>
      </div>
    </nav>
  )
}

const Search = () => {
  return (
    <form
      action='/'
      className='hidden lg:hidden search w-full h-full overflow-hidden'>
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
      height: '4.5rem',
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
      expandHeader('27rem')
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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        collapseHeader()
        setIsNavOpen(false)
        setIsSearchOpen(false)
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <header className='flex flex-col lg:flex-row items-between justify-center lg:justify-between header w-full max-w-6xl h-[4.5rem] overflow-hidden px-4'>
      <div className='flex justify-between items-center'>
        {/* LOGO */}
        <Link href='/' passHref>
          <a className='flex items-center'>
            <h1 className='sr-only'>Antistaville</h1>
            <Image
              src='/antistaville.svg'
              alt='Logo de Antistaville'
              height='20'
              width='128'
            />
          </a>
        </Link>

        {/* MOBILE NAV BUTTONS */}
        <div className='flex items-center h-16 lg:hidden'>
          <SearchIcon isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />
          <HamburgerIcon isNavOpen={isNavOpen} toggleNav={toggleNav} />
        </div>
      </div>

      <Search />
      <Nav />
      <div className='hidden lg:flex lg:items-center lg:justify-center'>
        {/* SEARCH ICON */}
        <div className='relative h-12 w-12 flex items-center justify-center overflow-hidden hover:overflow-visible'>
          <form action='/' className='absolute right-full w-64'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Rechercher du contenu'
              className='w-full py-2 px-4 bg-gray-100 rounded-lg border-2 border-gray-200'
            />
            <button type='submit' className='sr-only'>
              Rechercher
            </button>
          </form>
          <button className='h-12 w-12 group-hover:overflow-auto'>
            <Image src='/search-icon.svg' alt='' width='24' height='24' />
          </button>
        </div>

        {/* GUICHET BUTTON */}
        <Button>Guichet</Button>
      </div>
    </header>
  )
}

export default Header
