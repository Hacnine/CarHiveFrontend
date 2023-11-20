import { BiArrowBack } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import BookingCars from "../../components/BookingList/BookingCars";
import { MdDelete } from "react-icons/md";
import Scrollbars from "react-custom-scrollbars-2";
import { useContext } from "react";
import { CartContext } from "../../views/Booking/booking";

const BookingContext = () => {
  const { data, totalAmount, totalItem } = useContext(CartContext);
  const goBack = useNavigate();
  const items = 4;
  return (
    <div className="mt-10 wrapper">
      <div className=" ">
        <div className="flex items-center justify-between border-b border-gray-400 pb-3">
          <div className="flex items-center justify-center">
            <BiArrowBack
              className=" text-gray-600 hover:cursor-pointer h-5 w-5"
              onClick={() => goBack("/")}
            />
            <p className=" text-gray-600 ml-4">Continue Shopping</p>
          </div>

          <div className="relative">
            <TbBrandBooking className="text-orange-900 w-8 h-8" />
            <span
              className="absolute bg-blue-200 rounded-full w-5 h-5 text-sm flex items-center justify-center -top-2 -right-1 text-white-green"
              id="total_items"
            >
              {items}{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-between">
        <div className="ml-4 flex items-center gap-3">
          <input
            type="checkbox"
            name="checkbox"
            className="text-deep-green rounded focus:ring-0 cursor-pointer border-2 border-primary-green"
            id={``}
          />
          <p className=" text-sm ">
            SELECT All{" "}
            <span className="font-bold font-open">({items} ITEM(S))</span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-3 justify-end cursor-pointer">
          <MdDelete className="text-gray-400 w-6 h-6 " />
          <p className="text-gray-400 text-sm">DELETE</p>
        </div>
      </div>

      <div className="font-sans container mx-auto my-8 pl-8 py-8 pr-2  bg-white-green rounded-md shadow-lg">
        <Scrollbars style={{ height: 400 }}>
          {data.map((itm, index) => (
            <div className="pr-5" key={index}>
              <BookingCars {...itm} />
            </div>
          ))}
        </Scrollbars>
      </div>
      <button className="bg-blue-500 text-white px-6 py-2 rounded">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default BookingContext;
