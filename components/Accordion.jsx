import React from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const AccordionItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleItem = (e) => {
    const item = e.currentTarget.parentNode
    const arrow = e.currentTarget.parentNode.querySelector('.accordion-arrow')

    if (!isOpen) {
      item.lastChild.style.display = 'flex'

      gsap.to(item, {
        duration: 0.2,
        height: 'auto',
        ease: 'power2.out',
      })
      gsap.to(arrow, {
        duration: 0.2,
        rotation: '0deg',
      })
      setIsOpen(!isOpen)
    } else {
      gsap.to(item, {
        duration: 0.2,
        height: '3rem',
        ease: 'power2.out',
        onComplete: () => {
          item.lastChild.style.display = 'none'
        },
      })
      gsap.to(arrow, {
        duration: 0.2,
        rotation: '180deg',
      })
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className='w-full h-12 overflow-hidden '>
      <button
        className='w-full h-12 py-3 font-semibold text-sm border-t border-gray-200'
        onClick={toggleItem}>
        <h4 className='text-left flex justify-between'>
          <span className='text-sm'>{title}</span>
          <div className='accordion-arrow rotate-180'>
            <Image
              src='/accordion-arrow.svg'
              alt=''
              width='14'
              height='14'></Image>
          </div>
        </h4>
      </button>
      <p className='mb-4'>{description}</p>
    </div>
  )
}

const Accordion = ({ accordionItems }) => {
  return (
    <section className='border-b'>
      {accordionItems.map((item, index) => (
        <div key={`accordionItem-${index}`}>
          <AccordionItem title={item.title} description={item.description} />
        </div>
      ))}
    </section>
  )
}

export default Accordion
