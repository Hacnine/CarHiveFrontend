import logo from "../assets/logo.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import youtubeIcon from "../assets/facebook-icon.svg";
import Title from "../components/Title";
import SocialNetwork from "../components/SocialNetwork";
import { contactInfo, newsIcons, quickLinks } from "../constants/index_two";

const Footer = () => {
  return <section>
    <div className="flex flex-wrap flex-col md:justify-between md:flex-row md:items-center items-start  space-y-12  bg-gray-900 pt-10 pb-5  wrapper ">
   
   <div className=" md:h-60  md:w-1/4 gap-2  ">
     <img src={logo} alt="logo" />
     <Title title={"Social Network"} textColor={"text-white"} border/>

     <div className="flex items-center  space-x-2 ">
     {newsIcons.map((items, index) =>(
       <div
       className={`w-8 h-8 flex items-center justify-center rounded bg-blue-gray-900 hover:bg-blue-gray-800 hover:transition-colors ease-in hover:duration-200`} key={index}
     >
       <items.Icon className="text-primary-green px-[2px]" />
     </div>
     ))}
     </div>

   </div>

   <div className="md:h-60 w-[75%] md:w-1/4">
   <Title title={"About Us"} border textColor={"text-white-green"} para={"Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense."}/>
   </div>

   <div className=" md:w-1/4 md:h-60  ">
   <Title title={"Contact Info"} textColor={"text-white-green"} contact={contactInfo} border/>
   </div>

   <div className="md:h-60">
   <Title title={"Quick Links"} textColor={"text-white-green"} links={quickLinks} border/>
   </div>

 </div>
 <div className="flex justify-between items-center w-full border-t border-gray-100/25 py-5 bg-gray-900 wrapper">
<p className="text-sm text-white-green">Copyright-2023 </p>
<p className="text-sm text-white-green">Terms & Conditions</p>
<p className="text-sm text-white-green">Privacy Policy</p>
</div>
  </section>
};

export default Footer;
