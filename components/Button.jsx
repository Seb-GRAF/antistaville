import React from 'react'

const Button = ({ type, children }) => {
  return (
    <button
      type={type ?? 'button'}
      id='submit'
      className='w-fit px-3.5 py-2 font-bold bg-anise-600 hover:bg-lime-200 rounded-lg'>
      {children}
    </button>
  )
}

export default Button
