import React from 'react'
import Paragraph from '../atoms/Paragraph'
import AnchorTag from '../atoms/anchorTag'
import { IoIosArrowDown } from "react-icons/io";

function Headermid() {
  return (

    <div className='flex justify-between pt-[10px] items-center '>
      <div className='flex  list-none items-center gap-[60px]  '>
        <li><AnchorTag variant='Header' href='/'>Home</AnchorTag></li>
        <li><AnchorTag variant='Header' href='/shop'>Shop<IoIosArrowDown /></AnchorTag>
          <div className="dropdown2 left-[105px] absolute bg-white opacity-5 z-[9999] invisible p-[30px] w-[85%] bg-[#fff] ">
            <div className="flex mb-[20px]   ">
              <div className="">
                <ul className="pr-[120px] border-r grid gap-[8px] s  ">
                  <li className=" text-[15px]  "><AnchorTag href="/" ><b>Shops Layout</b></AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Full Width</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Full Width List</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Right Sidebar</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Right Sidebar List</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >List View</AnchorTag></li>
                </ul>
              </div>
              <div className="">
                <ul className="pr-[120px] border-r grid gap-[8px] ml-[40px]  ">
                  <li className=" text-[15px]  "><AnchorTag href="/" ><b>Other Pages</b></AnchorTag></li>
                  <li><AnchorTag href="/portfoliomain" variant="success" >Portfolio</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Portfolio Details</AnchorTag></li>
                  <li><AnchorTag href="/cart" variant="success" >Cart</AnchorTag></li>
                  <li><AnchorTag href="/check" variant="success" >CheckOut</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >My Account</AnchorTag></li>
                </ul>
              </div>
              <div className="">
                <ul className="pr-[120px] border-r grid gap-[8px] ml-[40px]  ">
                  <li className=" text-[15px] "><AnchorTag href="/" ><b>Product Types</b></AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Product Details</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Product Sidebar</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Product Gellery</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Product Grouped</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Product Variable</AnchorTag></li>

                </ul>
              </div>
              <div className="">
                <ul className="pr-[120px] grid gap-[8px] ml-[40px]  ">
                  <li className=" text-[15px]  "><AnchorTag href="/" ><b>Collection</b></AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Handbag</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Accessories</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Clothing</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Shoes</AnchorTag></li>
                  <li><AnchorTag href="/" variant="success" >Check Trousers</AnchorTag></li>
                </ul>
              </div>
            </div>
            <div className="">
              <img src="/assits/images/hoverbanner.webp" alt="" />
            </div>
          </div>
        </li>
        <li><AnchorTag variant='Header' href='/'>Pages<IoIosArrowDown /></AnchorTag>
          <ul className='dropdown  absolute bg-white opacity-5 z-[9999] invisible py-[10px] pr-[80px] pl-[30px]'>
            <li><AnchorTag variant='Headerh' href='/about'> About Us</AnchorTag></li>
            <li><AnchorTag variant='Headerh' href='/serivces'>Services</AnchorTag></li>
            <li><AnchorTag variant='Headerh' href='/login'>Login</AnchorTag></li>
            <li><AnchorTag variant='Headerh' href='/wishlist'>Wishlist</AnchorTag></li>
            <li><AnchorTag variant='Headerh' href='/myaccount'>My Account</AnchorTag></li>
            <li><AnchorTag variant='Headerh' href='/error'>Error 404</AnchorTag></li>
            <li><AnchorTag variant='Headerh' href='/'>Compare</AnchorTag></li>
            <li><AnchorTag variant='Headerh' href='/privacy'>Privacy Policy</AnchorTag></li>
            <li><AnchorTag variant='Headerh' href='/'>Coming Soon</AnchorTag></li>
          </ul>
        </li>
        <li><AnchorTag variant='Header' href='/about'>About US</AnchorTag></li>
        <li><AnchorTag variant='Header' href='/contact'>Contact Us</AnchorTag></li>
      </div>
      <div className=''>
        <Paragraph>Call Free Support: <AnchorTag variant='success'>01234567890</AnchorTag></Paragraph>

      </div>
    </div>

  )
}

export default Headermid