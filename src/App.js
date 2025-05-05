import Header from "./components/Header";

import AboutUs from "./components/AboutUs";
import Servicelink from "./components/Servicelink";
import './index.css';
import { useState } from "react";
import hair from '../src/images/hair.jpg';
import makeup from '../src/images/makeup.jpg';
import nails from '../src/images/nails.jpg';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [services, setServices] = useState([
      {
            id: 1,
            title: "Hair",
            image: hair,
            description: "Transform your hair into a work of art with our signature styling services. Whether you desire a sleek, modern cut, dimensional color, or voluminous blowout, our master stylists tailor every detail to reflect your personal sophistication and style."
      },
        {
            id: 1,
            title: "Makeup",
            image: makeup,
            description: "Indulge in a bespoke makeup experience designed to highlight your natural elegance. Our elite makeup artists use premium products and expert techniques to craft flawless, radiant looks for any occasion—from timeless bridal beauty to red carpet glamour."
      },
        {
            id: 1,
            title: "Nails",
            image: nails,
            description: "Experience the ultimate in nail care and artistry. From classic manicures to intricate designs, our luxurious nail treatments are performed with precision and the finest products, leaving your hands and feet impeccably polished and pampered."
      }
  ]);

  return (
    <>
      <div className="fixed-background" />
      <div className="app">
        <NavBar />
        <Header />
        <Servicelink services={services}/>
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
