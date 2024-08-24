function addToCart() {
  console.log("product added to cart");
}

function AddToCartBtn() {
  return (
    <button
      className="flex gap-1 m-auto items-center relative bottom-[27px] font-semibold py-3 px-6 bg-rose-50 rounded-3xl border border-rose-400 hover:text-price hover:cursor-pointer"
      onClick={() => addToCart()}
    >
      <img src="../../../public/assets/images/icon-add-to-cart.svg" />
      <span>Add to Cart</span>
    </button>
  );
}

export default AddToCartBtn;
