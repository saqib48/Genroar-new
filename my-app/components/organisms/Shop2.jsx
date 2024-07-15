import React from 'react'
import ShopProduct from '../molecules/ShopProduct'

const Shop2 = () => {
    return (
        <div>
            <div className="products grid grid-cols-3 gap-[3%] ">
                <ShopProduct src="/assits/images/shoe.webp" src2="/assits/images/shoe-nike.webp" />
                <ShopProduct src="/assits/images/coat2.webp" src2="/assits/images/coat3.webp" />
                <ShopProduct src="/assits/images/shoe-nike.webp" src2="/assits/images/shoe.webp" />
                <ShopProduct src="/assits/images/brown-shirt.webp" src2="/assits/images/1sthov.webp" />
                <ShopProduct src="/assits/images/coat-blue.webp" src2="/assits/images/coat2.webp" />
                <ShopProduct src="/assits/images/green-swet.webp" src2="/assits/images/coat-blue.webp" />
                <ShopProduct src="/assits/images/product1.webp" src2="/assits/images/product2.webp" />
                <ShopProduct src="/assits/images/shoe.webp" src2="/assits/images/shoe-nike.webp" />
                <ShopProduct src="/assits/images/brown-shirt.webp" src2="/assits/images/1sthov.webp" />
                <ShopProduct src="/assits/images/1st.webp" src2="/assits/images/1sthov.webp" />
                <ShopProduct src="/assits/images/coat3.webp" src2="/assits/images/caot-blue.webp" />
                <ShopProduct src="/assits/images/shoe-nike.webp" src2="/assits/images/1sthov.webp" />
                <ShopProduct src="/assits/images/shoe.webp" src2="/assits/images/coat-blue.webp" />
                <ShopProduct src="/assits/images/brown-shirt.webp" src2="/assits/images/1sthov.webp" />
                <ShopProduct src="/assits/images/1st.webp" src2="/assits/images/1sthov.webp" />
            </div>
        </div>
    )
}

export default Shop2