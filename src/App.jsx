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

function App() {
  return (
    <main className="">
      {/* <Practise/> */}
      {/* <ImageSlider/> */}
      

      {/* <section className="">
      <NewsPage/>
      </section> */}
      <Booking/>
    
      {/* <section>
        <Navigation />
      </section>
      <section>
        <Hero />
      </section>

      <section className=" lg:mt-32 mt-[620px]">
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

     <section className=" mt-10 ">
        <Services />
      </section>
  
      <section className=" lg:mt-32 mt-20 ">
        <Contact />
      </section>

      
      <section className=" lg:mt-32 mt-20 wrapper">
        <FAQ />
      </section>

      <section className=" lg:mt-32 mt-20 ">
        <Footer />
      </section> */}
    </main>
  );
}

export default App;
