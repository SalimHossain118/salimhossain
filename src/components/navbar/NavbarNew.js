/** @format */

import React, { useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { Nextlogo } from "../../assets/index.js";

const NavbarNew = () => {
  const [activePage, setActivePage] = useState("homee");

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="w-full h-24 sticky top-0 z-50 p-5 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <RouterLink to="/">
          <img
            className="object-contain h-20 w-30 rounded-full"
            src={Nextlogo}
            alt="Logo"
          />
        </RouterLink>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarNew;
