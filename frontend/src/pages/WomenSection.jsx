import React from "react";
import HeroImg from "../assets/menSection/hero13.png";
import Product1 from "../assets/womenSection/w1.png";
import Product2 from "../assets/womenSection/w2.png";
import Footer from "../components/Footer";

function WomenSection() {
  return (
    <div>
      <div
        className="h-[500px] bg-cover bg-center flex flex-col justify-center items-center p-3 "
        style={{ backgroundImage: `url(${HeroImg}) ` }}
      >
        <div className=" text-[20px] sm:text-[30px] md:text-[50px]  text-[#223531] font-extrabold ">
          Welcome to Women's Collection
        </div>
        <div className="text-[10px] sm:text-[15px] md:text-[20px] text-center text-[#223531] font-extrabold ">
          Explore Products
        </div>
      </div>
      <div className="bg-[#CAC7BF]">
        <div className="lg:container mx-auto pt-10 pb-11">
          <div className="grid md:grid-cols-12 grid-cols-8 lg:gap-22 gap-10 md:p-0 p-3">
            <div className="col-span-8 md:col-span-5 md:col-start-2 col-start-1  bg-cover bg-center font-extrabold text-xl sm:text-3xl text-[#223531] rounded-2xl md:p-4 p-2 cursor-pointer transform transition hover:scale-101">
              <div className="">
                <img
                  src={Product1}
                  className="h-130 w-[100%] rounded-t-2xl"
                  alt=""
                />
              </div>
              <div className="h-20  flex justify-center items-center bg-[#bbb8b0] rounded-b-2xl">
                
                Pants
              </div>
            </div>
            <div className="col-span-8 md:col-span-5 md:col-start-7 col-start-1 h-150 bg-cover bg-center font-extrabold text-xl sm:text-3xl text-[#223531] rounded-2xl md:p-4 p-2 cursor-pointer transform transition hover:scale-101">
              <div>
                <img
                  src={Product2}
                  className="h-130  w-[100%] rounded-t-2xl"
                  alt=""
                />
              </div>
              <div className="h-20  flex justify-center items-center bg-[#bbb8b0] rounded-b-2xl">
                Top
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WomenSection;
