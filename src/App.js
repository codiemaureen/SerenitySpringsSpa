import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Servicelink from "./components/Servicelink";
import './index.css';
import { useState } from "react";
import hair from '../src/images/hair.jpg';
import makeup from '../src/images/makeup.jpg';
import nails from '../src/images/nails.jpg';
import Footer from "./components/Footer";

function App() {
  const [services, setServices] = useState([
      {
            id: 1,
            title: "Hair",
            image: hair,
            description: "We do hair"
      },
        {
            id: 1,
            title: "Makeup",
            image: makeup,
            description: "we do makeup"
      },
        {
            id: 1,
            title: "Nails",
            image: nails,
            description: "we do nails"
      }
  ]);

  return (
    <div className="App">
      <Header />
      <Servicelink services={services}/>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
