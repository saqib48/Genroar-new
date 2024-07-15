import React from 'react'
import Container from '../atoms/Container'
import AnchorTag from '../atoms/anchorTag'
import Span from '../atoms/Span'
import Register from "@/components/molecules/Register"

function Logindata() {
  return (
    <div>
        <Container>
      <div className='pt-[4%]'>
            <div className='flex gap-[5px]'>
                <AnchorTag variant="success">Home</AnchorTag>
                <span className='text-[#999] text-[12px]'>/</span>
               <Span>Login</Span>
            </div>
        </div>
        </Container>
        <div className='flex'>
        
        <Register/>
        
        </div>

    </div>
  )
}

export default Logindata