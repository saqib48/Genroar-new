import PropTypes from "prop-types";
import "../../app/globals.css";
import React from "react";

function Input({ variant, value , onChange ,type,id, name ,placeholder }) {
  let inputStyle = "";
  switch (variant) {
    case "fotrinput"://this style can use in search,usename,password,:)
      inputStyle =
        "w-full p-[10px] text-[#747474] text-sm border-[1px] border-[#747474]  ";
      break;
    case "search"://404 search page k leay
      inputStyle =
        "w-[450px] p-[10px] text-[#747474] text-sm border-[1px] border-[#747474] ";
      break;
    case "":
      inputStyle =
        "w-[780px] h-[41px] rounded-[40px] outline-none p-[10px]  border-2 border-opacity-10 border-gray-500  ";
      break;
    case "buy":
      inputStyle =
        "w-full h-[41px] rounded-[40px] outline-none p-[10px]  border-2 border-opacity-10 border-gray-500  ";
      break;
    case "four":
      inputStyle =
        "w-[630px] h-[41px] rounded-[40px] outline-none border-2 p-[10px]  border-opacity-10 border-gray-500  ";
      break;
    case "five":
      inputStyle =
        "w-[100%] h-[42px] outline-none border-[1px] text-[15px] text-[#302e2e]  border-[#cacaca] p-[15px]  ";
      break;
    case "five2":
      inputStyle =
        "w-[365px] h-[45px] outline-none border-[1px] text-[14px] px-[20px] border-[#cacaca] py-[5px]  text-[#cacaca]  pb-[10px]  ";
      break;
    case "six":
      inputStyle =
        "w-[455px] h-[41px] rounded-[40px] outline-none border-2 border-opacity-10 p-[10px]  border-gray-500  ";
      break;
    case "seven":
      inputStyle =
        "w-[483px] h-[40px] rounded-[20px] outline-none border-2 border-opacity-10 border-gray-500 p-[10px]   ";
      break;
    case "eight":
      inputStyle =
        "w-[360px] h-[40px] rounded-[20px] p-[10px] outline-none border-2 border-opacity-10 border-gray-500  ";
      break;
    case "ten":
      inputStyle =
        "w-[265px] h-[40px] outline-none border-[1px] text-[14px] px-[20px] border-[lightgray] py-[5px]  text-[#747474]  pb-[10px]  ";
      break;
    case "eleven":
      inputStyle =
        "w-[100%] h-[40px] outline-none border-[1px] text-[14px] px-[20px] border-[#ddd] py-[5px]  text-#747474  pb-[10px]  ";
      break;
    case "check":
      inputStyle =
        "w-[15px] h-[15px] p-[20px] outline-none border-[1px] border-#ddd  ";
    case "nine":
      inputStyle =
        "w-[442px] h-[40px] outline-none border-[1px] text-[14px] px-[20px] border-[#cacaca] py-[5px]  text-[#cacaca]  pb-[10px]  ";
      break;
  }

  return <input  value={value} onChange={onChange} type={type} placeholder={placeholder} className={inputStyle} />;
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Input;