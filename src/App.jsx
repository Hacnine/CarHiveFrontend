import { Navigation } from "./components";
import Practise from "./views/Practise";
import './views/customcss.css'

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

function App() {
  return (
    <main>
      {/* <Practise/> */}
      <section>
        <Navigation />
      </section>
      <section>
      <Hero />

      </section>
      {/* <section>
        <RentingProcess/>
      </section>
      <section>
        <CarsForRental />
      </section>
      <section>
        <Pricing />
      </section> */}
      {/* <section>
        <Testimonials />
      </section>
      <section>
        <Posts />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section> */}
      
    </main>
  );
}

export default App;
