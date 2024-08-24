import CartList from "../cartList";
import CartTotal from "../cartTotal";
import ConfirmOrderBtn from "../confirmOrder";
import InfoCart from "../infoCart";

function CartContainer() {
  return (
    <div className="bg-rose-50 rounded-md p-5 text-left">
      <h2 className="mt-0 text-price font-extrabold">Your Cart (0)</h2>
      <p className="m-0 text-rose-500 text-sm font-semibold">
        Your added items will appear here
      </p>
      <CartList />
      <CartTotal />
      <InfoCart />
      <ConfirmOrderBtn />
    </div>
  );
}

export default CartContainer;
