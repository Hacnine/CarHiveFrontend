import { FaBeer, Fa500Px, FaAccusoft, FaRoad, FaTrophy } from "react-icons/fa";

import { AiFillHome, AiTwotoneCar, AiTwotoneHeart } from "react-icons/ai";
import { RiAccountPinCircleFill, RiSecurePaymentFill } from "react-icons/ri";
import {
  GiCarDoor,
  GiHobbitDoor,
  GiDoorway,
  GiTreeDoor,
  GiDoorRingHandle,
} from "react-icons/gi";
import { SiPowerpages } from "react-icons/si";
import { HiNewspaper } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";
import busIcon from "../assets/bus-icon.svg";

import van from "../assets/van.svg";
import bus from "../assets/bus.svg";
import carsports from "../assets/carsports.svg";
import car from "../assets/car.svg";
import { MdOutlineAccountBox } from "react-icons/md";
import { PiBagSimpleBold } from "react-icons/pi";
import { BsCarFront, BsFillMapFill, BsFillPinMapFill } from "react-icons/bs";

import { HiLocationMarker } from "react-icons/hi";
import { TbCalendarEvent } from "react-icons/tb";
import { carOne, carThree, carTwo } from "../assets";

export const reviews = [
  {
    image: carOne,
    titlle: "Excellent Service! Car Rent Service!",
    comment:
      "Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.",
    userName: "Kanesha Keyton",
  },
  {
    image: carOne,
    titlle: "Amazing Experience!",
    comment:
      "Backed by a consortium of seasoned professionals, Carhive stands as the property management solution you can rely on. With a wealth of expertise in the real estate industry, we deliver swift, dependable, and secure property management services.",
    userName: "Isac Samuel",
  },
  {
    image: carOne,
    titlle: "Excellent Service! Car Rent Service!",
    comment:
      "We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.",
    userName: "Jovan Reels",
  },
];

export const carNames = [
  {
    name: "BMW X3",
    imgSrc: carOne,
    Icon: AiTwotoneHeart,
    number: 74,
    price: "$320",
    summary: [
      {
        number: "5",
        Icon: MdOutlineAccountBox,
      },
      {
        number: "2",
        Icon: PiBagSimpleBold,
      },
      {
        number: "4",
        Icon: GiCarDoor,
      },
      {
        number: "Sedan",
        Icon: BsCarFront,
      },
      // {
      //   number: "",
      //   Icon: GiHobbitDoor,
      // },
      // {
      //   number: "",
      //   Icon: GiDoorway,
      // },
      // {
      //   number: "",
      //   Icon: GiDoorRingHandle,
      // },
      // {
      //   number: "",
      //   Icon: GiTreeDoor,
      // },
    ],
  },
  {
    name: "BMW M2",
    imgSrc: carTwo,
    Icon: AiTwotoneHeart,
    number: 94,
    price: "$367",

    summary: [
      {
        number: "5",
        Icon: MdOutlineAccountBox,
      },
      {
        number: "2",
        Icon: PiBagSimpleBold,
      },
      {
        number: "4",
        Icon: GiCarDoor,
      },
      {
        number: "Sedan",
        Icon: BsCarFront,
      },
    ],
  },
  {
    name: "Ford Explorer",
    imgSrc: carThree,
    Icon: AiTwotoneHeart,
    number: 64,
    price: "$230",

    summary: [
      {
        number: "5",
        Icon: MdOutlineAccountBox,
      },
      {
        number: "2",
        Icon: PiBagSimpleBold,
      },
      {
        number: "4",
        Icon: GiCarDoor,
      },
      {
        number: "Sedan",
        Icon: BsCarFront,
      },
    ],
  },
  {
    name: "Ford Explorer",
    imgSrc: carThree,
    Icon: AiTwotoneHeart,
    number: 64,
    price: "$230",

    summary: [
      {
        number: "5",
        Icon: MdOutlineAccountBox,
      },
      {
        number: "2",
        Icon: PiBagSimpleBold,
      },
      {
        number: "4",
        Icon: GiCarDoor,
      },
      {
        number: "Sedan",
        Icon: BsCarFront,
      },
    ],
  },
];
export const vehicleTypes = [
  {
    type: "Car",
    image: car,
    alt: "car-icon",
  },
  {
    type: "Bus",
    image: bus,
    alt: "bus-icon",
  },
  {
    type: "Prestige",
    image: carsports,
    alt: "carsports-icon",
  },
  {
    type: "Van",
    image: van,
    alt: "van-icon",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#booking", label: "Booking" },
  { href: "#contact-us", label: "Contact Us" },
  { href: "#cars", label: "Cars" },
  { href: "#services", label: "Services" },
];
export const data = [
  {
    icons: FaBeer,
  },
  {
    icons: Fa500Px,
  },
  {
    icons: FaAccusoft,
  },
];

export const navLinks2 = [
  { title: "Home", icon: AiFillHome, links: [{ name: "", link: "" }] },
  { title: "Booking", icon: TbBrandBooking, links: [{ name: "", link: "" }] },
  {
    title: "Account",
    icon: RiAccountPinCircleFill,
    links: [
      { name: "Dashboard", link: "/" },
      { name: "Profile", link: "/" },
      { name: "Orders", link: "/" },
      { name: "Favorites", link: "/" },
    ],
  },

  {
    title: "Pages",
    icon: SiPowerpages,
    links: [
      { name: "About Us", link: "/" },
      { name: "Contact", link: "/" },
      { name: "Login", link: "/" },
      { name: "Register", link: "/" },
      { name: "Page 404", link: "/" },
    ],
  },

  {
    title: "News",
    icon: HiNewspaper,

    links: [
      { name: "Standard", link: "/" },
      { name: "Grid", link: "/" },
    ],
  },

  {
    title: "Cars",
    icon: AiTwotoneCar,
    links: [
      // { name: "", link: "" },
      { name: "Cars List", link: "/" },
      { name: "Cars Single", link: "/" },
    ],
  },
];

const locationIcon = <HiLocationMarker />;
const calendarIcon = <TbCalendarEvent />;
export const formItems = [
  {
    label: "Pick Up Location",
    placeholder: "Enter your pickup location",
    icon: locationIcon,
  },
  {
    label: "Drop Off Location",
    placeholder: "Enter your dropoff location",
    icon: locationIcon,
  },

  {
    label: "Pick Up Date & Time",
    placeholder: "Select a date and time.",
    icon: calendarIcon,
  },
  {
    label: "Drop Up Date & Time",
    placeholder: "Select dates and time.",
    icon: calendarIcon,
  },
];

export const steps = [
  {
    title: "Choose a vehicle",
    description:
      "Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.",
  },
  {
    title: "Pick location & date",
    description:
      "Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.",
  },
  {
    title: "Book your car",
    description:
      "Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.",
  },
  {
    title: "Sit back & relax",
    description:
      "Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled comfort.",
  },
];

export const essentialPlanOptions = [
  "Economy and compact car options.",
  "Limited mileage.",
  "Basic insurance coverage.",
  "No additional services included.",
];

export const recommendedPlanOptions = [
  "Mid-size and full-size car options",
  "Extended mileage allowance.",
  "Comprehensive insurance coverage.",
  "Optional add-ons like GPS, child seats, and roadside assistance for an extra fee.",
];

export const proPlanOptions = [
  "Premium and luxury car options.",
  "Unlimited mileage.",
  "Full insurance coverage with zero deductible",
  "Complimentary add-ons such as GPS.",
  "Priority pickup and drop-off service.",
  "Access to loyalty rewards program for future discounts.  ",
];

export const services = [
  { title: "Let's Begin Your Adventure" },
  {
    description:
      "Welcome to the start of your adventure on wheels! At our car rental service, we're excited to kickstart your journey. Whether you're planning a road trip, a weekend getaway, or simply need reliable transportation, we're here to provide you with top-notch vehicles and a hassle-free experience. Let's begin your journey today and explore the world with the freedom of the open road.",
  },
];

export const serviceCard = [
  {
    title: "First Class Services",
    description:
      "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.",
    Icon:FaTrophy,
  },
  {
    title: "24/7 Road Assistance ",
    description:
      "Reliable support when you need it most, keeping you on the move with confidence and peace of mind.",
    Icon:FaRoad,
  },
  {
    title: "Free Pick-Up & Drop-Off",
    description:
      "Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.",
  Icon:BsFillPinMapFill,
  },
  {
    title: "Secured Payment",
    description:
      "Our secured payment services ensure your financial transactions are always safe and protected.",
    Icon:RiSecurePaymentFill,
  },
];
