import React from "react";
import BlogCart from "../components/BlogCart";
import { blogConst } from "../constants/constants";

const BlogBaner = () => {
  return (
    <section className="flex justify-center items-center bg-[#71717127]  h-[800px]">
      {blogConst.map((item) => (
        <div className=" ">
          <BlogCart
            className=" w-[616px] h-[700px] overflow-hidden  "
            name={item.name}
            imgURL={item.imgURL}
          />
        </div>
      ))}
    </section>
  );
};

export default BlogBaner;
