import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";
import TopDoctors from "../components/TopDoctors";

const MainLyout = () => {
  return (
    <div>
      <Header />
      <div className="mt-20 ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLyout;
