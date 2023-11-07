import React from "react";
import { IoCall } from "react-icons/io5";
import PrimaryButton from "./PrimaryButton";

const CallUs = () => {
  return (
    <div className=" flex items-center justify-between">
      <h1 className="text-white-green  text-[38px] text-start w-[760px] leading-[50px]  ">
        Call us for further information. Rentaly customer care is here to help you anytime. 
      </h1>

      <div className=" items-center justify-center flex flex-col">
        <IoCall className="w-10 h-10 text-white-green mb-2"/>
        <p className=" tracking-[5px] text-white-green ">CALL US NOW</p>
        <p className="text-white-green font-open text-[42px] mb-2">1 200 333 800</p>
        <PrimaryButton className={'bg-primary-green'} buttonName={'Contact Us'}/>
      </div>
    </div>
  );
};

export default CallUs;
