import { LabelInput, PrimaryButton } from "../components";
import { formItems, vehicleTypes } from "../constants";
import { heroImage } from "../assets";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const buttonIcon = <FaSearch className=" text-white-green mr-2"/>

  return (
    <section className=" relative flex items-center justify-center">
      <img
        src={heroImage}
        alt="cover-image"
        className=" min-w-full min-h-screen flex-1 object-cover"
      />
      <div className="absolute top-36 flex items-center flex-col">
        <div className=" wrapper min-h-[444px] ">
          <h1 className="head_text  text-white-green font-neon text-center">
          Looking for a <span className="text-primary-green"> vehicle</span>? You're at the right place. 
          </h1>
          
        </div>

        <div className=" wrapper  absolute top-28 bg-white-green w-10/12 lg:w-[1116px] shadow-lg  rounded-lg  pb-8">
        

          <div className="lg:flex lg:items-center lg:justify-between     rounded-md  ">
            {/* <div className=" mt-14"> */}
            <div className="flex items-center justify-center">
            <div className="">
              <h4 className="mt-14 text-base font-bold text-gray-900 pb-4 ">
                <span className=" text-red-400">Select</span> Your Vehicle Types
              </h4>
              <div className="grid grid-cols-2  gap-2  border-gray-600 lg:w-full w-60 ">
                {vehicleTypes.map((items, index) => (
                  <div className="relative lg:w-36 lg:h-24 h-24 w-28  bg-light-green rounded-lg  flex  items-center justify-center " key={index}>
                    <img
                  src={items.image}
                  alt={items.alt}
                  className="object-cover lg:w-[100px] w-20"
                />
                    <p className="absolute bottom-1 font-bold text-sm">
                      {items.type}
                    </p>
                  </div>
                ))}
              </div>
              </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="mt-10">
                  <h4 className=" text-base font-bold text-gray-900  ">
                    <span className=" text-red-400">Select</span> Date and Time
                  </h4>
                  <div className="grid grid-rows-2 lg:grid-flow-col lg:gap-3 ">
                    {formItems.map((item, index) => (
                      <LabelInput
                        label={item.label}
                        placeholder={item.placeholder}
                        icon={item.icon}
                        key={index}
                      />
                    ))}

                  </div>
                </div>
              </div>
              
            </div>
            <div className="flex justify-center  lg:justify-end  w-full  border-gray-300 lg:mt-3 mt-7">
            <PrimaryButton
              className={ 
                "lg:w-full flex w-64    bg-primary-green "
              }
              buttonName={"Find A Vehicle "}
              icon={buttonIcon}
            />
          </div>
          </div>

        </div>
    </section>
  );
};

export default Hero;

{
  /*  */
}
