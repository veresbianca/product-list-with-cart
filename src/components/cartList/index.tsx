import CartItem from "../cartItem";

function CartList() {
  return (
    <div className="flex gap-3 flex-col">
      <CartItem img={false} />
      <CartItem img={false} />
      <CartItem img={false} />
    </div>
  );
}

export default CartList;
