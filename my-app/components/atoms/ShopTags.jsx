import React from 'react'

function ShopTags({tags}) {
  return (
    <div >
        <a  className=' border-box border-[1px] hover:bg-[rgb(255,106,40)] hover:text-white transition-[0.9s] border-gray-200 px-[15px] rounded-[50px] h-[32px] flex items-center justify-center ' href="#">{tags}</a>
    </div> 
  )
}

export default ShopTags