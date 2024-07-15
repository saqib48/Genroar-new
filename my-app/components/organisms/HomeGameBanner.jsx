import React from 'react'
import Heading from "@/components/atoms/Heading";
import AnchorTag from "@/components/atoms/anchorTag";

const HomeGameBanner = () => {
  return (
    <div className="relative px-[8%] mt-[5%]">
    <img className="w-[100%] h-[550px]" src="/assits/images/banner3.webp" alt="Banner 3" />
    <div className="absolute top-[25%] left-[15%]">
      <Heading level="1">Game Of Thrones Jaime</Heading>
      <Heading level="1">Lannister</Heading>
      <Heading level="1">Themed Sneakers</Heading>
      <div className="mt-[20%]">
      <AnchorTag href="#" variant="homeBanner" >Discover Now</AnchorTag>
      </div>
    </div>

  </div>
  )
}

export default HomeGameBanner
