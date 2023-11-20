import { createContext } from "react";
import BookingContext from "../../components/BookingList/BookingContext";
import { products } from "../../data/products";
import { useReducer } from "react";
// import {reducer} from './reducer';
const initialState = {
  data:products,
  totalAmount:0,
  totalItem:0
};

export const reducer = (state, action)=>{
  return state;
};

export const CartContext = createContext()
const Booking = () => {
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <CartContext.Provider value={{...state}}>
    <BookingContext/>
    </CartContext.Provider>
    );
};

export default Booking;
