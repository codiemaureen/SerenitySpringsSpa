import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Servicelink from "./components/Servicelink";
import aboutUsImg from '../src/images/hair.jpg'
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Servicelink image={aboutUsImg}/>
      <AboutUs />
    </div>
  );
}

export default App;
