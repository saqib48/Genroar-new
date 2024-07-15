"use client";

import React from 'react'
import Logo from '../atoms/Logo'
import SearchHeader from '../molecules/SearchHeader'
import Headerlogin from '../molecules/Headerlogin'
import Item from '../molecules/Item'
import Headermid from '../molecules/Headermid'
import Container from '../atoms/Container'

function Headermain() {
  return (
    <div>
      <Container>
        <div className='flex justify-between pt-[3%] items-center'>
          <Logo href='' src='/assits/images/logo.webp' />
          <SearchHeader />
          <Headerlogin />
          <Item />
        </div>
        <Headermid />
      </Container>
      <hr />
    </div>
  )
}

export default Headermain;