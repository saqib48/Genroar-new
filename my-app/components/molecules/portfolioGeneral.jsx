import React from 'react'
import Button from '../atoms/Button'
import { PortProduct } from './PortProduct'

function portfolioGeneral() {
  return (
    <div>
        <div className=' justify-between w-[100%] flex flex-wrap'>
        <PortProduct src='/assits/images/portfolio4.webp' contant={'Looked Up One Of The More'} />
        <PortProduct src='/assits/images/portfolio4.webp' contant={'Looked Up One Of The More'} />
        <PortProduct src='/assits/images/portfolio4.webp' contant={'Looked Up One Of The More'} />
        <PortProduct src='/assits/images/portfolio4.webp'  contant={'Looked Up One Of The More'}/>
        <PortProduct src='/assits/images/portfolio4.webp' contant={'Looked Up One Of The More'} />
        <PortProduct src='/assits/images/portfolio4.webp' contant={'Looked Up One Of The More'} />
         </div>
    </div>
  )
}

export default portfolioGeneral