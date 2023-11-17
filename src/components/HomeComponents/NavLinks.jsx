import "../../views/customcss.css";

import { navLinks2 } from '../../constants'
import { Link, NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AppContext, useGlobalContext } from '../../Context';

const NavLinks = () => {
  const {signInBtn, setSignInBtn } = useGlobalContext(AppContext);

  function signIn(){
    setSignInBtn(true)
  }

  function signUp(){

    setSignInBtn(false)
  }

  return (
    <div>
        <div className="hidden lg:block mx-auto w-[697px]">
            <div className="flex items-center justify-between font-open">
              {navLinks2.map((section, key) => (
                <div
                  className="relative flex justify-between items-center gap-1 rounded group"
                  key={key}
                >
                  {/* <NavLink className={ 'active:text-primary-green'} to={section.link}>{section.title}</NavLink> */}

                  <NavLink  to={section.link} className=" hover:text-primary-green" >{section.title}</NavLink>
                  <p className=""></p>
                  {section.title !== "Home" && section.title !== "Booking" && section.title !== "News"  && section.title !== "Cars" ? (
                    <>
                      <IoMdArrowDropdown />
                      <div className="absolute hidden group-hover:block top-full min-w-full w-max bg-white-green shadow-md mt-1 rounded z-50">
                        <ul className="text-left border rounded">
                          {section.links.map((item) => (
                            <li
                            className="px-4 py-1 text-sm text-gray-600 font-medium hover:bg-deep-green hover:text-white-green border-b"
                            key={item.name}
                          >
                              {item.title === 'Sign Up'? 
                              
                              <Link to={item.link} onClick={signUp}>{item.name}</Link>
                            : 
                            <Link to={item.link}>{item.name}</Link>
                              
                              }
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default NavLinks
