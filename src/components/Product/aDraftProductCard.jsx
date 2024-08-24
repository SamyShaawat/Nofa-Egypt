// import DetailsProductGroup from "./ViewDetails";
// import { productsgroups } from "../../data/constants";
// const ProductCard = () => {
  return (    <div className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1  duration-300 p-4 ">       {productsgroups.map((product, index) => (
        <div className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1  duration-300 p-4 ">
          <img
            className="w-full h-64 object-cover rounded-2xl border border-primary  shadow-lg shadow-gray-400"
            src={product.image}
            alt={product.name}
          
          <div className="px-6 py-4 flex flex-col flex-grow ">
            <div className="font-bold text-xl mb-2 text-center ">
              {product.name}
            </div>
            <p className="text-gray-700 text-base mb-4 text-center">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// export default ProductCard;
