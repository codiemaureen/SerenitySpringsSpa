import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Servicelink from "./components/Servicelink";
import './index.css';
import { useState } from "react";
import aboutUsImg from '../src/images/hair.jpg'
import Footer from "./components/Footer";

function App() {
  const [services, setServices] = useState([
      {
            id: 1,
            title: "Hair",
            image: aboutUsImg,
            description: "We do hair"
      },
        {
            id: 1,
            title: "Makeup",
            image: aboutUsImg,
            description: "we do makeup"
      },
        {
            id: 1,
            title: "Nails",
            image: aboutUsImg,
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
