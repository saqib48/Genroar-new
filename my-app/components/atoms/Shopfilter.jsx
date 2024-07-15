import React from 'react'

function Shopfilter(shoptag, shopbutton) {
  return (
    <div className='shop flex w-[20%] justify-between items-center'>
        <div className="shop-text items-center">
            <a href="#">{shoptag}</a>
        </div>
        <div className="circle bg-[rgb(235,235,235)] w-[30px] flex justify-center items-center h-[30px] rounded-[100%] ">
            {shopbutton}
        </div>
    </div>
  )
}

export default Shopfilter