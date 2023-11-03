
import { Navigation } from "../components";
import BookingCard from "../components/BookingCard";

const Hero = () => {
  

  return (
    <section className=" bg-hero-img bg-no-repeat flex items-center justify-center pb-52">
      {/* <img
        src={heroImage}
        alt="cover-image"
        className=" min-w-full min-h-screen flex-1 object-cover"
      /> */}
      <div className=" lg:top-36 top-38 flex items-center flex-col">
      <Navigation/>

        <div className=" wrapper  pb-10 ">
          <h1 className="head_text  text-white-green font-neon text-center">
          Looking for a <span className="text-primary-green"> vehicle</span>? You're at the right place. 
          </h1>
          
        </div>

       <BookingCard/>

        </div>
    </section>
  );
};

export default Hero;

{
  /*  */
}
