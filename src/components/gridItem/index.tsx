import { formatCurrency } from "../../utility";
import AddToCartBtn from "../button";

interface dataProps {
  data: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
}

function GridItem({ data }: dataProps) {
  return (
    <div>
      <div>
        <img className="w-full rounded-md" src={data.image.mobile} />
        <AddToCartBtn />
      </div>
      <p className="text-rose-400 m-0 mb-2">{data.category}</p>
      <p className="font-semibold text-xl m-0 mb-2">{data.name}</p>
      <p className="text-price font-bold text-xl m-0">
        {formatCurrency(data.price)}
      </p>
    </div>
  );
}

export default GridItem;
