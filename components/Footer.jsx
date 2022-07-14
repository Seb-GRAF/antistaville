import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../components'

const openingHours = [
  {
    day: 'Lundi',
    opening: '09:00',
    closing: '14:00',
  },
  {
    day: 'Mardi',
    opening: '09:00',
    closing: '14:00',
  },
  {
    day: 'Mercredi',
    opening: '09:00',
    closing: '17:00',
  },
  {
    day: 'Jeudi',
    opening: '09:00',
    closing: '14:00',
  },
  {
    day: 'Vendredi',
    opening: '09:00',
    closing: '14:00',
  },
]

const Footer = () => {
  return (
    <footer className='px-4 pt-14 pb-6 bg-gray-50'>
      <section className='flex flex-col gap-14 '>
        {/* NAVIGATION */}
        <nav>
          <h3 className='mb-3 text-sm font-semibold uppercase tracking-wider'>
            navigation
          </h3>
          <ul className='flex flex-col gap-2 font-bold text-xl font-Lexend'>
            <li>Administration et autorités</li>
            <li>Vie pratique</li>
            <li>Culture, sport et loisirs</li>
            <li>Agenda</li>
            <li>Actualités</li>
            <li>Guichet</li>
          </ul>
        </nav>

        {/* LIENS UTILES */}
        <div>
          <h3 className='mb-3 text-sm font-semibold uppercase tracking-wider'>
            Liens utiles
          </h3>
          <ul className='flex flex-col gap-2 text-lg font-normal'>
            <li>Économie locale</li>
            <li>Location de salles</li>
            <li>Offres d&apos;emploi</li>
            <li>Organiser une manifestation</li>
            <li>Conseil Communal</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className='p-4 bg-white rounded-lg'>
          <div className='mb-8'>
            <h3 className='mb-2.5 text-2xl font-bold capitalize tracking-[-0.3px]'>
              newsletter
            </h3>
            <p>
              Inscrivez-vous pour rester au courant de la vie
              d&apos;Antistaville.
            </p>
          </div>

          <form action='/' className='flex flex-col gap-3'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Entrez votre email'
              className='px-3.5 py-2 text-gray-700 font-base bg-gray-50 rounded-lg'
            />
            <Button type={'submit'}>Je m&apos;inscris</Button>
          </form>
        </div>
      </section>

      <div className='w-full h-[1px] bg-gray-300 my-10'></div>

      <section className='flex flex-col gap-10'>
        {/* ADRESSE */}
        <address>
          <h3 className='mb-3 text-sm font-semibold uppercase tracking-wider'>
            Adresse
          </h3>
          <p className='flex flex-col'>
            <span>Mairie d&apos;Antistaville</span>
            <span>Rue de l&apos;Amour-du-Web</span>
            <span>Case postale 42 1000</span>
            <span>Antistaville</span>
          </p>
        </address>
        {/* CONTACT */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-sm font-semibold uppercase tracking-wider'>
            Contact
          </h3>

          <div className='flex flex-col gap-2'>
            <Link href='Tel: 0041221234567' passHref>
              <a className='w-fit mb-2 px-3.5 py-2 font-bold bg-white border-2 border-gray-200 rounded-lg'>
                022 123 45 67
              </a>
            </Link>

            <Link href='mailto: mairie@antistaville.ch' passHref>
              <a className='w-fit px-3.5 py-2 font-bold bg-white border-2 border-gray-200 rounded-lg'>
                mairie@antistaville.ch
              </a>
            </Link>
          </div>
        </div>

        {/* HORAIRES */}
        <div>
          <h3 className='mb-3 text-sm font-semibold uppercase tracking-wider'>
            horaires du guichet
          </h3>
          <ul>
            {openingHours.map(({ day, opening, closing }, index) => (
              <li className='grid grid-cols-2' key={`schedule-${index}`}>
                <p>{day}</p>
                <p>
                  <time dateTime='09:00'>{opening}</time>
                  <span>-</span>
                  <time dateTime='14:00'>{closing}</time>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-sm font-semibold uppercase tracking-wider'>
            Réseaux sociaux
          </h3>

          <ul className='flex gap-6'>
            <li>
              <Link href='facebook.com' passHref>
                <Image src='/facebook.svg' alt='' width='24' height='24' />
              </Link>
            </li>
            <li>
              <Link href='instagram.com' passHref>
                <Image src='/instagram.svg' alt='' width='24' height='24' />
              </Link>
            </li>
            <li>
              <Link href='linkedin.com' passHref>
                <Image src='/linkedin.svg' alt='' width='24' height='24' />
              </Link>
            </li>
            <li>
              <Link href='youtube.com' passHref>
                <Image src='/youtube.svg' alt='' width='24' height='24' />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <div className='w-full h-[1px] bg-gray-300 my-10'></div>

      <section className='flex flex-col gap-4'>
        <p className='opacity-60'>Copyright © 2022 Antistaville</p>
        <div className='flex flex-wrap gap-2'>
          <Link href='/'>
            <span className='underline underline-offset-4 opacity-60 hover:opacity-100'>
              Protections des données
            </span>
          </Link>
          <Link href='/'>
            <span className='underline underline-offset-4 opacity-60 hover:opacity-100'>
              Plan du site
            </span>
          </Link>
          <Link href='/'>
            <span className='underline underline-offset-4 opacity-60 hover:opacity-100'>
              Lexique
            </span>
          </Link>
        </div>
        <p>
          <span className='opacity-60'>Réalisé par </span>
          <Link href='https://antistatique.net'>
            <span className='underline underline-offset-4 opacity-60 hover:opacity-100'>
              Antistatique
            </span>
          </Link>
        </p>
      </section>
    </footer>
  )
}

export default Footer
