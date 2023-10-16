import heroPatternRight from "../assets/hero-pattern-right.svg";
import heroPatternLeft from "../assets/hero-pattern-left.svg";
import busIcon from "../assets/bus-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";

import { LabelInput, PrimaryButton } from "../components";
import { formItems, vehicleTypes } from "../constants";
import { heroImage } from "../assets";

const Hero = () => {
  return (
    <section>
      <div className="">
      
      <div className="wrapper min-h-[444px]">
          <h1 className="head_text pt-28 text-center">
            Find your <span className="green_text">Rental car</span>
          </h1>
          <h4 className="text-xl text-gray-600 text-center pb-11">
            Your Selection, Our Delivery.
          </h4>
        </div>


      <div className="wrapper flex lg:flex-row flex-col items-center justify-center lg:gap-4">
        {/* <h4 className="text-2xl font-bold text-left">What is your vehicle type?</h4> */}
        <div className="grid grid-rows-2 grid-flow-col gap-4 mt-[70px] min-w-min border-gray-600 ">
          {vehicleTypes.map((items) => (
            <div className="relative lg:w-36 lg:h-24 w-48 h-32 bg-light-green rounded-md text-white  items-center flex flex-col  ">
              <img
                src={items.image}
                alt={items.alt}
                
                className="object-cover lg:w-[100px] w-[150px]"
              />
              <p className="absolute bottom-1 font-bold lg:text-sm">{items.type}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-rows-2 lg:grid-flow-col   mt-12 gap-0 lg:gap-3 ">
          {formItems.map((item) => (
            <LabelInput
              label={item.label}
              placeholder={item.placeholder}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
