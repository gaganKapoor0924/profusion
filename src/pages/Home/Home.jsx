import React from "react";
import Banner from "../../components/Banner/banner";
import Classes from "../../components/Classes/classes";
import DanceStudio from "../../components/DanceStudio/dancestudio";
import Prices from "../../components/Prices/Prices";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Classes />
      <DanceStudio />
      <Prices />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
