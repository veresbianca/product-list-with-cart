import "./App.css";
import GridItem from "./components/gridItem";
import Heading from "./components/heading";
import useData from "./hooks/useData";

function App() {
  const data = useData();

  return (
    <>
      <Heading />
      <div className="grid md:grid-cols-3 gap-3">
        {data?.map((item, index) => (
          <GridItem key={index} data={item} />
        ))}
      </div>
    </>
  );
}

export default App;
