import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCarFront } from "react-icons/bs";
import { GiHobbitDwelling } from "react-icons/gi";
import { carNames } from "../constants";
import CarCard from "./CarCard";

const ImageSlider = () => {

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setScrollingUp(false);
      } else {
        // Scrolling up
        setScrollingUp(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav  id="navbar"
    className="bg-blue-500 p-4 fixed w-full transition-transform duration-300"
   >
      <div className=''>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corrupti dolore magni doloribus laborum consectetur vel laudantium consequuntur qui, natus nisi temporibus odio repudiandae, dolor ut quasi aspernatur cupiditate placeat.
      </div>
    </nav>
  );
}




export default ImageSlider;
