import React from "react";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import Product1 from "../../assets/home/productSection/pro4.png";
import Product2 from "../../assets/home/productSection/pro6.png";

const Products = () => {
  return (
    <div className="bg-[#CAC7BF]">
      <div className="lg:container mx-auto pt-6 pb-6">
        <div className="grid grid-cols-12 lg:gap-22 gap-10">
          <div
            className="col-span-10 md:col-span-5 md:col-start-2 col-start-2 h-150 bg-cover bg-center font-extrabold text-2xl sm:text-4xl text-[#223531] rounded-2xl p-4 cursor-pointer transform transition hover:scale-101"
            style={{ backgroundImage: `url(${Product1})` }}
          >
            Women
          </div>
          <div
            className="col-span-10 md:col-span-5 md:col-start-7 col-start-2 h-150 bg-cover bg-center font-extrabold text-2xl sm:text-4xl text-[#223531] rounded-2xl p-4 cursor-pointer transform transition hover:scale-101"
            style={{ backgroundImage: `url(${Product2})` }}
          >
            Men
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
