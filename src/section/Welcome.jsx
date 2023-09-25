import React from "react";
import { welcomePage } from "../constants/constants.js";
import WelcomeCard from "../components/WelcomeCard.jsx";

const Welcome = () => {
  return (
    <section className="max-container mt-12">
      <div className="max-container flex justify-center flex-col items-center ">
        <h1 className=" font-montserrat  text-gray-600 font-bold text-4xl tracking-widest">
          WELCOME TO WHITE LINEN
        </h1>
        <h2 className="text-info text-lg text-center w-[690px] tracking-widest font-lora text-gray-500 mt-5">
          Share information about your brand with your customers. Describe a
          product, make announcements, or welcome customers to your store.
        </h2>
        <div className="flex m-10 ">
          {welcomePage.map((item) => (
            <img
              className="m-3 hover:scale-105 ease-in duration-300"
              width={354}
              height={404}
              key={item.id}
              src={item.imgURL}
              alt={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
