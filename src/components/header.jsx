import React from "react";
import image from "./abstract-fantasy-landscape-background.jpg";

const Header = () => {
  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex justify-center items-center h-full text-white">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100  dark:bg-blue-500 p-2 rounded-lg">
            Elevate Your Productivity with
            <mark className=""></mark>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Streamline your day and track your progress with DailyTrack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
