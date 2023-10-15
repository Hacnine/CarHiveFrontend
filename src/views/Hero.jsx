import heroPatternRight from "../assets/hero-pattern-right.svg";
import heroPatternLeft from "../assets/hero-pattern-left.svg";
import busIcon from "../assets/bus-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";

import { LabelInput, PrimaryButton } from "../components";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className=" bg-lightest-gray relative">
        <div className="wrapper min-h-[444px]">
          <h1 className="head_text pt-28 text-center">
            Find your <span className="green_text">Rental car</span>
          </h1>
          <h4 className="text-xl text-gray-600 text-center pb-11">
          Your Selection, Our Delivery.
          </h4>
         
          
        </div>
        <img
        src={heroPatternRight}
        alt="hero-pattern-right"
        width={357}
        className="hidden lg:w-[300px] lg:block absolute bottom-0 right-0  object-cover"
        />
          <img
        src={heroPatternLeft}
        width={257}
        alt="hero-pattern-right"
        className=" lg:w-[400px] h-full lg:block absolute left-0  bottom-0  object-cover"
        />
      </div>
       
      
    </section>
  );
};

export default Hero;

<h4 className="text-subtitle-gray text-center font-raleway text-xl pb-11">
          Your Selection, Our Delivery.
          </h4>