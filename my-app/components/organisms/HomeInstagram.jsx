import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import { HomeInstagramSlider } from '../molecules/HomeInstagramSlider'

const HomeInstagram = () => {
  return (
    <div className='px-[5%] my-[5%] m-auto'>
      <div className='flex flex-col gap-2 items-center mb-8'>
          <Heading level='2'>Follow us On Instagram</Heading>
          <Paragraph>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</Paragraph>
      </div>
        <HomeInstagramSlider />
    </div>
  )
}

export default HomeInstagram
