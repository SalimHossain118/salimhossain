/** @format */

import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section className="w-full  py-3  items-center">
      <div
        className="w-full pt-10 pb-20 flex flex-row gap-10 xl:gap-0 justify-center
       items-center font-titleFont"
      >
        <LeftBanner />

        <br></br>
        {/* <RightBanner /> */}
        <RightBanner />
      </div>
    </section>
  );
};

export default Banner;
