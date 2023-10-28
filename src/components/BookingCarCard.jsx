import { LabelInput, PrimaryButton } from "../components";
import { formItems, vehicleTypes } from "../constants";
import { FaSearch } from "react-icons/fa";

const BookingCarCard = () => {
  return (
      <div className=" border-orange-500 mx-auto  lg:w-[50%] w-[97%]">
         <div className="mx-auto ml-5">
         <h4 className="mt-14 text-base font-bold font-open text-gray-900 pb-4 ">
              <span className=" text-primary-green ">Select</span> Your Vehicle Types
            </h4>
            {/* lg:w-[530px] */}
            <div className="grid grid-cols-2 md:grid-cols-4  border-gray-600 lg:w-[90%] w-full  ">
              {vehicleTypes.map((items, index) => (
// lg:w-[118px] lg:h-[109px] md:w-36 md:h-24

                <div className="relative   w-[90%] h-[96%] bg-light-green rounded-lg  flex  items-center justify-center p-4" key={index}>
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
  )
}

export default BookingCarCard
