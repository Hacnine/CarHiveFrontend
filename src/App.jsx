import { Navigation } from "./components";
import Practise from "./views/Practise";
import "./views/customcss.css";

import {
  CarsForRental,
  Contact,
  FAQ,
  Hero,
  Posts,
  Pricing,
  RentingProcess,
  Services,
  Testimonials,
  Footer,
} from "./views";
import { vehicleTypes } from "./constants";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <main className="relative">
      {/* <Practise/> */}
      {/* <ImageSlider/> */}
     
   
              
      <section>
        <Navigation />
      </section>
      <section>
        <Hero />
      </section>

     <section className=" lg:mt-32 mt-[520px]">
        <RentingProcess/>
      </section>

       <section className=" lg:mt-32 mt-20 wrapper">
        <CarsForRental />
      </section>
      <section className=" lg:mt-32 mt-20 wrapper">

        <Pricing />
      </section>

      <section className=" lg:mt-32 mt-20 wrapper">
        <Testimonials />
      </section>

      <section className=" lg:mt-32 mt-20 wrapper">
        <Posts />
      </section>

      <section className=" lg:mt-32 mt-20 wrapper">
        <Services />
      </section>

      <section className=" lg:mt-32 mt-20 wrapper">

        <FAQ />
      </section>

      <section className=" lg:mt-32 mt-20 wrapper">
        <Contact />
      </section>

      <section className=" lg:mt-32 mt-20 wrapper">
        <Footer />
      </section>
    </main>
  );
}

export default App;
