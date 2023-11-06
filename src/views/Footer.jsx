import logo from "../assets/logo-footer.svg";
import Title from "../components/Title";
import { contactInfo, newsIcons, quickLinks } from "../constants/index_two";

const Footer = () => {
  return (
    <section>
      <div className="flex flex-wrap flex-col md:justify-between md:flex-row md:items-center items-start  space-y-12  bg-gray-900 pt-10 pb-5  wrapper ">
        <div className="md:h-60 w-[75%] md:w-1/4">
          <div className=" flex items-center justify-center flex-col">
            <img
              src={logo}
              alt="site logo"
              className=" "
            />
            <div className="  -translate-y-10 h-9 sm:w-[192px] w-[190px] sm:rounded-2xl rounded-2xl shadow-md shadow-white-green"></div>
          </div>

          <Title
            title={"Let's Begin Your Journey With Carhive..."}
            textColor={"text-white-green"}
          />
        </div>

        <div className=" md:h-60  md:w-1/4 gap-2  ">
          <Title title={"Social Network"} textColor={"text-white"} border />

          <div className="flex items-center  space-x-1 ">
            {newsIcons.slice(0, 5).map((items, index) => (
              <div
                className={`w-10 h-10 flex items-center justify-center rounded bg-blue-gray-900 hover:bg-blue-gray-800 hover:transition-colors ease-in hover:duration-200`}
                key={index}
              >
                <items.Icon className="text-primary-green px-[2px]" />
              </div>
            ))}
          </div>
        </div>

        <div className=" md:w-1/4 md:h-60  ">
          <Title
            title={"Contact Info"}
            textColor={"text-white-green"}
            contact={contactInfo}
            border
          />
        </div>

        <div className="md:h-60">
          <Title
            title={"Quick Links"}
            textColor={"text-white-green"}
            links={quickLinks}
            border
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full border-t border-gray-100/25 py-5 bg-gray-900 wrapper">
        <p className="text-sm text-white-green">Copyright-2023 </p>
        <p className="text-sm text-white-green">Terms & Conditions</p>
        <p className="text-sm text-white-green">Privacy Policy</p>
      </div>
    </section>
  );
};

export default Footer;
