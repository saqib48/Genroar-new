import React from 'react'
import { CiSearch } from "react-icons/ci";

function SearchHeader() {
  return (
    <div className='flex items-center ml-[15%]  '>
        <select className='outline-none text-[#747474]  rounded-tl-[50px] border-t-[1px] text-[13px]  border-[#a9a9a9] border-l-[1px] border-b-[1px] rounded-bl-[50px] bg-[#EEEDEB] px-[7px] py-[14px] ' name="" id="">
            <option value="">All Catagories</option>
            <option value="">name</option>
            <option value="">name</option>
            <option value="">name</option>
            <option value="">name</option>
            <option value="">name</option>
        </select>
     <div className="inut relative w-[360px]">
     <div className="">
       <input className='w-full outline-none border-[1px] border-[#a9a9a9] px-[20px] py-[14px] rounded-tr-[50px] rounded-br-[50px] text-[13px]' type="text"  placeholder='Search entire store here....'/>
       </div>
        <div className="absolute top-[35%] right-[5%] ">
        <CiSearch />
        </div>
     </div>
    </div>
  )
}

export default SearchHeader