import { productsgroups } from "../../data/constants";
import ProductCard from "./ProductCard";

const ProductsGroup = () => {
  return (
    <>
      <p className="text-center text-3xl font-bold my-6 ">Products Group</p>
      <div className="flex flex-wrap justify-center gap-4 ">
        {productsgroups.map((product, index) => (
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
export default ProductsGroup;
