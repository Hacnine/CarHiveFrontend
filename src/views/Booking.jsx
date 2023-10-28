import { Navigation } from "../components";
import BookingCard from "../components/BookingCard";
import Header from "../components/Header";

const Booking = () => {
  return (
    <div className="mx-auto flex items-center justify-center">
      <Header title={"Booking"}/>
      <BookingCard />
    </div>
  );
};

export default Booking;
