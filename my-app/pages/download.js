import AccountData from "@/components/organisms/AccountData";
import DownloadPage from "@/components/organisms/Downloadpage";
import Footer from "@/components/organisms/Footer";
import Headermain from "@/components/organisms/Headermain";
import React from 'react'

function download() {
  return (
      <div>
               
          <Headermain />
      <AccountData />
      <DownloadPage/>
          <Footer/>

    </div>
  )
}

export default download