import CoffeeCards from "./components/CoffeeCards";

function App() {

  return (
    <div className="min-w-full min-h-screen bg-[url('./images/bg-cafe.jpg')] bg-no-repeat bg-contain bg-[#111315] flex justify-center items-center">
      <div className="flex justify-center items-center top-20">
        <CoffeeCards />
      </div>
    </div>
  );
}

export default App;