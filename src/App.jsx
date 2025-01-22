import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <div className="mx-4 sm:mx-[10%] mt-4">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
