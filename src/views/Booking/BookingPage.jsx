import { BiArrowBack } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import BookingCars from "../../components/BookingList/BookingCars";
import { MdDelete } from "react-icons/md";
import Scrollbars from "react-custom-scrollbars-2";
import { useContext } from "react";
import { CartContext } from "./booking";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import BookingSummary from "../../components/BookingList/BookingSummary";
import Header from "../../components/Header";
import Footer from "../Footer";


const BookingContext = () => {
  const { data, totalAmount, totalItem } = useContext(CartContext);
  const goBack = useNavigate();
  const items = 4;
  const {clearCart} = useContext(CartContext);
  
  const page = null;
  if(data.length === 0){
   return(
    <>
        <div className="mt-10 wrapper flex items-start justify-center flex-col md:flex-row gap-4">
      <div className="md:w-[70%] w-full">
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
              {items}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-between bg-white-green py-5 px-4">
        <div className="ml-4 flex items-center gap-3">
          <input
            type="checkbox"
            name="checkbox"
            className="text-deep-green rounded focus:ring-0 cursor-pointer border-2 border-primary-green"
            id={``}
          />
          <p className=" text-sm ">
            SELECT All{" "}
            <span className="font-bold font-open">({data.length} ITEM(S))</span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-3 justify-end cursor-pointer text-red-600 " onClick={clearCart} >
          <MdDelete className=" w-6 h-6 " />
          <p className="text-sm">DELETE</p>
        </div>
      </div>
      </div>
      </div>

    </>
   )
  }

  return (
    <div>
      <Header title={'Cart'} bg={' bg-sevices'}/>
      <div className="mt-20 wrapper flex items-start justify-center flex-col md:flex-row gap-4">
      <div className="md:w-[70%] w-full bg-">
   

      <div className=" flex justify-between bg-white-green py-5 px-4">
        <div className="ml-4 flex items-center gap-3">
          <input
            type="checkbox"
            name="checkbox"
            className="text-deep-green rounded focus:ring-0 cursor-pointer border-2 border-primary-green"
            id={``}
          />
          <p className=" text-sm ">
            SELECT All{" "}
            <span className="font-bold font-open">({totalItem} ITEM(S))</span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-3 justify-end cursor-pointer text-red-600 " onClick={clearCart} >
          <MdDelete className=" w-6 h-6 " />
          <p className="text-sm">DELETE</p>
        </div>
      </div>

      <div className="font-sans container mx-auto my-8 pl-8 py-8 pr-2  bg-white-green rounded-md shadow-lg">
        <Scrollbars style={{ height: 400 }}>
          {data.map((itm, index)  => (
            <div className="pr-5 divide-y divide-primary-green border-b border-gray-300 mb-2" key={index}>
              <BookingCars {...itm} />
            </div>
          ))}
        </Scrollbars>
      </div>
      
      </div>
      <div className="md:w-[40%] w-full bg-white-green p-8 py-10 rounded space-y-3 ">
      <BookingSummary/> 
      <SecondaryButton className={'bg-primary-green w-full'} buttonName={'Proceed to Checkout'}/>

      </div>
    </div>
      <Footer/>
    </div>
   
  );
};

export default BookingContext;
