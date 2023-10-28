import {  PrimaryButton } from "../components";

import { FaSearch } from "react-icons/fa";
import BookingCarCard from "./BookingCarCard";
import BookingFormCard from "./BookingFormCard";

const BookingCard = () => {
    const buttonIcon = <FaSearch className=" text-white-green mr-2"/>
  return (
    <>
       <div className="   absolute md:top-56 top-60 bg-white-green  lg:w-[90%] w-[70%] lg:h-[350px] md:h-[120%]  shadow-lg  rounded-lg  pb-8 font-open ">
        

        <div className="flex md:flex-col items-center justify-center lg:flex-row flex-col  border-blue-500  rounded-md  ">
          {/* <div className=" mt-14"> */}
          <BookingCarCard/>
          <BookingFormCard/>
            
          </div>
          <div className="flex justify-center  lg:justify-end  w-full  -gray-300 lg:mt-3 mt-7">
          <PrimaryButton
            className={ 
              "lg:w-full flex w-64    bg-primary-green "
            }
            buttonName={"Find A Vehicle "}
            icon={buttonIcon}
          />
        </div>
        </div>
    </>
  )
}

export default BookingCard
