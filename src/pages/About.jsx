import React from "react";
import banner from "../assets/img/about_bg.webp";
import banner2 from "../assets/img/about_banner2.webp";
import aboutpg_3 from "../assets/img/aboutpg_3.webp";
import quotes from "../assets/icons/free-icon-double-quotes-7350738.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-full">
      <div>
        <img className="w-full" src={banner} alt="" />
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="font-montserrat  text-gray-600 font-bold text-4xl">
          WE'RE WHITE LINEN
        </h1>
        <p className="w-[40%]  text-info text-lg text-center  tracking-widest font-lora text-gray-500 mt-5">
          Papeterie rideaux arbre en fleurs mode voyage plume hiver, travail
          cher automne souvent manteau champagne timbre diamants rose. Dentelle
          musique citation vent fontaine, montre bonne velours fabuleux ballet
          merveilles parapluie chocolat floraison doux froid charmant.
        </p>
        <p className="w-[40%]  text-info text-lg text-center  tracking-widest font-lora text-gray-500 mt-5">
          Rideaux arbre en fleurs mode voyage plume hiver, travail cher automne
          souvent manteau.
        </p>
        <p className="w-[40%]  text-info text-lg text-center  tracking-widest font-lora text-gray-500 mt-5">
          Fleurs mode papeterie rideaux arbre en voyage plume hiver, travail
          cher automne souvent manteau champagne timbre diamants rose.
        </p>
        <div className=" mt-8 mb-12 text-lg  font-montserrat h-[45px] p-6 flex justify-center items-center tracking-wider text-white bg-[#545454] hover:bg-[#5454549f]">
          <Link to="/bestsellers">SHOP BESTSELLERS</Link>
        </div>
      </div>
      <div>
        <img className="w-full" src={banner2} alt="" />
      </div>
      <section className="flex flex-col justify-center items-center  ">
        <div className="w-full flex items-center justify-start  flex-col  h-[404px] bg-overhead">
          <img
            src={quotes}
            alt="quotes"
            width={55}
            height={55}
            className="relative top-12  "
          />
          <div className="w-[1300px] h-[291px] bg-white mt-4 mb-12  flex flex-col justify-center items-center">
            <p className="w-[820px] h-[50px] info-text text-center mt-4 ">
              I feel good about what I'm purchasing when I shop at White Linen.
              I know I'm purchasing ethically sourced fabrics, and helping the
              earth thrive. And of COURSE its so stylish!
            </p>

            <h1 className="relative p-1 mt-10 font-montserrat text-gray-600 font-bold text-2xl tracking-widest">
              Dmitryi
            </h1>
          </div>
        </div>
      </section>
      <div className=" flex w-full">
        <div className="">
          <div className=" ">
            <img
              className=" h-[380px] w-[733px] object-cover"
              src={aboutpg_3}
              alt="aboutpg_3"
            />
          </div>
        </div>

        <div className="">
          {" "}
          <h1>WE CAN'T WAIT TO SERVE YOU</h1>
          <p className="text-info">
            {" "}
            Papeterie rideaux arbre en fleurs mode voyage plume hiver, travail
            cher automne souvent manteau champagne timbre diamants rose mode
            voyage plume hiver, travail. Automne souvent manteau champagne
            timbre
          </p>
          <div className="w-[192px] h-[43px]">
            <div className=" mt-8 mb-12 text-lg  font-montserrat h-[45px] p-6 flex justify-center items-center tracking-wider text-white bg-[#545454] hover:bg-[#5454549f]">
              <Link to="/bestsellers">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
