import NavBar from "../section/NavBar";
import mainBg from "../assets/img/homeBg.png";
import Welcome from "../section/Welcome";
import bgSecond from "../assets/img/bgSecond.png";
import ShopOur from "../section/ShopOur";
import Join from "../section/Join";
import Overhead from "../section/Overhead";
import blogBg from "../assets/img/blog-banner.webp";
import BlogBaner from "../section/BlogBaner";
import PreFooter from "../section/PreFooter";
import Footer from "../section/Footer";
import About from "../pages/About";
import Blog from "../pages/Blog";

const Home = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <img className="w-full cursor-pointer " src={mainBg} alt="mainBg" />
      <Welcome />
      <img
        className=" cursor-pointer scale-100  w-full"
        src={bgSecond}
        alt="bgSecond"
      />
      <ShopOur />
      <Join />
      <Overhead />
      <img className="w-full cursor-pointer " src={blogBg} alt="blogBg" />
      <BlogBaner />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Home;
