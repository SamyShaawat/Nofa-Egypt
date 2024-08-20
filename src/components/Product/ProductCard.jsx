const ProductCard = ({ image, name, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between transition ease-in-out delay-150 hover:-translate-y-1  duration-300">
      <img className="w-full h-64 object-cover" src={image} alt={name} />
      <div className="px-6 py-4 flex flex-col flex-grow">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="mt-auto">
          <button className="bg-primary text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto hover:bg-primary/80 duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
