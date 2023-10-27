
import React, { useEffect, useState } from 'react';
import { heroImage } from '../assets';

const ImageSlider = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topCrop = -scrollY * 0.4; // Adjust the factor to control the cropping


  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "" }}
    >
        <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform"
        style={{
          transform: `translate(-50%, calc(-50% + ${topCrop}px))`,
        }}
      >
        <img src={heroImage} className='w-full'/>
        
      </div>
    </div>
  );
};

export default ImageSlider;
