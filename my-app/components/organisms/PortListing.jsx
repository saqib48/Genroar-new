import React, { useState } from "react";
import Shop3 from '../organisms/Shop3';
import Shop4 from '../organisms/Shop4';
import Portfoliobtns from "../molecules/Portfoliobtns";
import PortAll from "./PortAll";
import PortfolioCompany from "../molecules/PortfolioCompany";
import PortfolioComputer from "../molecules/portfolioComputer";
import PortfolioGeneral from "../molecules/portfolioGeneral";
import PortfolioHipster from "../molecules/portfolioHipster";
import PortfolioJustfood from "../molecules/portfolioJustfood";



const PortListing = () => {

  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
    <div className=" flex flex-col ">
    <div className=" mb-[5s0px]" >
      <Portfoliobtns
        all={() => handleTabChange("all")}
        company={() => handleTabChange("company")}
        computer={() => handleTabChange("computer")}
        genrel={() => handleTabChange("genrel")}
        hipster={() => handleTabChange("hipster")}
        food={() => handleTabChange("food")}
      />
      </div>
      <div className=" flex-col justify-center  ">
        <div className="xl:py-[50px] lg:py-[50px] md:py-[50px] pt-[50px] pb-[30px] w-full">
          {activeTab === "all" && <PortAll/> }
          <div>{activeTab === "company" && <PortfolioCompany/>}</div>
          <div className="mt-[-5px]">{activeTab === "computer" && <PortfolioComputer/>}</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "genrel" && <PortfolioGeneral/> }</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "hipster" && <PortfolioHipster/>}</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "food" && <PortfolioJustfood /> }</div>
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default PortListing