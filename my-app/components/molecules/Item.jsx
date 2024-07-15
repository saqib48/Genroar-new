import { IoMdClose } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import "../../app/globals.css";
import Heading from "../atoms/Heading";
import AnchorTag from "../atoms/anchorTag";

function Item() {
  return (
    <div className="relative z-[999]">
      <div class="cart-container w-[120px] peer">
        <button class="cart-button  rounded-[50px] py-[8px] px-[10px] border-[1px]  flex items-center gap-[10px] border-[#dbdbdb]  hover:text-[#ff6a28] hover:cursor-pointer	 ">
          <LuShoppingCart />{" "}
          <p className="text-[12px] leading-[24px] font-[300] text-[#747474] hover:text-[#ff6a28]">
            2 Item(S)
          </p>
        </button>
      </div>
      <div class="cart-content absolute right-[20px] top-[43px] shadow-2xl rounded-[10px] w-[350px] bg-white hidden px-[10px] py-[20px] peer-hover:block cursor-pointer hover:block ">
        <div className="p flex flex-col gap-[30px] items-center  justify-center ">
          <div className="flex items-center gap-[30px]">
            <img src="/assits/images/pro3.jpg" alt="" />
            <div className="flex flex-col gap-[10px]">
              <Heading level="18" children="Apple iPhone SE 16GB" />
              <Heading level="18" children="1x $60.00" />
            </div>
            <button
              className=" text-xl hover:-rotate-180 duration-[1s] cursor-pointer"
              style={{ transformOrigin: "center" }}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex items-center gap-[30px]">
            <img src="/assits/images/pro1.jpg" alt="" />
            <div className="flex flex-col gap-[10px]">
              <Heading level="18" children="Apple iPhone SE 16GB" />
              <Heading level="18" children="1x $60.00" />
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
          <AnchorTag variant="CheckCart" href="cart">
            View Cart
          </AnchorTag>
          <AnchorTag variant="CheckCart" href="/check">
            Checkout
          </AnchorTag>

        </div>
        </div>
      </div>
  );
}

export default Item;
