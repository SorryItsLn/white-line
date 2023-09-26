import React from "react";
import arrowRight from "../assets/icons/arrow-right.png";

const Join = () => {
  return (
    <section className=" flex items-center justify-center flex-col">
      <h1 className=" font-montserrat  text-gray-600 font-bold text-2xl tracking-widest mt-12">
        JOIN THE LIST, GET 10% OFF YOUR FIRST PURCHASE!
      </h1>
      <h2 className=" mt-8 text-lg italic font-lora text-gray-500">
        Plus, be the first to know about new collections and exclusive offers.
      </h2>
      <h2 className="mt-2 text-lg text-gray-500 italic font-lora">
        {" "}
        We never spam. Unsubscribe anytime.
      </h2>
      <div className=" mt-4 flex justify-center items-center w-[448px] h-[53px] bg-gray-200 ">
        <input
          autoComplete="email"
          className="w-[400px] ml-4 mt-2 h-[45px] outline-none bg-gray-200"
          type="text"
          placeholder="EmailЯЧС"
        />
        <button className=" w-[30] h-[45]  bg-[#646464]">
          <img
            className="m-2"
            height={40}
            width={36}
            src={arrowRight}
            alt="arrowRight"
          />
        </button>
      </div>
    </section>
  );
};

export default Join;
