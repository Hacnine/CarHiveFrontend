import { useState } from "react";
import logo from "../../assets/logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSolidSun } from "react-icons/bi";
import { BsMoonFill, BsMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TbBrandBooking, TbMenuDeep } from "react-icons/tb";
import { navLinks2 } from "../../constants";
import PrimaryButton from "../PrimaryButton";
import { RiLoginCircleFill } from "react-icons/ri";
import Headroom from "react-headroom";
import NavDrawer from "./NavDrawer";
import { AppContext, useGlobalContext } from "../../Context";

import modeDark from "../../assets/modeDark.svg";

import modeLight from "../../assets/modeLight.svg";
import NavLinks from "./NavLinks";
import ProfileCard from "../ProfileComponents/ProfileCard";
import { profile } from "../../constants/index_four";

const Navigation = ({ paddingB, background }) => {
  const booking = <TbBrandBooking className='text-primary-green w-8 h-8'/>
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
            <Link to="/">
              <img
                src={logo}
                alt="site logo"
                className="oject-cover  sm:w-[150px] w-[120px] hover:cursor-pointer "
              />
            </Link>

          <NavLinks />

          <div className="lg:hidden block">
            <div className=" flex items-center justify-end ">
              <TbMenuDeep
                className=" hover:cursor-pointer text-white-green h-6 w-6 absolute right-[65px]  "
                onClick={openDrawer}/>
              <NavDrawer open={open} closeDrawer={closeDrawer} />
            </div>
          </div>

          <div className="flex items-center gap-6 justify-end w-48 md:mr:0 mr-12">
            {isDark ? (
              <BsMoonFill
                className="w-10 h-10 p-3 transition-colors ease-in duration-700 text-blue-600 hover:text-blue-400 bg-blue-600/30 rounded-full hover:cursor-pointer mr-5 "
                // src={modeDark}
                onClick={() => {
                  setIsDark(false);
                }}
              />
            ) : (
              <BiSolidSun
                className="w-10 h-10 p-2 transition-colors ease-in duration-700 text-primary-green hover:text-green-200 bg-primary-green/10 rounded-full hover:cursor-pointer mr-5"
                // src={modeLight}
                onClick={() => setIsDark(true)}
              />
            )}
            <PrimaryButton
              className={"lg:flex hidden glow-green "}
              buttonName={"Sign In"}
            />
           <div className="hidden  items-center">
           <PrimaryButton
              className={" text-red-600  bg-tranparent "} shadow
              icon={booking} textColor={' text-red-600'}
            />
            {profile.slice(0).map((items, index)=>(
              <div key={index}>
            <ProfileCard img={items.img} justImg />
              </div>
              
            ))}
           </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navigation;
