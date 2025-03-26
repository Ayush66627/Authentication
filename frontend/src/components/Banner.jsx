import React from "react";
import banner from "../../public/banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 flex flex-col md:flex-row">
        <div className="w-full order-1 md:-order-1 md:w-1/2">
        <div className="space-y-6">
          <h1 className=" md:text-4xl md:font-bold text-3xl font-bold">
            Hello, learn something new everyday with your{" "}
            <span className="text-blue-800">Library!!!</span>
          </h1>
          <p className="text-xl  md:text-lg font-semibold ">
            Welcome to Library, your ultimate destination for discovering,
            reading, and enjoying a vast collection of books from every genre.
            Whether you're a fan of thrilling mysteries, heartwarming romance,
            thought-provoking fiction, or inspiring non-fiction, we have
            something for everyone.
          </p>
          <label className="input validator ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input className="border text-orange-600 w-full p-2" type="email" placeholder="Enter your email here" required />
          </label>
        </div>
          <button className="bg-orange-500 hover:bg-orange-700 text-lg font-bold px-4 p-1 rounded-md mt-4">Submit</button>
        </div>
          
        <div className=" md:w-1/2 w-full ">
          <img
            className="h-96 w-80 md:-mt-20  ml-10 justify-center"
            src={banner}
            alt="books"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
