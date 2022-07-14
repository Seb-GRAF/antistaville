import React from 'react'
import { Seo, Breadcrumbs } from '../../components'

const Antistabus = () => {
  const title = "L'Antistabus : une ludothèque sur roues"

  return (
    <>
      <Seo title={title} description={title} />
      <Breadcrumbs crumbs={['Actualités', title]} />

      <h2 className='font-bold '>{title}</h2>
    </>
  )
}

export default Antistabus
