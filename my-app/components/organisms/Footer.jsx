import React from 'react'
import AnchorTag from '../atoms/anchorTag'
import Heading from '../atoms/Heading'
import Container from '../atoms/Container'
import Paragraph from '../atoms/Paragraph'
import { PAGES_DIR_ALIAS } from 'next/dist/lib/constants'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

function Footer() {
  return (
    <Container>

      <div className='mt-[50px]'>
        <hr />
        <div className='flex justify-between gap-[10%] pt-[5%]'>

          <div>
            <Heading level="3">Information</Heading>
            <div className='grid gap-[10px] mt-[20px] '>
              <AnchorTag variant="footertag" href='/about'>About Us</AnchorTag>
              <AnchorTag variant='footertag'>Delivery Information</AnchorTag>
              <AnchorTag variant='footertag'>Privacy Policy</AnchorTag>
              <AnchorTag variant='footertag'>  Terms & Conditionss</AnchorTag>
              <AnchorTag variant='footertag'>Contact Uss</AnchorTag>
              <AnchorTag variant='footertag'>Returns</AnchorTag>
            </div>
          </div>

          <div>
            <Heading level="3">Extras</Heading>
            <div className='grid gap-[10px] mt-[20px]'>
              <AnchorTag variant='footertag'>Brands</AnchorTag>
              <AnchorTag variant='footertag'>Gift Certificates</AnchorTag>
              <AnchorTag variant='footertag'>Affiliate</AnchorTag>
              <AnchorTag variant='footertag'>Specials</AnchorTag>
              <AnchorTag variant='footertag'>Site Map</AnchorTag>
              <AnchorTag variant='footertag'>My Account</AnchorTag>
            </div>
          </div>

          <div>
            <Heading level="3">Contact Us</Heading>
            <div className='grid  mt-[20px]'>
              <Paragraph>Address:Your address goes here.</Paragraph>
              <Paragraph>Phone: <AnchorTag> 01234567890</AnchorTag></Paragraph>
              <Paragraph>Email: demo@example.com</Paragraph>
              <AnchorTag variant='footertag'>Specials</AnchorTag>
              <AnchorTag variant='footertag'>Site Map</AnchorTag>
              <AnchorTag variant='footertag'>My Account</AnchorTag>
            </div>
          </div>


          <div>
            <Heading level="3">Join Our Newsletter Now</Heading>
            <div className='grid gap-[10px] mt-[20px]'>
              <Paragraph>Exceptional quality. Ethical factories. Sign up to enjoy free <br /> U.S. shipping and returns on your first order.</Paragraph>
              <Input variant='five2' type='text' placeholder='Enter you email address here.....' />
              <Button variant="footer-button">Submit</Button>

            </div>
          </div>


        </div>
        <div className='mt-[50px]'>
          <hr />
          <div className='flex justify-between my-[30px]'>
            <Paragraph>© 2022 <b>GENROAR</b>    </Paragraph>
            <div className='flex gap-[30px] items-center ' >
              <AnchorTag variant='footertag'>Order History</AnchorTag>
              <AnchorTag variant='footertag'>Order History</AnchorTag>
              <AnchorTag variant='footertag'>Order History</AnchorTag>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer