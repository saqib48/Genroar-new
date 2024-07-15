import React, { useState } from "react";

function Shopbtns({ shop1 , shop2 , shop3 ,shop4 }) {
  const [activeButton, setActiveButton] = useState('shop1');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="w flex items-center gap-[15px] py-[8px] justify-center w-[100%] border  ">
        <button
          onClick={() => {
            handleButtonClick("shop1");
            shop1();
          }}
          className={`w-[30px] h-[30px] font-regular bg-gray-100 text-[#242424]  flex items-center justify-center  rounded-[4px] ${
            activeButton === "shop1" ? "bg-[#FF6A28] text-white " : ""
          }`}
        >
          1
        </button>
        <button
          onClick={() => {
            handleButtonClick("shop2");
            shop2();
          }}
          className={`w-[30px] h-[30px] font-regular bg-gray-100 text-[#242424]  flex items-center justify-center  rounded-[4px] ${
            activeButton === "shop2" ? "bg-[#FF6A28] text-white " : ""
          }`}
        >
          2
        </button>
        <button
          onClick={() => {
            handleButtonClick("shop3");
            shop3();
          }}
          className={`w-[30px] h-[30px] font-regular bg-gray-100 text-[#242424]  flex items-center justify-center  rounded-[4px] ${
            activeButton === "shop3" ? "bg-[black] text-white " : ""
          }`}
        >
          3
        </button>
        <button
          onClick={() => {
            handleButtonClick("shop4");
            shop4();
          }}
          className={`w-[30px] h-[30px] font-regular bg-gray-100 text-[#242424]  flex items-center justify-center  rounded-[4px] ${
            activeButton === "shop4" ? "bg-[#FF6A28] text-white " : ""
          }`}
        >
          4
        </button>
      </div>
    </div>
  );
}

export default Shopbtns;