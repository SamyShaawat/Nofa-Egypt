import { finishes } from "../../data/constants";
import ProductCard from "./aDraftProductCard";
const Finishes = () => {
  return (
    <>
      {/* <p className="text-center text-3xl font-bold my-6">Finishers</p> */}
      <div className="flex flex-wrap justify-center gap-4 my-6 ">
        {finishes.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}

            // aosDelay={product.aosDelay}
          />
        ))}
      </div>
    </>
  );
};
export default Finishes;
