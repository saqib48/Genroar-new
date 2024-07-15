import Headermain from '@/components/organisms/Headermain'
import ServicesData from '@/components/organisms/ServicesData'
import ServiceDeal from '@/components/organisms/ServiceDeal'
import React from 'react'
import Container from '@/components/atoms/Container'
import ServiceStandard from '@/components/organisms/ServiceStandard'
import ServicesTheme from '@/components/organisms/ServicesTheme'
import Footer from '@/components/organisms/Footer'


function Services() {
  return (
    <div>
        <Headermain/>
        <ServicesData/>
       <Container>
         <ServiceDeal/>
       </Container>
       <ServiceStandard/>
       <ServicesTheme/>
       <Footer/>



        
    </div>
  )
}

export default Services