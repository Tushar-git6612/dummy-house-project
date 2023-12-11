import "./App.css";
import Home from "./components/home/Index";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/about/Index";
import Contact from "./components/contact/Index";
import PropertyList from "./components/property list/Index";
import ProperType from "./components/property type/Index";
import PropertyAgent from "./components/property agent/Index";
import Testimonial from "./components/testimonial/Index";
import Error from "./components/error/Index";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="Property/PropertyList" element={<PropertyList />} />
        <Route path="Property/PropertyType" element={<ProperType />} />
        <Route path="Property/PropertyAgent" element={<PropertyAgent />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes> */}
    </>
  );
}

export default App;
