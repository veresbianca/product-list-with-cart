function addToCart() {
  console.log("product added to cart");
}

function Button() {
  return (
    <button
      className="relative bottom-[27px] font-semibold w-1/3 p-3 bg-rose-50 rounded-3xl border border-rose-400 hover:bg-rose-400 hover:cursor-pointer"
      onClick={() => addToCart()}
    >
      Add to Cart
    </button>
  );
}

export default Button;
