
import { heroImage } from "../assets";
import BookingCard from "../components/BookingCard";

const Hero = () => {
  

  return (
    <section className=" relative flex items-center justify-center">
      <img
        src={heroImage}
        alt="cover-image"
        className=" min-w-full min-h-screen flex-1 object-cover"
      />
      <div className="absolute lg:top-36 top-38 flex items-center flex-col">
        <div className=" wrapper min-h-[444px] ">
          <h1 className="head_text  text-white-green font-neon text-center">
          Looking for a <span className="text-primary-green"> vehicle</span>? You're at the right place. 
          </h1>
          
        </div>

       <>
       <BookingCard/>
       </>

        </div>
    </section>
  );
};

export default Hero;

{
  /*  */
}
