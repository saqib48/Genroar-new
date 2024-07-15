import Headermain from '@/components/organisms/Headermain'
import React from 'react';
import Footer from '@/components/organisms/Footer';
import WishlistData from '@/components/organisms/WishlistData';
import CartPage from "@/components/organisms/CartPage";
import WishlistShare from '@/components/organisms/Wishlistshare';


export default function login(){
  return (
    <div>
        <Headermain/>
        <WishlistData/>
        <CartPage/>
        <WishlistShare/>
        <Footer/>
    </div>
  )
}
