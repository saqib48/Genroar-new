import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

function ServiceImg() {
  return (
    <div className='flex my-[15px]'>
        <div className="">
        <img className='w-[95%] py-[20px]' src="/assits/images/services1.webp" alt="" />
            <Heading level='3'>DESIGN THE COVER</Heading>
            <Paragraph>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</Paragraph>
        </div>
        <div className="">
        <img className='w-[95%] py-[20px]' src="/assits/images/services2.webp" alt="" />
            <Heading level='3'>DESIGN THE COVER</Heading>
            <Paragraph>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</Paragraph>
        </div>
        <div className="">
        <img className='w-[95%] py-[20px]' src="/assits/images/services3.webp" alt="" />
            <Heading level='3'>DESIGN THE COVER</Heading>
            <Paragraph>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</Paragraph>
        </div>
       
    </div>
  )
}

export default ServiceImg