import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
