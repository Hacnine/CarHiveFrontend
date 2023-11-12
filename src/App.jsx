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
import ImageSlider from "./components/ImageSlider";
import NewsPage from "./views/NewsPage";
import Booking from "./views/Booking";
import SingleCarPage from "./views/SingleCarPage";
import CarsForRentalPage from "./views/CarsForRentalPage";
import { Slider } from "@material-tailwind/react";
import ContactPage from "./views/ContactPage";
import Signin from "./views/Signin";
import LoginRegisterContainer from "./views/LoginRegisterContainer";


import { useState, useContext } from "react";
import { AppContext,useGlobalContext } from "./Context";
import AboutUs from "./views/AboutUs";
import Dashboard from "./views/ProfilePages/Dashboard";
import ProfileContainer from "./views/ProfilePages/ProfileContainer";

function App() {

  const {signInBtn, setSignInBtn } = useGlobalContext(AppContext);


  return (
    <main className="">
      
{/* <SingleCarPage />  */}

      <ProfileContainer/>

      {/* <AboutUs/> */}
   
      {/* <LoginRegisterContainer/> */}
      {/* <Signin/> */}
      {/* <CarsForRentalPage />
      <ContactPage/> */}

      {/* <Practise/> */}
      {/* <ImageSlider /> */}

      {/* <section className="">
      <NewsPage/>
      </section>
      <Booking/> */}
      {/* <SingleCarPage /> */}

    {/*   <section className="">
        <Hero />
      </section>

      <section className=" lg:mt-24 mt-[620px]">
        <RentingProcess />
      </section>

      <section className=" lg:mt-24 mt-20 wrapper">
        <CarsForRental />
      </section>

      <section className=" lg:mt-24 mt-20 ">
        <Testimonials />
      </section>  

      <section className=" lg:mt-24 mt-20 wrapper">
        <Pricing />
      </section>

      <section className=" lg:mt-24 mt-20 wrapper">
        <News />
      </section>  

     <section className=" mt-10 ">
        <Services />
      </section>
  
      <section className=" lg:mt-24 mt-20 ">
        <Contact />
      </section>

      
      <section className=" lg:mt-24 mt-20 wrapper">
        <FAQ />
      </section>

     

      <section className=" lg:mt-24 mt-20 ">
        <Footer />
      </section>  */}
    </main>
  );
}

export default App;
