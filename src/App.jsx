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
import { vehicleTypes } from "./constants";
import ImageSlider from "./components/ImageSlider";
import Headroom from "react-headroom";
import NewsPage from "./views/NewsPage";

function App() {
  return (
    <main className="">
      {/* <Practise/> */}
      {/* <ImageSlider/> */}

      <section className="">
      <NewsPage/>
      </section> 
    
        <section>
        <Navigation />
      </section>
      <section>
        <Hero />
      </section>

      <section className=" lg:mt-32 mt-[520px]">
        <RentingProcess />
      </section>

      <section className=" lg:mt-32 mt-20 wrapper">
        <CarsForRental />
      </section> 

      <section className=" lg:mt-32 mt-20 ">
        <Testimonials />
      </section>  

      <section className=" lg:mt-32 mt-20 wrapper">
        <Pricing />
      </section>

      <section className=" lg:mt-32 mt-20 wrapper">
        <News />
      </section>

     {/*  <section className=" lg:mt-32 mt-20 ">
        <Services />
      </section>

      <section className=" lg:mt-32 mt-20 wrapper">
        <FAQ />
      </section>  */}
      <section className=" lg:mt-32 mt-20 wrapper">
        <Contact />
      </section>

      <section className=" lg:mt-32 mt-20 ">
        <Footer />
      </section>
    </main>
  );
}

export default App;
