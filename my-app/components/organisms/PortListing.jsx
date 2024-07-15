import React, { useState } from "react";
import Shop3 from '../organisms/Shop3';
import Shop4 from '../organisms/Shop4';
import Portfoliobtns from "../molecules/Portfoliobtns";
import PortAll from "./PortAll";
import PortfolioCompany from "../molecules/PortfolioCompany";



const PortListing = () => {

  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
    <div className=" flex flex-col gap-[50px] ">
      <div className=" flex-col justify-center  ">
        <div className="xl:py-[50px] lg:py-[50px] md:py-[50px] pt-[50px] pb-[30px] w-full">
          {activeTab === "all" && <PortAll/> }
          <div>{activeTab === "compant" && <PortfolioCompany/>}</div>
          <div className="mt-[-5px]">{activeTab === "shop3" && <Shop3 />}</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "shop4" && <Shop4 /> }</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "shop4" && <Shop4 /> }</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "shop4" && <Shop4 /> }</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "shop4" && <Shop4 /> }</div>
        </div>
      </div>
      <div className="mt-[250px] mb-[5s0px]" >
      <Portfoliobtns
        shop1={() => handleTabChange("all")}
        shop2={() => handleTabChange("company")}
        shop3={() => handleTabChange("shop3")}
        shop4={() => handleTabChange("shop4")}
      />
      </div>
    </div>
    </div>
  )
}

export default PortListing