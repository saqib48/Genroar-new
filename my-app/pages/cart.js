import CartData from "@/components/organisms/CartData";
import Footer from "@/components/organisms/Footer";
import Headermain from "@/components/organisms/Headermain";
import CartPage from "@/components/organisms/CartPage";

function Cart() {
  return (
    <div className='' >
      
      
          <Headermain />
          <CartData />
            <CartPage/>
         
         <Footer/>
    </div>
  )
}

export default Cart;