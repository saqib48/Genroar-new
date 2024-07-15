"use client"

// import ShopSibebar from "@/components/organisms/ShopSibebar"
import Shop from "./shop"
import Headermain from "@/components/organisms/Headermain";
import BannerSlider from "@/components/organisms/BannerSlider";
import HomeWCollection from "@/components/organisms/HomeWCollection";
import HomeGameBanner from "@/components/organisms/HomeGameBanner";
import HomeMCollection from "@/components/organisms/HomeMCollection";

function Index() {
  return (
    <div className='' >
        {/* <Shop /> */}
      
      
      <Headermain/>
      <BannerSlider/>
      <HomeWCollection />
      <HomeGameBanner />
      <HomeMCollection />
        
    </div>
  )
}

export default Index;
