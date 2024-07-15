import React from 'react'
import Container from '../atoms/Container'
import AnchorTag from '../atoms/anchorTag'
import Span from '../atoms/Span'
import ContactData from '../molecules/ContactData'
import Contactproject from '../molecules/Contactproject'
import Map from '../molecules/Map'
import Footer from './Footer'

function ContactUs() {
  return (
    <div className=''>
        <Container>
        <div className='pt-[4%]'>
            <div className='flex gap-[5px]'>
                <AnchorTag variant="success">Home</AnchorTag>
                <span className='text-[#999] text-[12px]'>/</span>
               <Span>Contact Us</Span>
            </div>
        </div>
        <div className='flex gap-[30px]'>
        <ContactData/>
        <Contactproject/>
        </div>
        </Container>
        <Map/>
       <Footer/>
        
            
        
    </div>
  )
}

export default ContactUs