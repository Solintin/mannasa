import React from "react";
import Funds from "./Components/Funds";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Partner from "./Components/Partner";

const App = () => {
  return (
    <div>
      <div className="hero bg-[#0A1E25] h-full">
        <Header />
        <Hero />
        <Partner />
        <Funds />
      </div>
    </div>
  );
};

export default App;
