import { Carousel } from "@material-tailwind/react";
import { testiOne } from "../assets";
import { testimonials } from "../constants/index_three";
import Title from "../components/Title";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="flex flex-wrap flex-row justify-center   items-center md:space-y-0 space-y-3 md:space-x-3 mx-auto border">

      {testimonials.map((items, index) => (
        <div className="relative border border-purple-500 " key={index}>
         
          <TestimonialCard items={items}/>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
