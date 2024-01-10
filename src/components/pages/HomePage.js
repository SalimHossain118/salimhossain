/** @format */

import React from "react";
import BannerCarousel from "../banner/BannerCarousel.js";
import { countries } from "../banner/Data.js";
import Banner from "../banner/Banner.js";
import Features from "../features/Features.js";
import Projects from "../Projects/projects.js";
import Solutions from "../solutions/Solutions.js";
import ClientReview from "../clientreview/ClientReview.js";
import ContactUs from "../contactus/ContactUs.js";
import TeamMembers from "../team/TeamMembers.js";

const HomePage = () => {
  return (
    <section id="homee" className="w-full  py-3  items-center">
      <Banner />
    </section>
  );
};

export default HomePage;
