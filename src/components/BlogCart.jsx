import React from "react";

const BlogCart = ({ name, imgURL }) => {
  return (
    <div className="  m-1 border-solid border-2 border-gray-300 cursor-pointer inline-block overflow-hidden">
      <div className="overflow-hidden inline-blokc m-0 p-0">
        <img
          className=" hover:scale-105 ease-in z-0 duration-300 mt-0 pt-0 h-[600px]"
          src={imgURL}
          alt=""
        />
      </div>
      <div className="h-[120px] flex justify-center bg-slate-100 text-center items-center break-all">
        <h1 className="text-gray-400 font-bold text-lg tracking-widest ">
          {" "}
          {name}
        </h1>
      </div>
    </div>
  );
};

export default BlogCart;
