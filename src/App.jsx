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
import Headroom from "react-headroom";

function App() {
  return (
    <main className="">
      {/* <Practise/> */}
      {/* <ImageSlider/> */}
     
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>

   
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

      <section className=" lg:mt-32 mt-20 wrapper">
        <Testimonials />
      </section> 

      <section className=" lg:mt-32 mt-20 wrapper">
        <Pricing />
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
