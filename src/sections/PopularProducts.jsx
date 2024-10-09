import React from "react";
import PopularShoeCard from "../components/PopularShoeCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-0 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Experience top-notch quality and style with our sought-after selections. 
          Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <PopularShoeCard 
            key={product.name}
            imageSrc={product.imgURL} 
            name={product.name} 
            rating={product.rating} 
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;