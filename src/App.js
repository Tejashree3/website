import { Route, Routes } from "react-router-dom";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import About from "./components/about/About";
import Blogdetail from "./components/Blog/Blogdetail";
import Featureslider from "./components/featuredslider/Featureslider";
import Gallery from "./components/Gallery/Gallery";
import Maininvestment from "./components/investment/Maininvestment";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-detail/:blogId" element={<Blogdetail />} />
<Route path="/featureslider/:id" element={<Gallery />} />
<Route path="/investmentSlider/:id" element={<Maininvestment />} />

      </Routes>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp size={30} color="#fff" />
      </a>

      {/* Up Arrow Icon */}
      <a href="#top" className="up-arrow-icon">
        <FaArrowUp size={30} color="#fff" />
      </a>

      <Footer />
    </>
  );
}

export default App;
