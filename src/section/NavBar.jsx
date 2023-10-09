import React, { useState } from "react";
import search from "../assets/icons/zoom.png";
import logoNav from "../assets/img/logoNav.avif";
import faccebok from "../assets/icons/faccebook.png";
import inst from "../assets/icons/inst.png";
import yt from "../assets/icons/youtube.png";
import cart from "../assets/icons/cart.png";
import { Link } from "react-router-dom";
import "../style/full.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <section
        className=" mt-4 flex  max-container  items-center justify-between"
        onClick={() => setOpen(open ? false : true)}
      >
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
        <div className="w-full h-16 bg-[#efefef] flex justify-center items-center  ">
          <div className="flex justify-between items-center w-[650px] text-xl font-montserrat font-normal text-gray-500">
            <Link className="" to="/home">
              {" "}
              Home
            </Link>
            <div class="dropdown">
              <h1
                class="dropbtn cursor-pointer "
                onClick={() => setOpen(open ? false : true)}
              >
                {" "}
                Shop
                <i class="fa fa-caret-down"></i>
              </h1>
              <div
                className={
                  open
                    ? "block dropdown-content duration-300 "
                    : "hidden dropdown-content duration-300"
                }
                onClick={() => setOpen(open ? false : true)}
              >
                <Link
                  className=" block  font-normal mt-5 uppercase hover:text-gray-600"
                  to="/bestsellers"
                >
                  Bestsellers
                </Link>
                <Link
                  className=" block  font-normal uppercase hover:text-gray-600 "
                  to="/templates"
                >
                  Templates
                </Link>
                <Link
                  className=" block  font-normal uppercase hover:text-gray-600"
                  to="/forhome"
                >
                  For home
                </Link>
              </div>
            </div>
            <Link className="block" to="/about">
              About
            </Link>
            <Link to="/blog"> Blog</Link>
            <Link to="/faq">Faq</Link>
            <Link to="/contact"> Contact</Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
