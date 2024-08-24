function InfoCart() {
  return (
    <div className="p-3 bg-rose-100 rounded-md flex">
      <img
        className="mr-1"
        src="../../../public/assets/images/icon-carbon-neutral.svg"
      />
      <span className="text-sm">
        This is a <span className="font-bold">carbon-neutral</span> delivery
      </span>
    </div>
  );
}

export default InfoCart;
