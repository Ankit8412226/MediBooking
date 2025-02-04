import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Login from "./Login";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-[100px]">
        <Hero />
      </div>

      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
