import React from "react";
import search from "../assets/icons/zoom.png";
import logoNav from "../assets/img/logoNav.avif";
import faccebok from "../assets/icons/faccebook.png";
import inst from "../assets/icons/inst.png";
import yt from "../assets/icons/youtube.png";
import cart from "../assets/icons/cart.png";

const NavBar = () => {
  return (
    <header>
      <section className=" mt-4 flex  max-container  items-center justify-between">
        <div className=" w-[26%] flex hover:scale-105 cursor-pointer">
          <img width={30} height={30} src={search} alt="search" />
        </div>
        <div className=" w-[33%] flex ">
          <img src={logoNav} alt="logoNav" />
        </div>
        <div className="  flex  items-center justify-around  ">
          <img
            className="m-3"
            width={35}
            height={35}
            src={faccebok}
            alt="faccebok"
          />
          <img className="m-1" width={35} height={35} src={inst} alt="inst" />
          <img className="m-2" width={35} height={35} src={yt} alt="yt" />
          <img className="m-1" src={cart} width={45} height={45} alt="cart" />
        </div>
      </section>
      <section>
        <div className="w-full h-16 bg-gray-200 flex justify-center items-center  ">
          <div className="flex justify-between items-center w-[650px] text-xl font-montserrat font-semibold text-gray-500">
            <a className="" href="">
              {" "}
              Home
            </a>
            <a href=""> Shop</a>
            <a href="">About</a>
            <a href=""> Blog</a>
            <a href="">Faq</a>
            <a href=""> Contact</a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
