import React from 'react'
import Headermain from "@/components/organisms/Headermain";
import BannerSlider from "@/components/organisms/BannerSlider";
import HomeWCollection from "@/components/organisms/HomeWCollection";
import HomeGameBanner from "@/components/organisms/HomeGameBanner";
import HomeMCollection from "@/components/organisms/HomeMCollection";
import { HomeLastestBlog } from '@/components/organisms/HomeLastestBlog';

const Home = () => {
  return (
    <div>
      <Headermain/>
      <BannerSlider/>
      <HomeWCollection />
      <HomeGameBanner />
      <HomeMCollection />
      <HomeLastestBlog />
    </div>
  )
}

export default Home
