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
import { useState } from "react";
import CarsForRentalPage from "./views/CarsForRentalPage";
import { Slider } from "@material-tailwind/react";

function App() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <main className="">
    
      <CarsForRentalPage />

      {/* <Practise/> */}
      {/* <ImageSlider /> */}

      {/* <section className="">
      <NewsPage/>
      </section>
      <Booking/> */}
      {/* <SingleCarPage /> */}

      {/* <section className="">
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
