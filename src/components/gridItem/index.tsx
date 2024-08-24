import Button from "../button";

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
        <Button />
      </div>
      <p>{data.category}</p>
      <p>{data.name}</p>
      <p>{data.price}</p>
    </div>
  );
}

export default GridItem;
