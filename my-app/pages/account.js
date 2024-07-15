import AccountData from "@/components/organisms/AccountData";
import AccountPage from "@/components/organisms/AccountPage";
import Footer from "@/components/organisms/Footer";
import Headermain from "@/components/organisms/Headermain";
import React from 'react'

function account() {
  return (
      <div>
               
          <Headermain />
          <AccountData />
          <AccountPage/>
          <Footer/>

    </div>
  )
}

export default account