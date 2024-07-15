import React from 'react'
import AnchorTag from '../atoms/anchorTag'
import "../../app/globals.css"
import Span from '../atoms/Span'
import ServiceImg from '@/components/organisms/ServiceImg'
import Container from '../atoms/Container'
import OurService from '@/components/organisms/OurService'


function ServicesData() {
    return (
        <div className="">
                   <Container>
        
        <div className='pt-[4%]'>
            <div className='flex gap-[5px]'>
                <AnchorTag variant="success">Home</AnchorTag>
                <span className='text-[#999] text-[12px]'>/</span>
               <Span>Our Services</Span>
            </div>
        </div>

        <ServiceImg/>
        </Container>
        <OurService/>


        </div>
    )
}

export default ServicesData