import CoffeeCard from './CoffeeCard';

const CoffeeList = ({ coffees, onAddToFavorites, onVote }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {coffees.map(coffee => (
        <CoffeeCard
          key={coffee.id}
          coffee={coffee}
          onAddToFavorites={onAddToFavorites}
          onVote={onVote}
        />
      ))}
    </div>
  );
};

export default CoffeeList;