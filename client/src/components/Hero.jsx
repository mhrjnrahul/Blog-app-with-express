import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen w-full -mt-16">
      <div className='bg-[url("/thumbnail.png")] bg-no-repeat bg-cover w-full h-full flex flex-col justify-start items-center p-16'>
        <div className="flex flex-col mt-10">
          <p className="text-4xl text-center">
            Publish your passions, your way
          </p>
          <p className="text-2xl text-center mt-3">
            Create a unique and beautiful blog easily.
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <Link to="/" className="bg-black text-xl text-white p-5 rounded-2xl mt-15">
            CREATE YOUR BLOG
          </Link>
          <Link to="/blogs" className="bg-black text-xl text-white p-5 rounded-2xl mt-15">
            SEE ALL BLOGS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
