import React, { useState } from "react";

function Portfoliobtns({ all , company , computer ,genrel, hipster ,food }) {
  const [activeButton, setActiveButton] = useState('all');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="w flex rou items-center gap-[15px]  bg-gray-100 justify-center w-[100%] py-[30px]  ">
        <button
          onClick={() => {
            handleButtonClick("all");
            all();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "all" ? "bg-orange-500 text-red-500 " : ""
          }`}
        >
          all
        </button>
        <button
          onClick={() => {
            handleButtonClick("company");
            company();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "company" ? "bg-[#FF6A28] text-white " : ""
          }`}
        >
          company
        </button>
        <button
          onClick={() => {
            handleButtonClick("computer");
            computer();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "computer" ? "bg-[#FF6A28] text-white " : ""
          }`}
        >
          Computer
        </button>
        <button
          onClick={() => {
            handleButtonClick("genrel");
            genrel();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "genrel" ? "bg-[#FF6A28] text-white " : ""
          }`}
        >
          genrel
        </button>
        <button
          onClick={() => {
            handleButtonClick("hipster");
            hipster();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "hipster" ? "bg-[#FF6A28] text-white " : ""
          }`}
        >
          Hipster
        </button>
        <button
          onClick={() => {
            handleButtonClick("food");
            food();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "food" ? "bg-[#FF6A28] text-white " : ""
          }`}
        >
          Just Food
        </button>
      </div>
    </div>
  );
}

export default Portfoliobtns;