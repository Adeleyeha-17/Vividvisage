import ButtonLink from "../ButtonLink";
import Sectiontitle from "../SectionTitle";
import { useEffect } from "react";
import { UseGetProducts } from "../../hooks/UseGetProducts";
import Product from "../Product";

export const TopProduct = () => {
  const { products, getData } = UseGetProducts()

  useEffect(() => {
    getData()
    console.log(products)
  }, []);

  return (
    <div className="container mx-auto mt-10 md:mt-10">
      <div className="flex items-center justify-between">
        <Sectiontitle text="Top Products" />
        <ButtonLink path="/about" text="See More" isMain />
      </div>
      <div className="mt-10 flex flex-wrap justify-center items-center space-x-20">
        {products.map((data, index) => (

          <Product 
          key={index}
          id={data.id}
          name={data.name}
          brand={data.brand}
          imgUrl= {data.api_featured_image}
          price={data.price}
          currency={data.price_sign}
          />
        ))}
      </div>
    </div>
  );
};
