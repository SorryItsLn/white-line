import React from "react";
import bg from "../assets/img/background.jpg";
import { templates } from "../constants/constants";
import ShopOurCard from "../components/ShopOurCard";
import PreFooter from "../section/PreFooter";
import Footer from "../section/Footer";

const Templates = () => {
  return (
    <section>
      <div className="block h-[2100px] ">
        <div className="flex relative w-full z-0  justify-center ">
          <img src={bg} alt="bg" />
          <div className="flex bg-transparent absolute z-10 w-full justify-center mt-40">
            <div className="bg-white w-[1120px] h-[1400px] flex items-center flex-col">
              <h1 className=" font-montserrat  text-gray-600 font-bold text-4xl tracking-widest relative bottom-6 ">
                {" "}
                Templates
              </h1>
              <div className="h-[60px]  bg-gray-100 w-full"></div>
              <div className="flex flex-wrap  items-center ml-[15px] ">
                {templates.map((item) => (
                  <ShopOurCard
                    imgURL={item.imgURL}
                    price={item.price}
                    name={item.name}
                    className=" m-4"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
