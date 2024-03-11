import {BrowserRouter, Link, Routes, Route } from "react-router-dom";
import CarsForRentalPage from "./views/CarsForRentalPage";
import NewsPage from "./views/NewsPage";
import SingleCarPage from "./views/SingleCarPage";
import ContactPage from "./views/ContactPage";
import Dashboard from "./views/ProfilePages/Dashboard";
import FavoriteCars from "./views/ProfilePages/FavoriteCars";
import Orders from "./views/ProfilePages/Orders";
import Profile from "./views/ProfilePages/Profile";
import Home from "./views/HomePage/Home";
import Booking from "./views/Booking";
import AboutUs from "./views/AboutUs";
import Footer from "./views/Footer";
import LoginRegisterContainer from "./views/SignInUp/LoginRegisterContainer";
import ErrorPage from "./views/ErrorPage";
import Rental from "./views/RentalPage/Rental";
import { AppContext, useGlobalContext } from "./Context";

const LinksList = () => {
  const { rentalLink } = useGlobalContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cars" element={<CarsForRentalPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/singecar" element={<SingleCarPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/account/dashboard" element={<Dashboard />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/FavoriteCars" element={<FavoriteCars />} />
        <Route path="/account/Profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<LoginRegisterContainer />} />
        <Route path="/signup" element={<LoginRegisterContainer />} />
        <Route path={rentalLink} element={<Rental />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default LinksList;
