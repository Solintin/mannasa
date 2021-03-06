import React from "react";
import Funds from "./Components/Funds";
import Getstarted from "./Components/Getstarted";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Partner from "./Components/Partner";
import Faqs from "./Components/Faq";
import Footer from "./Components/Footer";
import FooterMobile from "./Components/Footer-Mobile";

const App = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);
  return (
    <div>
      <div className="hero bg-[#0A1E25] h-full">
        <Header />
        <Hero />
      </div>
      <Partner />
      <Funds />
      <Getstarted />
      <Faqs />
      {windowWidth > 760 ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default App;
