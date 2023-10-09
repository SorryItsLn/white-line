import React from "react";
import logo from "../assets/img/logoNav.avif";

const PreFooter = () => {
  return (
    <section className="pl-20 w-full bg-white h-[350px] flex justify-center items-center ">
      <div className="flex mr-12">
        <div className="mr-1 mt-14">
          <img width={300} height={118} src={logo} alt="logo" />
        </div>
        <div className="w-[1px] h-[260px] p-0 border-solid border-2 mr-1 border-gray-700 "></div>
      </div>
      <div className=" ">
        <h1 className=" font-montserrat text-gray-600 font-bold text-2xl tracking-widest">
          Quick Links
        </h1>
        <div className="flex flex-col ml-5 font-montserrat text-gray-500  text-lg tracking-widest">
          <ul className="mt-2">
            {" "}
            <a href=""> Shop</a>
          </ul>
          <ul className="mt-2">
            <a href="">About</a>
          </ul>
          <ul className="mt-2">
            <a href=""> Blog</a>
          </ul>
          <ul className="mt-2">
            <a href="">Faq</a>
          </ul>
          <ul className="mt-2">
            <a href=""> Contact</a>
          </ul>
          <ul className="mt-2">
            <a href=""> Privay Policy</a>
          </ul>
          <ul className="mt-2">
            {" "}
            <a href=""> Hyu</a>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start h-[231px] ml-10">
        <h1 className="font-montserrat text-gray-600 font-bold text-xl tracking-widest">
          JOIN MY LIST, LOVE!
        </h1>
        <input
          type="email"
          name="contact[email]"
          id=""
          placeholder="Email"
          aria-required="true"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="off"
          className="w-[245px] h-[45px] border-solid border-2 border-gray-600 mt-10  focus:outline-none p-2"
        />
        <button className="w-[245px] h-[45px] bg-gray-600 mt-2">
          <h1 className="font-montserrat text-white font-bold text-xl tracking-widest">
            JOIN
          </h1>
        </button>
      </div>
    </section>
  );
};

export default PreFooter;
