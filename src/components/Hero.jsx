import React from "react";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import FilledBtn from "./UI/FilledBtn";
import EmptyBtn from "./UI/EmptyBtn";

function Hero() {
  return (
    <section id="Hero" className=" max-sm:mx-10 my-20 ">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <div className="text-center space-y-7 sm:px-20 md:px-28 lg:px-48 xl:px-96">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            virtualR build tools{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
              for developers
            </span>
          </h1>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            beatae neque, ullam laboriosam quaerat suscipit quidem iure repellat
            ea eum.
          </p>
          <div className="md:space-x-10 max-md:flex max-md:flex-col max-md:gap-y-6 max-md:items-center">
            <FilledBtn className="sm:px-6 sm:py-2 max-md:w-1/2">Start for free</FilledBtn>
            <EmptyBtn className="sm:px-6 sm:py-2 max-md:w-1/2">Documentation</EmptyBtn>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-3/4 lg:size-5/12 border border-orange-500 rounded-lg"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-3/4 lg:size-5/12 border border-orange-500 rounded-lg"
          >
            <source src={video2} type="video/mp4" />
            your browser does not support the vdeo tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
