import ButtonBlue from '@/components/button/ButtonBlue'
import React from 'react'

const AllPopverCard = ({filter, onSelect }) => {
  const handleChange =(value)=>{
    onSelect({ [filter.queryName]: value });
  }
  return (
    <div className='my-1 py-1'>
        <p className='max-lg:text-xs'>{filter.placeholder}</p>
        <div className='space-x-3 space-y-3 max-lg:space-x-1 max-lg:space-y-1 max-lg:text-xs'>{filter.items.map((item)=><ButtonBlue key={item.name} onClick={()=>handleChange(item.value)}>{item.name}</ButtonBlue>)}</div>
    </div>
  )
}

export default AllPopverCard