import React from 'react'
import { Header, Footer } from './'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='px-4 my-6 flex flex-col gap-6'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
