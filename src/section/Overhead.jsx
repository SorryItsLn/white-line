import React from "react";
import bg from "../assets/img/background-effect.webp";
import quotes from "../assets/icons/free-icon-double-quotes-7350738.png";
import autor from "../assets/img/author.jpg";

const Overhead = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-4 ">
      <div className="w-full flex items-center justify-start  flex-col  h-[404px] bg-overhead">
        <h1 className="p-1 mt-2 font-montserrat bg-gray-200 text-gray-600 font-bold text-2xl tracking-widest">
          OVERHEAD
        </h1>
        <img
          src={quotes}
          alt="quotes"
          width={55}
          height={55}
          className="relative top-12  "
        />
        <div className="w-[900px] h-[291px] bg-white mt-4 mb-12  flex flex-col justify-center items-center">
          <p className="w-[820px] h-[50px] info-text text-center mt-4 ">
            White Linen's products are amazing! So high quality and gorgeous.
            Totally my style, light and airy, they make my home look amazing!
          </p>
          <img
            src={autor}
            alt="autor"
            className="rounded-full w-[120px] h-[100px] mt-4"
          />
          <h1 className="relative p-1 mt-1 font-montserrat text-gray-600 font-bold text-2xl tracking-widest">
            Dmitryu Zhilkin
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Overhead;
