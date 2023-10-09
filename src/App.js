import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import NavBar from "./section/NavBar";
import BestSellers from "./pages/BestSellers";
import Templates from "./pages/Templates";
import ForHome from "./pages/ForHome";
import PreFooter from "./section/PreFooter";
import Footer from "./section/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/forhome" element={<ForHome />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <div className="w-full border-t-4 #555555"></div>
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
