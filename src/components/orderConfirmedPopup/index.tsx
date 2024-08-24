import { useState } from "react";
import CartItem from "../cartItem";
import CartTotal from "../cartTotal";
import StartNewOrderBtn from "../startNewOrderBtn";

function OrderConfirmedPopup() {
  const [visibility, setVisibility] = useState(false);

  const visibilityClass = visibility ? "block" : "hidden";

  return (
    <div
      className={`absolute ${visibilityClass} bg-rose-50 p-5 rounded-md text-left w-1/3`}
    >
      <img
        alt="order confirmed icon"
        src="../../../public/assets/images/icon-order-confirmed.svg"
      />
      <h2>Order Confirmed</h2>
      <p className="text-sm">We hope you enjoy your food!</p>

      <div className="bg-rose-100 p-5 rounded-md">
        <CartItem img={true} />
        <CartTotal />
      </div>

      <StartNewOrderBtn />
    </div>
  );
}

export default OrderConfirmedPopup;
