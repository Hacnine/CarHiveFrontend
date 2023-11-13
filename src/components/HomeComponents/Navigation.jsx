import { useState } from "react";
import logo from "../../assets/logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSolidSun } from "react-icons/bi";
import { BsMoonFill, BsMoonStarsFill } from "react-icons/bs";

import { TbMenuDeep } from "react-icons/tb";
import { navLinks2 } from "../../constants";
import PrimaryButton from "../PrimaryButton";
import { RiLoginCircleFill } from "react-icons/ri";
import Headroom from "react-headroom";
import NavDrawer from "./NavDrawer";
import { AppContext, useGlobalContext } from "../../Context";

import modeDark from "../../assets/modeDark.svg";

import modeLight from "../../assets/modeLight.svg";

const Navigation = ({ paddingB, background }) => {
  const [open, setOpen] = useState(false);
  const { isDark, setIsDark } = useGlobalContext(AppContext);

  const openDrawer = () => {
    setOpen(true);
  };
  const logInIcon = <RiLoginCircleFill className="text-white " />;

  const closeDrawer = () => {
    setOpen(false);
  };

  const [color, setColor] = useState("bg-transparent text-white");
  // const changeColor = () =>{
  //   if(window.scrollY >= 90){
  //     setColor('backdrop-blur-sm bg-slate-blue/30 backdrop-brightness-50	 text-white-green');
  //   }
  //   else{
  //     setColor('bg-transparent text-white-green');
  //   }
  // }
  // window.addEventListener('scroll', changeColor);
  // <Headroom
  //   className="absolute w-full ">

  return (
    <nav
      id="navbar"
      className={` ${paddingB} w-full  z-30 ${color} ${background}  border-black`}
    >
      <div className=" ">
        <div className=" flex  items-center  justify-between gap-6">
          <div className=" flex items-end justify-end flex-col  relative ">
            <img
              src={logo}
              alt="site logo"
              className="oject-cover  sm:w-[150px] w-[120px] "
            />
            {/* <div className=" absolute md:right-2 md:botttom-4 bottom-2 right-1 sm:h-7 h-9 sm:w-[150px] w-[120px] sm:rounded-2xl rounded-2xl shadow-md shadow-primary-green">

            </div> */}
          </div>

          {/* Nav Items */}
          <div className="hidden lg:block mx-auto  w-[697px] ">
            <div className="flex items-center  justify-between font-bold ">
              {navLinks2.map((section, key) => (
                <button
                  className=" relative flex justify-between items-center gap-1 rounded group
                      
                    "
                  key={key}
                >
                  <p className="">{section.title}</p>
                  {section.title != "Home" && section.title != "Booking" ? (
                    <>
                      <IoMdArrowDropdown />
                      <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white-green shadow-md mt-1 rounded">
                        <ul className="text-left border rounded">
                          {section.links.map((item) => (
                            <li
                              className="px-4 py-1 text-sm text-gray-600 font-medium  hover:bg-green-600 hover:text-white-green border-b"
                              key={item.name}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Nav Items End */}

          <div className="lg:hidden block">
            <div className=" flex items-center justify-end ">
              <TbMenuDeep
                className=" hover:cursor-pointer text-white-green h-6 w-6 absolute right-[65px]  "
                onClick={openDrawer}
              />
              <NavDrawer open={open} closeDrawer={closeDrawer} />
            </div>
          </div>

          {/* Drawer Start */}

          {/* Drawr End */}

          <div className="flex items-center gap-6 justify-end  w-48">
            {isDark ? (
              //
              <BsMoonFill
                className="w-7 h-7 text-blue-600 hover:text-blue-500 hover:cursor-pointer mr-5 "
                // src={modeDark}
                onClick={() => {
                  setIsDark(false);
                }}
              />
            ) : (
              <BiSolidSun
                className="w-7 h-7 text-yellow-600 hover:cursor-pointer mr-5"
                // src={modeLight}
                onClick={() => setIsDark(true)}
              />
            )}
            <PrimaryButton
              className={"lg:flex hidden   glow-green "}
              buttonName={" Sign in "}
             
            />
          </div>
        </div>
      </div>

      {/* </Navbar> */}
    </nav>
  );
};

export default Navigation;
