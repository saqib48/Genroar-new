import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Button from '../atoms/Button'
import { FaAngleRight } from "react-icons/fa6";


function ServicesTheme() {
  return (
    <Container>
    <div className='flex gap-[55%] my-[50px]'>
       <div className="">
       <Heading level='3'>Advantages Of Mobile Ecommerce Theme</Heading>
       <Paragraph>Build a professional website system and great user experience</Paragraph>
       </div>
       <div>
       <Button variant='rectangle'>MORE INFO <FaAngleRight /> </Button>
         </div>
    </div>
    

    </Container>

  )
}

export default ServicesTheme