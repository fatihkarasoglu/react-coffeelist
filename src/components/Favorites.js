import CoffeeCard from './CoffeeCard';

const Favorites = ({ favorites }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {favorites.map(coffee => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default Favorites;