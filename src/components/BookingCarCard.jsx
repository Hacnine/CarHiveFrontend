import { formItems, vehicleTypes } from "../constants";

const BookingCarCard = () => {
  return (
    <div className=" border-orange-500 mx-auto  lg:w-[50%] w-[95%]">
      <div className="mx-auto ">
        <h4 className="  font-bold font-open text-slate-blue pl-2 lg:pt-0 pt-14  lg:pb-8 pb-6 text-lg">
          <span className=" text-primary-green ">Select</span> Your Vehicle
          Types
        </h4>
        {/* lg:w-[530px] */}
        <div className="grid grid-cols-2 md:grid-cols-4 pl-2  items-center  border-gray-600 lg:w-full w-full  ">
          {vehicleTypes.map((items, index) => (
            // lg:w-[118px] l g:h-[109px] md:w-36 md:h-24

            <div
              className="   w-[97%] h-[96%] bg-primary-green rounded-lg  flex  items-center justify-center flex-col  hover:scale-105 transition duration-300 font-bold text-sm sm:px-0 px-4"
              key={index}
            >
              <img
                src={items.image}
                alt={items.alt}
                className="object-cover  w-20"
              />
              <p className=" text-white-green -translate-y-3 ">
                {items.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingCarCard;
