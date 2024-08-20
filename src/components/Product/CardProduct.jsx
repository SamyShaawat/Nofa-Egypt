const CardProduct = ({ image, title, description }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          {/* <span className="text-sm text-gray-400">{duration}</span> */}
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        {/* <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-purple-400 text-sm font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default CardProduct;
