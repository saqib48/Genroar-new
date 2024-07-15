import React from 'react'
import ShopSibebar from '../organisms/ShopSibebar'
import ShopRightSec from '../organisms/ShopRightSec'
import Container from '../atoms/Container'

export const ShopTemp = () => {
  return (
    <Container >
    <div className='flex justify-between ' >
        <ShopSibebar />
        <ShopRightSec />
    </div>
    </Container>
  )
}
