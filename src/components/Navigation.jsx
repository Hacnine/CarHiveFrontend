import { useState } from "react";

import logo from "../assets/logo.svg";
import { AiFillAliwangwang } from "react-icons/ai";

import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

// import { Drawer } from "@material-tailwind/react";

import React from "react";

const Navigation = () => {
  return (
    <section>
      <div className="wrapper flex  items-center justify-between py-5">

        <img src={logo} alt="" />
        
        <div className="hidden lg:block ">
          <ul className="flex items-center gap-10">
            <li className="link border-primary-green">
              <a href="#home">Home</a>
            </li>
            <li className="link border-transparent">
              <a href="#about">About</a>
            </li>
            <li className="link border-transparent">
              <a href="#services">Services</a>
            </li>
            <li className="link border-transparent">
              <a href="#testimonials">Booking</a>
            </li>
            <li className="link border-transparent">
              <a href="#pricing">Cars</a>
            </li>
            <li className="link border-transparent">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <TbMenuDeep className="block lg:hidden h-6 w-h6"/>
      </div>
    </section>
  );
};

export default Navigation;
