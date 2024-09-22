import React from 'react'

const ButtonBlue = ({children, ...props}) => {
  return (
    <button {...props} className='p-2 border border-gray-200 rounded-md hover:border-blue-500 hover:text-blue-500 active:border-blue-500 max-lg:p-1'>
        {children}
    </button>
  )
}

export default ButtonBlue