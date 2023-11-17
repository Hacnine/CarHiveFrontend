import { PrimaryButton } from "..";

import { FaSearch } from "react-icons/fa";
import BookingCarCard from "./BookingCarCard";
import BookingFormCard from "./BookingFormCard";

const BookingCard = () => {
  const buttonIcon = <FaSearch className=" text-white-green mr-2" />;
  return (
    // absolute md:top-56 top-60
    <div className="    bg-white-green  lg:w-[100%] md:w-[70%] w-[90%] lg:h-[350px] md:h-[170%]  shadow-lg  rounded-lg px-6   border-black pb-8 font-open">
      <div className="flex md:flex-col items-center justify-center lg:flex-row flex-col   border-blue-500  rounded-md  lg:px-6 sm:px-32 ">
        {/* <div className=" mt-14"> */}

          <BookingCarCard />
        <div className="lg:w-1/2 w-full mt-10 pl-6">
          <BookingFormCard />
        </div>
      </div>
      <div className="flex justify-center  lg:justify-end  w-full lg:mt-3 mt-7 s">
        <PrimaryButton
          className={"lg:w-full flex w-64    bg-primary-green "}
          buttonName={"Find A Vehicle"}
          icon={buttonIcon}
        />
      </div>
    </div>
  );
};

export default BookingCard;
