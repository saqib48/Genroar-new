import React from 'react'
import "../../app/globals.css"
import Heading from '../atoms/Heading'
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaBars } from "react-icons/fa6";
import ShopListing from '../molecules/ShopListing';
import Shop1 from './Shop1';

const ShopRightSec = () => {
  return (
    <div className='w-[76%]' >
      <Heading level='2' >Shop</Heading>

      <div className="">
        {/* <ShopListing /> */}
        <Shop1 />
      </div>
    </div>
  )
}

export default ShopRightSec