import Footer from '@/components/organisms/Footer'
import Gallery from '@/components/organisms/Gallery'
import GalleryData from '@/components/organisms/GalleryData'
import Headermain from '@/components/organisms/Headermain'
import React from 'react'

function gallery() {
  return (
      <div>
          <Headermain />
          <GalleryData />
          <Gallery/>
          <Footer/>
    </div>
  )
}

export default gallery