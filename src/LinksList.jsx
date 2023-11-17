import { BrowserRouter, Link, Routes, Route, Router } from "react-router-dom";

import App from "./App";
import CarsForRentalPage from "./views/CarsForRentalPage";
import NewsPage from "./views/NewsPage";
import SingleCarPage from "./views/SingleCarPage";
import ContactPage from "./views/ContactPage";
import Dashboard from "./views/ProfilePages/Dashboard";
import FavoriteCars from "./views/ProfilePages/FavoriteCars";
import Orders from "./views/ProfilePages/Orders";
import Profile from "./views/ProfilePages/Profile";
import ProfileContainer from "./views/ProfilePages/ProfileContainer";
import Home from "./views/HomePage/Home";
import Booking from "./views/Booking";
import AboutUs from "./views/AboutUs";
import Signin from "./views/SignInUp/Signin";
import SignUp from "./views/SignInUp/SignUp";
import Page404 from "./views/Page404";
import LoginRegisterContainer from "./views/SignInUp/LoginRegisterContainer";
import ErrorPage from "./views/ErrorPage";
import Header from "./components/Header";

const LinksList = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/home" element={<Home/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/cars" element={<CarsForRentalPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/singecar" element={<SingleCarPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/account" element={<ProfileContainer/>} >
          <Route path="/account/dashboard" element={<Dashboard/>}/>
          <Route path="/account/profile" element={<Profile/>}/>
          <Route path="/account/orders" element={<Orders/>}/>

        </Route>
        <Route path="/account/orders" element={<Orders/>} />
        <Route path="/account/FavoriteCars" element={<FavoriteCars/>} />
        <Route path="/account/Profile" element={<Profile/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/signin" element={<LoginRegisterContainer/>} />
        <Route path="/signup" element={<LoginRegisterContainer/>} />
        {/* <Route path="/" element={<App/>} /> */}
        {/* <Route path="/" element={<App/>} /> */}
        {/* <Route path="/" element={<App/>} /> */}

        {/* <Route path="/" element={<App/>} /> */}
        {/* <Route path="/" element={<App/>} /> */}
        <Route path="*" element={<ErrorPage/>} />
        
      </Routes>
  )
}

export default LinksList
