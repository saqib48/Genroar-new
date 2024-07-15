import Image from 'next/image'
import React from 'react'

const SideBanner = ({imgsrc,imgalt}) => {
  return (
    <div className='w-1/2'>
      <img className='w-[100%] h-auto hover:bg-white hover:opacity-40 hover:transition-all' src={imgsrc} alt={imgalt} />
    </div>
  )
}

export default SideBanner
