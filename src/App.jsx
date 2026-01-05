
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Program from "./components/Program";
import Contact from "./components/Contact";
import Result from "./components/Result";
import Admission from "./components/Admission";


export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/result" element={<Result />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}
