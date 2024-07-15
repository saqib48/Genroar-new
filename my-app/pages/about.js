"use client"


import AboutData from "@/components/organisms/AboutData";
import Counter from "@/components/organisms/Counter";
import Progress from "@/components/organisms/Progress"
import Headermain from "@/components/organisms/Headermain";
import Ried from "@/components/molecules/Ried";

import Footer from "@/components/organisms/Footer";

function About() {
  return (
    <div className='' >
      
      
      <Headermain/>
      <AboutData/>
      <Ried/>
      <Counter/>
      <Progress/>
      <Footer/>
    
    </div>
  )
}

export default About;