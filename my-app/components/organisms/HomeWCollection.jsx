'use client'
import React from 'react'
import HomeProductSec from '../molecules/HomeProductSec';
import SideBanner from "@/components/molecules/SideBanner";
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const HomeWCollection = () => {
  return (
    <div className="px-[5%] mt-[5%] flex justify-around gap-6">
        <SideBanner imgsrc={'/assits/images/banner2.webp'} imgalt={'Banner 2'} />
        <div className='w-1/2 flex flex-col items-center gap-4'>
          <Heading level='2'>For Women’s Collection</Heading>
          <Paragraph>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</Paragraph>
          <div className=' flex justify-center gap-6 mb-5'>
              <HomeProductSec src='../assits/images/product1.webp' src2='../assits/images/product1bg.png' href='#' price='60$' sale='75$' name='Apple IPad with Retina' />
              <HomeProductSec src='../assits/images/coat2.webp' src2='../assits/images/coat3.webp' href='#' price='60$' sale='75$' name='Beat Solo 2' />
              <HomeProductSec src='../assits/images/shoe.webp' src2='../assits/images/shoe-nike.webp' href='#' price='60$' sale='75$' name='Marshel Protable Bluetooth' />
            </div>
            <div className=' flex justify-center gap-6 mb-5'>    
              <HomeProductSec src='../assits/images/coat4.webp' src2='../assits/images/coat5.webp' href='#' price='60$' sale='75$' name='Koss KPH7 Portable' />
              <HomeProductSec src='../assits/images/coat6.webp' src2='../assits/images/coat7.webp' href='#' price='60$' sale='75$' name='Beats EP Wired' />
              <HomeProductSec src='../assits/images/product1.webp' src2='../assits/images/product1bg.png' href='#' price='60$' sale='75$' name='Apple Iphone SE 16GB' />
          </div>
        </div>
        
    </div>
  )
}

export default HomeWCollection
