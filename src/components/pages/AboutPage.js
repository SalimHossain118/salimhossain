/** @format */

import React from "react";
import Banner from "../banner/Banner.js";
import ContactUs from "../contactus/ContactUs.js";
import Features from "../features/Features.js";

const AboutPage = () => {
  return (
    <section className="w-full  py-3  items-center">
      <Banner />
      <Features />
      <ContactUs />
    </section>
  );
};

export default AboutPage;
