import React from "react";
import { shopOurConst } from "../constants/constants";
import PreFooter from "../section/PreFooter";
import Footer from "../section/Footer";

const ShopOurCard = ({ imgURL, price, name }) => {
  return (
    <div className=" cursor-pointer  bg-gray-200 m-4 ">
      <div className="overflow-hidden inline-blokc m-0 p-0">
        <img
          className=" hover:scale-105 ease-in z-0 duration-300 mt-0 pt-0 "
          width={331}
          height={400}
          src={imgURL}
          alt={name}
        />
      </div>
      <div className="flex flex-col overflow-hidden justify-center items-center z-50 w-[330px] h-[90px] mt-0 pt-0 mb-2">
        <h1 className="text-xl font-montserrat font-semibold text-slate-600 ">
          {name}
        </h1>
        <h2 className="info-text mt-2">{price} USD</h2>
      </div>
    </div>
  );
};

export default ShopOurCard;
