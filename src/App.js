import { useState } from "react";

import CoffeeCards from "./components/CoffeeCards";

// import CoffeeList from "./components/CoffeeList";
// import Favorites from "./components/Favorites";

function App() {

  const [coffees, setCoffees] = useState([
    { id: 1, name: 'Espresso', description: 'Strong and short coffee', image: 'espresso.jpg' },
    // Add more coffee items
  ]);
  const [favorites, setFavorites] = useState([]);

  // const addCoffeeToFavorites = coffee => {
  //   setFavorites([...favorites, coffee]);
  // };

  // const voteForCoffee = coffeeId => {
  //   // Implement voting logic
  // };

  return (
    <div className="min-w-full min-h-screen bg-[url('./images/bg-cafe.jpg')] bg-no-repeat bg-contain bg-[#111315] flex justify-center items-center">
      <div className="flex justify-center items-center top-20">
        <CoffeeCards />
        {/* <h1 className="text-4xl font-bold text-center my-8">Coffee Explorer</h1>
        <CoffeeList
          coffees={coffees}
          onAddToFavorites={addCoffeeToFavorites}
          onVote={voteForCoffee}
        />
        <h2 className="text-2xl font-bold text-center my-8">Favorites</h2>
        <Favorites favorites={favorites} /> */}
      </div>
    </div>
  );
}

export default App;