import React from "react";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import LimitedEdition from "../components/home/LimitedEdition";
import MarqueeBanner from "../components/home/MarqueeBanner";
import AboutUs from "../components/home/AboutUs";
import ContactUs from "../components/home/ContactUs";

function Home() {
  return (
    <div>
      <Hero />
      <MarqueeBanner/>
      <Products />
      <AboutUs/>
      <LimitedEdition />
      <ContactUs/>

    </div>
  );
}

export default Home;
