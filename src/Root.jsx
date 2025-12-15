import { useEffect } from "react";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <App />
      <Footer />
    </>
  );
};

export default Root;
