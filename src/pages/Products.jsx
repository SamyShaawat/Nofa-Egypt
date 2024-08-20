import React from "react";
import { Helmet } from "react-helmet";
import ProductHero from "../components/Product/ProductHero";
import CardProduct from "../components/Product/CardProduct";
import Filter from "../components/Product/Filter";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Nofa Egypt | Products</title>
      </Helmet>
      {/* <div className="text-center text-3xl mt-64 font-semibold min-h-[105px]">
        Products Page
      </div> */}
      <ProductHero />
      {/* <CardProduct
        image="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/productGroups%2FSOLID%20(1).jpg?alt=media&token=8c5f3750-1076-4489-aabd-5a5510ac1af4"
        title="Solid "
        description="lorrem  kfnkdsks sldkf lwkef"
      /> */}
      <Filter />
    </>
  );
};

export default Products;
