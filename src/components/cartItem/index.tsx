function removeItem() {
  console.log("item removed");
}

interface cartItemProps {
  img: boolean;
}

function CartItem({ img }: cartItemProps) {
  return (
    <div className="flex justify-between items-center pb-3 border-solid border-x-0 border-t-0 border-b border-rose-100">
      {img && <img src="" />}
      <div>
        <p className="m-0 text-sm mb-3 font-bold">Classic Tiramisu</p>
        <div className="flex gap-4">
          <span className="text-sm text-price font-bold">1x</span>
          <span className="text-sm">
            @$5.50 <span className="font-bold">$5.50</span>
          </span>
        </div>
      </div>
      <div>
        <button
          className="border-none p-0 bg-rose-50 cursor-pointer"
          onClick={() => removeItem()}
        >
          <img src="../../../public/assets/images/icon-remove-item.svg" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
