import "./App.css";
import CartContainer from "./components/cartContainer";
import GridItem from "./components/gridItem";
import Heading from "./components/heading";
import OrderConfirmedPopup from "./components/orderConfirmedPopup";
import useData from "./hooks/useData";

function App() {
  const data = useData();

  return (
    <>
      <div className="grid gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <Heading />
          <div className="grid md:grid-cols-3 gap-6">
            {data?.map((item, index) => (
              <GridItem key={index} data={item} />
            ))}
          </div>
        </div>

        <CartContainer />
      </div>

      <OrderConfirmedPopup />
    </>
  );
}

export default App;
