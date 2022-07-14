import React from 'react'
import { Header, Footer } from './'

const Layout = ({ children }) => {
  return (
    <div className='w-screen'>
      <Header />
      <main className='w-full lg:max-w-6xl px-4 lg:px-auto my-6 flex flex-col gap-6 items-center'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
