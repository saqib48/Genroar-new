import React from "react";
import "../../app/globals.css";
import Button from "../atoms/Button";
import { IoMdClose } from "react-icons/io";
import Heading from "../atoms/Heading";
import { LuShoppingCart } from "react-icons/lu";
import CartPage from "../../pages/CartPage";


function CartButton() {
  return (
    <div>
      <div class="cart-container flex items-center justify-center ml-[500px]">
        <button class="cart-button rounded-[50px] py-[20px] flex items-center gap-[10px]  hover:text-[#ff6a28] "><LuShoppingCart /> <p className="text-[12px] leading-[24px] font-[300] text-[#747474] hover:text-[#ff6a28]">2 Item(S)</p></button>
        <div class="cart-content ml-[-130px] bg-white z-[1000] px-[10px] py-[20px] ">
          <div className="p flex flex-col gap-[30px] items-center  justify-center ">
            <div className="flex items-center gap-[30px]">
              <img src="/assits/images/sidebar1.png" alt="" />
              <div className="flex flex-col gap-[10px]">
                <Heading level="6" children="Apple iPhone SE 16GB" />
                <Heading level="6" children="1x $60.00" />
              </div>
              <button
                className=" text-xl hover:-rotate-180 duration-[1s] cursor-pointer"
                style={{ transformOrigin: "center" }}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="flex items-center gap-[30px]">
              <img src="/assits/images/sidebar2.png" alt="" />
              <div className="flex flex-col gap-[10px]">
                <Heading level="6" children="Apple iPhone SE 16GB" />
                <Heading level="6" children="1x $60.00" />
              </div>
              <button
                className=" text-xl hover:-rotate-180 duration-[1s] cursor-pointer"
                style={{ transformOrigin: "center" }}
              >
                <IoMdClose />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start su ">
            <div className="text-[#333]  flex items-center mx-[10px]">
              <h2 className="text-[14px]">Sub-total :</h2>
              <h2 className=" pl-[100px] text-[14px] font-[600] ">$150.00</h2>
            </div>
            <div className="text-[#333] flex items-center mx-[10px]">
              <h2 className="text-[14px">Totale :</h2>
              <h2 className="text-[#FF6A28] text-[16px]  font-[600] pl-[112px]">
                $184.00
              </h2>
            </div>
          </div>

          <div className="btn my-[20px] flex flex-col gap-[20px]">
            <button className="w-full py-[10px] text-[13px] font-[400] bg-[#f1f1f1] border-[1px] border-[#747474] rounded-[7px] hover:text-white hover:bg-[#242424] transition-[0.5s]">
              View Cart
            </button>
            <button className="w-full py-[10px] text-[13px] font-[400] bg-[#f1f1f1] border-[1px] border-[#747474] rounded-[7px] hover:text-white hover:bg-[#242424] transition-[0.5s]">
              Checkout
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CartButton;
