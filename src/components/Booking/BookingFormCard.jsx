import { useState } from "react";
import { LabelInput, PrimaryButton } from "..";
import { formItems, vehicleTypes } from "../../constants";


const BookingFormCard = ({ grid }) => {


  return (
    <div className="   border-green-400 mx-auto relative">
      <div className=" border-black">
        <h4 className=" text-lg font-bold text-slate-blue font-open  ">
          <span className=" text-primary-green">Select</span> Date and Time
        </h4>
        <div
          className={`grid ${
            grid ? `${grid}` : "grid-rows-2 lg:grid-flow-col"
          }  lg:gap-3 `}
        >
          {formItems.map((item, index) => (
            <div key={index}>
              <LabelInput {...item} />
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingFormCard;
