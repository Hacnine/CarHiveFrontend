import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCarFront } from "react-icons/bs";
import { GiHobbitDwelling } from "react-icons/gi";
import { carNames } from "../constants";
import CarCard from "./CarCard";

const ImageSlider = () => {

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="">
      
      <Slider {...settings}>


      {carNames.map((item, index) => (
          <CarCard key={index} {...item} />
        ))}

        {/* <div className="p-2 border border-gray-300 rounded-lg w-fit">
          <GiHobbitDwelling className="w-100 h-50" />

          <div className="flex  justify-between mt-4 px-5">
            <h4 className=" text-slate-blue  font-semibold ">Name</h4>
            <div className="text-gray-400  flex">
              <span>
                <BsCarFront />
              </span>{" "}
              <span className="ml-1 text-xs">1</span>
            </div>
          </div>
        </div>

        <div className="p-2 border border-gray-300 rounded-lg w-fit">
          <GiHobbitDwelling className="w-100 h-50" />

          <div className="flex  justify-between mt-4 px-5">
            <h4 className=" text-slate-blue  font-semibold ">Name</h4>
            <div className="text-gray-400  flex">
              <span>
                <BsCarFront />
              </span>{" "}
              <span className="ml-1 text-xs">4</span>
            </div>
          </div>
        </div>{" "}

        <div className="p-2 border border-gray-300 rounded-lg w-fit">
          <GiHobbitDwelling className="w-100 h-50" />

          <div className="flex  justify-between mt-4 px-5">
            <h4 className=" text-slate-blue  font-semibold ">Name</h4>
            <div className="text-gray-400  flex">
              <span>
                <BsCarFront />
              </span>{" "}
              <span className="ml-1 text-xs">4</span>
            </div>
          </div>
        </div>{" "}

        <div className="p-2 border border-gray-300 rounded-lg w-fit">
          <GiHobbitDwelling className="w-100 h-50" />

          <div className="flex  justify-between mt-4 px-5">
            <h4 className=" text-slate-blue  font-semibold ">Name</h4>
            <div className="text-gray-400  flex">
              <span>
                <BsCarFront />
              </span>{" "}
              <span className="ml-1 text-xs">4</span>
            </div>
          </div>
        </div>{" "}

        <div className="p-2 border border-gray-300 rounded-lg w-fit">
          <GiHobbitDwelling className="w-100 h-50" />

          <div className="flex  justify-between mt-4 px-5">
            <h4 className=" text-slate-blue  font-semibold ">Name</h4>
            <div className="text-gray-400  flex">
              <span>
                <BsCarFront />
              </span>{" "}
              <span className="ml-1 text-xs">5</span>
            </div>
          </div> */}
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
