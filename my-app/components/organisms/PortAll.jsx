import React from 'react'
import { PortProduct } from '../molecules/PortProduct'

const PortAll = () => {
  return (
    <div>
      <div className='flex justify-between w-[100%] flex-wrap ' >
        <PortProduct src='/assits/images/portfolio1.webp' contant={'Looked Up One Of The More'} />
        <PortProduct src='/assits/images/portfolio1.webp' contant={'Looked Up One Of The More'} />
        <PortProduct src='/assits/images/portfolio1.webp' contant={'Looked Up One Of The More'} />
        <PortProduct src='/assits/images/portfolio1.webp' contant={'Looked Up One Of The More'} />
        <PortProduct src='/assits/images/portfolio1.webp'  contant={'Looked Up One Of The More'}/>
        <PortProduct src='/assits/images/portfolio1.webp' contant={'Looked Up One Of The More'} />
    </div>
        
    </div>
  )
}

export default PortAll