import React from "react";
import HeroImg from "../../assets/home/heroSection/Hero5.png";

function Hero() {
  return (
    <div
      className="h-[400px] bg-cover bg-center flex flex-col items-center justify-center p-3"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="font-extrabold text-[30px] sm:text-[50px] md:text-[70px]   text-white">
          StyleNest
      </div>
      <div className="text-white text-[10px] sm:text-[15px] md:text-[20px] text-center">Discover fashion that fits your vibe. From everyday essentials to statement pieces, <br /> StyleNest brings you trendy, affordable clothing.</div>
        
    </div>
  );
}

export default Hero;
