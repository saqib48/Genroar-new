import Headermain from '@/components/organisms/Headermain'
import React from 'react';
import Footer from '@/components/organisms/Footer';
import WishlistData from '@/components/organisms/WishlistData';
import CartPage from "@/components/organisms/CartPage";


export default function login(){
  return (
    <div>
        <Headermain/>
        <WishlistData/>
        <CartPage/>
        <Footer/>
    </div>
  )
}
