/** @format */

import React, { useState } from "react";
import { Link } from "react-scroll";
import { Nextlogo } from "../../assets/index.js";
import { navLinksdata } from "./../../constants/index";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 bg-bodyColor mx-auto flex flex-col lg:flex-row justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4 ">
      {/* Left Side */}
      <div className="mb-4 lg:mb-0 lg:mr-8">
        <a href="/" className="cursor-pointer">
          <img
            className="object-contain h-20 w-30 rounded-full"
            src={Nextlogo}
            alt="Logo"
          />
        </a>
      </div>

      {/* Right Side */}
      <div className="flex flex-col lg:flex-row items-center">
        <ul className="flex flex-col lg:flex-row items-center lg:gap-10 mb-4 lg:mb-0">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block lg:inline-block">
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer mb-4 lg:mb-0">
          <FiMenu />
        </span>

        {showMenu && (
          <div className="w-full lg:w-[80%] h-screen lg:h-auto overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={Nextlogo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum soluta perspiciatis molestias enim cum repellat, magnam
                  exercitationem distinctio aliquid nam.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer">
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
