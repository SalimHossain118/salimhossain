/** @format */

import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/Projects/projects";
import Solutions from "./components/solutions/Solutions.js";
import ClientReview from "./components/clientreview/ClientReview.js";
import ContactUs from "./components/contactus/ContactUs.js";
import Footer from "./components/footer/Footer.js";
import FooterBottom from "./components/footer/FooterBottom.js";

function App() {
  return (
    <Router>
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <Navbar />
        <div className="w-full mx-auto px-8">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/feature" element={<Features />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/resume" element={<ClientReview />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>

          <Footer />
          <FooterBottom />
        </div>
      </div>
    </Router>
  );
}

export default App;
