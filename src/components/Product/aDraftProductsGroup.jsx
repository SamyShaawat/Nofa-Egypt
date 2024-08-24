import { productsgroups } from "../../data/constants";

// import ProductCard from "./ProductCard";

const ProductsGroup = () => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1  duration-300 p-4 ">
        {productsgroups.map((product, index) => (
          <>
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1  duration-300 p-4 "
            >
              <img
                className="w-full h-64 object-cover rounded-2xl border border-primary  shadow-lg shadow-gray-400"
                src={product.image}
                alt={product.name}
              />

              <div className="px-6 py-4 flex flex-col flex-grow ">
                <div className="font-bold text-xl mb-2 text-center ">
                  {product.name}
                </div>
                <p className="text-gray-700 text-base mb-4 text-center">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto grid place-items-center">
                <button
                  className={`bg-primary text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto
          hover:bg-primary/80 duration-300 text-sm sm:text-base
           lg:text-lg whitespace-nowrap`}
                >
                  View Details
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
    // <>
    //   <div className="flex flex-wrap justify-center gap-4 my-6 ">
    //     {productsgroups.map((product, index) => (
    //       <ProductCard
    //         key={index}
    //         name={product.name}
    //         image={product.image}
    //         description={product.description}
    //         details={product.details}
    //         // aosDelay={product.aosDelay}
    //         handelDetailsProductGroup={() => handelDetailsProductGroup()}
    //       />
    //     ))}
    //   </div>
    // </>
  );
};
export default ProductsGroup;
