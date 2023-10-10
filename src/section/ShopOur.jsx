import React from "react";
import { shopOurConst } from "../constants/constants";
import ShopOurCard from "../components/ShopOurCard";

const ShopOur = () => {
  return (
    <section
      className="w-full
     mt-12 bg-[#e8e6e6]"
    >
      <div className="max-container flex flex-col items-center  ">
        <div className=" flex justify-center flex-col items-center   ">
          {" "}
          <h1 className=" font-montserrat  text-gray-600 font-bold text-4xl tracking-widest mt-12">
            SHOP OUR PICKS
          </h1>
          <h2 className="text-info text-lg text-center w-[690px] tracking-widest font-lora text-gray-500 mt-5 mb-5">
            Share information about your brand with your customers. Describe a
            product, make announcements, or welcome customers to your store.
          </h2>
        </div>

        <div className=" w-[70%] h-[980px] mb-6 bg-slate-50 flex flex-wrap justify-around items-center ">
          {shopOurConst.map((item) => (
            <ShopOurCard
              key={item.name}
              imgURL={item.imgURL}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
        <div className="text-lg  font-montserrat mb-5 h-[45px] w-[150px] flex justify-center items-center tracking-wider text-white bg-[#545454] hover:bg-[#5454549f]">
          <a href="zxc">View all</a>
        </div>
      </div>
    </section>
  );
};

export default ShopOur;
