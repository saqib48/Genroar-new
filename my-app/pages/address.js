import AccountData from "@/components/organisms/AccountData";
import AddressPage from "@/components/organisms/Addresspage";
import Footer from "@/components/organisms/Footer";
import Headermain from "@/components/organisms/Headermain";
import React from 'react'

function address() {
  return (
      <div>
               
          <Headermain />
          <AccountData />
          <AddressPage/>
          <Footer/>

    </div>
  )
}

export default address