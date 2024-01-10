/** @format */

import React from "react";

import { salimTest } from "../../assets";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const TeamMemberCard = (props) => {
  return (
    <div className="w-[400px] p-4 xl:px-12 h-[550px] bg-gray-400 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-25 h-25 overflow-hidden rounded-full bg-center bg-no-repeat bg-cover">
        <img
          className="w-[200px] h-[200px] object-cover rounded-full group-hover:scale-110 duration-300 cursor-pointer mx-auto"
          src={props.image}
          alt=""
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h2 className=" text-2xl uppercase text-designColor font-normal">
              {props.name}
            </h2>
          </div>
          <h3 className="mt-3 border-b=[1px] border-orange-500">
            Full Stack Software Engineer
          </h3>
          <div className="w-full h-[1.5px] bg-white"></div>

          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {props.experience}
          </p>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            Java,C#,JavaCsrip,Flutter,React,NodeJs Mysql,MongoDB,TailwindCss
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
