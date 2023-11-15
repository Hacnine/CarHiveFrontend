import { Navigation } from "./components";
import Practise from "./views/Practise";
import "./views/customcss.css";

import {
  CarsForRental,
  Contact,
  FAQ,
  Hero,
  News,
  Pricing,
  RentingProcess,
  Services,
  Testimonials,
  Footer,
} from "./views";
import NewsPage from "./views/NewsPage";
import Booking from "./views/Booking";
import SingleCarPage from "./views/SingleCarPage";
import CarsForRentalPage from "./views/CarsForRentalPage";
import { Slider } from "@material-tailwind/react";
import ContactPage from "./views/ContactPage";
import Signin from "./views/SignInUp/Signin";
import Mainp from "./views/Practise/Mainp";
import LoginRegisterContainer from "./views/SignInUp/LoginRegisterContainer";


import { useState, useContext } from "react";
import { AppContext,useGlobalContext } from "./Context";
import AboutUs from "./views/AboutUs";
import Dashboard from "./views/ProfilePages/Dashboard";
import ProfileContainer from "./views/ProfilePages/ProfileContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinksList from "./LinksList";

function App() {



  return (
    // <Mainp>
    <LinksList></LinksList>
      
    // </Mainp>
    // <BrowserRouter>

    
      
      
    //   {/* <SingleCarPage />  */}
      
    //         {/* <ProfileContainer/> */}
      
    //         {/* <AboutUs/> */}
         
    //         {/* <LoginRegisterContainer/> */}
    //         {/* <Signin/> */}
    //         {/* <CarsForRentalPage />
    //         <ContactPage/> */}
      
    //         {/* <Practise/> */}
    //         {/* <ImageSlider /> */}
      
    //         {/* <section className="">
    //         <NewsPage/>
    //         </section>
    //         <Booking/> */}
            
    //         {/* <SingleCarPage /> */}
           
    // </BrowserRouter>
  );
}

export default App;
