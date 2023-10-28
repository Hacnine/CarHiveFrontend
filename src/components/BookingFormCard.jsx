import { LabelInput, PrimaryButton } from "../components";
import { formItems, vehicleTypes } from "../constants";

const BookingFormCard = () => {
  return (
    <div className="w-[91%] lg:w-fit  border-green-400 mx-auto">
              <div className="mt-10">
                <h4 className=" text-base font-bold text-gray-900 font-open  ">
                  <span className=" text-primary-green">Select</span> Date and Time
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
  )
}

export default BookingFormCard
