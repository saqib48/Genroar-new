import React from 'react'
import AnchorTag from '../atoms/anchorTag'

function Headerlogin() {
  return (
    <div>
        <div className="flex items-center text-[12px] text-[#747474]  gap-[7px]">
            <AnchorTag variant="login " href='/login' >Login</AnchorTag>
            <span className='text-[12px] text-[#747474]'>/</span>
            <AnchorTag variant="login" href='/login'> Register</AnchorTag>
        </div>
    </div>
  )
}

export default Headerlogin