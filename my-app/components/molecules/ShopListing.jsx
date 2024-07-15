import React, { useState } from "react";
import Shopbtns from '../organisms/Shopbtns';
import Shop1 from '../organisms/Shop1';
import Shop2 from '../organisms/Shop2';
import Shop3 from '../organisms/Shop3';
import Shop4 from '../organisms/Shop4';



const ShopListing = () => {

  const [activeTab, setActiveTab] = useState("shop1");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
    <div className=" flex flex-col gap-[50px] ">
      <div className=" flex-col justify-center  ">
        <div className="xl:py-[50px] lg:py-[50px] md:py-[50px] pt-[50px] pb-[30px] w-full">
          {activeTab === "shop1" && <Shop1 />}
          <div>{activeTab === "shop2" && <Shop2 />}</div>
          <div className="mt-[-5px]">{activeTab === "shop3" && <Shop3 />}</div>
          <div className="mt-[-50px] rounded-[50px]">{activeTab === "shop4" && <Shop4 /> }</div>
        </div>
      </div>
      <div className="mt-[250px] mb-[5s0px]" >
      <Shopbtns
        shop1={() => handleTabChange("shop1")}
        shop2={() => handleTabChange("shop2")}
        shop3={() => handleTabChange("shop3")}
        shop4={() => handleTabChange("shop4")}
      />
      </div>
    </div>
    </div>
  )
}

export default ShopListing