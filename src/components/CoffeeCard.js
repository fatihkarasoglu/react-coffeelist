const CoffeeCard = ({ coffee, onAddToFavorites, onVote }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src={coffee.image} alt={coffee.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{coffee.name}</div>
          <p className="text-gray-700 text-base">{coffee.description}</p>
        </div>
        <div className="px-6 py-4">
          <button
            onClick={() => onAddToFavorites(coffee)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
          >
            Add to Favorites
          </button>
          <button
            onClick={() => onVote(coffee.id)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Vote
          </button>
        </div>
      </div>
    );
  };
  
  export default CoffeeCard;