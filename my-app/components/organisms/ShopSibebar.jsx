import React from 'react'
import AnchorTag from '../atoms/anchorTag'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import Catagories from '../molecules/Catagories'
import ShopTags from '../atoms/ShopTags'

const ShopSibebar = () => {
    return (
        <div className='w-[20%]' >
            {/* <div className="flex gap-[10px] items-center ">
                <AnchorTag variant='footertag' > Home </AnchorTag>
                <span> / </span>
                <span> Shop</span>
                </div>
            */}
            <Heading level='17' > Filter By Price </Heading>
            <div className="filter flex flex-col gap-[12px] mt-[30px] ">
                <input type="range" className='w-[100%]' />
                <div className="flex w-[100%] justify-between items-center  ">
                    <Button variant='filter' >FILTER</Button>
                    <div className="flex gap-[3px] ">
                        <span>$50</span>
                        <span>-</span>
                        <span>$500</span>
                    </div>
                </div>
            </div>
            <div className="p-cata w-[100%] mt-[43px] gap-[24px] flex flex-col ">
                <Heading level='17' > Product Catagories </Heading>
                <div className="flex flex-col gap-[5px] w-[100%] ">
                    <Catagories Catagories='Catagories1' text='7' />
                    <Catagories Catagories='Catagories1' text='7' />
                    <Catagories Catagories='Catagories1' text='7' />
                    <Catagories Catagories='Catagories1' text='7' />
                    <Catagories Catagories='Catagories1' text='7' />
                </div>
            </div>
            <div className="manufactures w-[100%] mt-[43px] gap-[24px] flex flex-col ">
                <Heading level='17' > Product Catagories </Heading>
                <div className="flex flex-col gap-[5px] w-[100%] ">
                    <Catagories Catagories='ali mehtab' text='7' />
                    <Catagories Catagories='ali mehtab' text='7' />
                    <Catagories Catagories='ali mehtab' text='7' />
                    <Catagories Catagories='ali mehtab' text='7' />
                    <Catagories Catagories='ali mehtab' text='7' />
                    <Catagories Catagories='ali mehtab' text='7' />
                    <Catagories Catagories='ali mehtab' text='7' />
                    <Catagories Catagories='ali mehtab' text='7' />
                </div>
            </div>
            <div className="select-color w-[100%] mt-[43px] gap-[24px] flex flex-col ">
                <Heading level='17' > Selcet By Color </Heading>
                <div className="flex flex-col gap-[5px] w-[100%] ">
                    <Catagories Catagories='black' text='17' />
                    <Catagories Catagories='blue' text='7' />
                    <Catagories Catagories='green' text='7' />
                    <Catagories Catagories='white' text='7' />
                    <Catagories Catagories='gray' text='7' />
                    <Catagories Catagories='orange' text='7' />
                    <Catagories Catagories='yellow' text='7' />
                </div>
            </div>
            <div className="shop-tags W-[100%] flex flex-col mt-[43px] gap-[24px] ">
                <Heading level='17' > Popular Tags </Heading>
                <div className="tags w-[100%] flex flex-wrap gap-[8px] ">
                    <ShopTags tags='Creams' />
                    <ShopTags tags='Eyebrow Pencil' />
                    <ShopTags tags='Eyeliner' />
                    <ShopTags tags='Eye Shadow' />
                    <ShopTags tags='Lotions' />
                    <ShopTags tags='Mascara' />
                    <ShopTags tags='Oil' />
                    <ShopTags tags='Powder' />
                    <ShopTags tags='Shampoo' />
                </div>
            </div>
        </div>
    )
}

export default ShopSibebar