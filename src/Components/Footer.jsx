import { NavLink, useLocation } from "react-router";
import { Button } from "@material-tailwind/react";
import { Dock } from 'react-osx-dock';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const loc=useLocation();
  console.log(loc);
    return (
      <footer className={`${loc.pathname==="/"?"bg-blue-gray-50":"bg-blue-gray-100" } hover:${loc.pathname==="/"?"bg-blue-gray-50":"bg-blue-gray-200" }`}>
      <hr></hr>
        <div className="p-2 pl-5 flex justify-center items-center flex-wrap md:justify-between gap-5">
          <div className="flex items-center">
            <NavLink to="/"><img src="/logoADf.png" className="w-52"></img></NavLink>
            <h1 className="font-bold">
              Have a project in mind?<br/>
              Lets build something together!
            </h1>
          </div>
          <div><NavLink to="/contact">
            <Button  className="text-xl mr-10" size="lg" variant="gradient" color="green">Contact</Button>
          </NavLink></div>
        </div>
        <hr className=" bg-blue-gray-400 h-0.5"/>
        <div className="flex justify-center p-8 gap-7">
          <p className="text-2xl">Created by <span className="font-bold">Akshay Dhangar</span> © 2024. All rights reserved.</p>
          <Dock itemWidth={27} magnification={1} magnifyDirection="up">
          <a href="https://github.com/NabhDhangar?tab=repositories" target="blank" className="text-4xl cursor-pointer absolute" ><FaGithub /></a>
          <a href="akshaydhangar03@gmail.com" MdEmail target="blank" className="text-4xl cursor-pointer absolute" ><MdEmail /></a>
          <a href="https://www.linkedin.com/in/akshaydhangar/" target="blank" className="text-4xl cursor-pointer absolute" ><FaLinkedin /></a>
          </Dock>
        </div>
      </footer>
    );
  };