import { GiAirZigzag, GiCarDoor, GiSteeringWheel } from "react-icons/gi";
import { testiOne, testiThree,testiTwo } from "../assets";
import carPrevOne from "../assets/carPrevOne (1).svg";
import carPrevTwo from "../assets/carPrevOne (2).svg";
import carPrevThree from "../assets/carPrevOne (3).svg";
import carPrevFour from "../assets/carPrevOne (4).svg";
import carPrevFive from "../assets/carPrevOne (5).svg";
import { BsCarFront, BsFillCarFrontFill, BsFuelPumpDiesel, BsSpeedometer } from "react-icons/bs";
import {ImMakeGroup} from 'react-icons/im';
import { SiAirbrakedotio } from "react-icons/si";
import { FaCalendar } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";
import { HiOutlineCubeTransparent } from "react-icons/hi";
export const carSpecification = [

{Icon:GiAirZigzag, Feature:"AC", type:"Air Condition"},
{Icon:BsCarFront , Feature:"Body", type:""},
{Icon:BsFuelPumpDiesel , Feature:"Fuel Type", type:"BMW x3"},
{Icon:BsSpeedometer , Feature:"Mileage", type:"16km"},
{Icon:GiCarDoor , Feature:"Door", type:"4 Doors"},
{Icon:ImMakeGroup , Feature:"Make",  type:"Nissan"},
{Icon: GiSteeringWheel, Feature:"Drivetrian", type:"Front Wheel"},
{Icon:SiAirbrakedotio , Feature:"Brake", type:"Front Wheel"},
{Icon:FaCalendar , Feature:"Year", type:"2022"},
{Icon: PiEngineFill, Feature:"Engine", type:"Hybride"},
{Icon: BsFillCarFrontFill, Feature:"Gear Box", type:"Automatic"},
{Icon: BsFillCarFrontFill, Feature:"VIN", type:"45456444"},
]


export const previewCarCard = [
    {img:carPrevOne},
    {img:carPrevTwo},
    {img:carPrevThree},
    {img:carPrevFour},
    {img:carPrevFive},


]

export const numBerCard =[
    {num: '15425', title: 'Completed Orders'},
    {num: '8745', title: 'Happy Customers'},
    {num: '235', title:'Vehicles Fleet' },
    {num:'15' , title:'Years Experience' },

]

export const testimonials= [
    {img:"bg-testimonial-1", title:"Smooth and Cost-Effective Travel with CarHive" , comment:"CarHive has made my travels a breeze. I highly recommend them for your next adventure!", commentor: "Nabil Afnan"},
    {img:"bg-testimonial-2", title:" A Reliable Choice for Family Vacations" , comment:"I rented a car from CarHive for a family vacation, and it was a fantastic experience.  I wouldn't choose anyone else for my future trips.", commentor: "Sayed F."},
    {img:"bg-testimonial-3", title: "Trustworthy and Transparent, Highly Recommended", comment:"CarHive has been my go-to choice.No hidden fees, no surprises - just smooth journeys. I trust CarHive for all my travel needs.", commentor: "Hasan Jamil"},

]

export const contact_us = "LET’S Let's Begin with CarHive: Your Passport to Adventure CarHive is your key to unlocking new horizons and embarking on unforgettable journeys. We're more than just a car rental service; we're your trusted travel partner. With a wide range of vehicles to choose from, competitive prices, and a dedication to customer satisfaction, CarHive makes your travel dreams a reality. Let's start your next adventure together!";

export const booking_intro = "At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.";