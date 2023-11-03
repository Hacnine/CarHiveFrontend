import { useState } from "react";
import logo from "../assets/logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import { navLinks2 } from "../constants";
import PrimaryButton from "./PrimaryButton";
import { RiLoginCircleFill } from "react-icons/ri";
import Headroom from "react-headroom";
import NavDrawer from "./NavDrawer";

const Navigation = ({paddingB, background}) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };
  const logInIcon = <RiLoginCircleFill className="text-white mr-2" />;

  const closeDrawer = () => {
    setOpen(false);
  };

  const [color, setColor] = useState('bg-transparent text-white');
  const changeColor = () =>{
    if(window.scrollY >= 90){
      setColor('backdrop-blur-sm bg-slate-blue/30 backdrop-brightness-50	 text-white-green');
    }
    else{
      setColor('bg-transparent text-white-green');
    }
  }
  window.addEventListener('scroll', changeColor);


  return (
    // <Headroom
    //   className="absolute w-full ">
      <nav id="navbar" 
      className={` ${paddingB} w-full  z-30 ${color} ${background}  border-black`}>


        <div className=" ">
          <div className=" flex  items-center  justify-between gap-6">
             
            <img src={logo} alt="site logo"   className="boject-cover h-full sm:w-[200px] w-[120px]" />


            {/* Nav Items */}
            <div className="hidden lg:block  ">
              <div className="flex items-center space-x-8 font-bold ">
                {navLinks2.map((section, key) => (
                  <button
                    className=" relative flex justify-center items-center gap-1 rounded group
                      
                    "
                    key={key}
                  >
                    <p className="p-2">{section.title}</p>
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

            <div className="flex items-center justify-end">
              <TbMenuDeep
                className="lg:hidden block hover:cursor-pointer text-white-green h-6 w-6 absolute right-[65px]  "
                onClick={openDrawer}
              />
            </div>
            {/* Drawer Start */}

            <NavDrawer open={open} closeDrawer={closeDrawer}/>

            {/* Drawr End */}

        
            <PrimaryButton
              className={"lg:flex hidden   glow-green"}
              buttonName={" Sign in "}
              icon={logInIcon}
            />
          </div>
        </div>

        {/* </Navbar> */}
      </nav>
    // </Headroom>
  );
};

export default Navigation;
