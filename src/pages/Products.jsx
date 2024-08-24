import { Helmet } from "react-helmet";
import ProductHero from "../components/Product/ProductHero";
import Filter from "../components/Product/Filter";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Nofa Egypt | Products</title>
      </Helmet>

      <ProductHero />

      <Filter />
    </>
  );
};

export default Products;
