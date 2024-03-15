import Watch from "../components/Watch/Watch";
import "./App.css";

function App() {
  // const watches = [
  //   { id: 1, name: "apple Watch", price: 299 },
  //   { id: 2, name: "mi Watch", price: 399 },
  //   { id: 3, name: "es Watch", price: 599 },
  // ];
  const watches = [
    { id: 1, name: "Apple Watch Series 6", price: 399 },
    { id: 2, name: "Samsung Galaxy Watch 3", price: 349 },
    { id: 3, name: "Fitbit Versa 3", price: 229 },
    { id: 4, name: "Garmin Forerunner 945", price: 599 },
    { id: 5, name: "Huawei Watch GT 2 Pro", price: 299 },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => {
        return <Watch key={watch.id} watch={watch}></Watch>;
      })}
    </>
  );
}

export default App;
