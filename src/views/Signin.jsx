import { createContext, useContext, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import CommentForm from "../components/CommentForm";
import { newsForm } from "../constants/index_two";
import { PrimaryButton } from "../components";


const GlobalContext = createContext();

const Signin = ({ open, onClose, children }) => {
  const googleLogo = (
    <AiFillGoogleCircle className="text-white-green w-6 h-6" />
  );
  const facebookLogo = <BsFacebook className="text-white-green w-6 h-6" />;

  const [signUpVisible, setsignUpVisible] = useState(false);

  const [globalValue, setGlobalValue] = useState('This is a global value');


  return (
    // top-36
    // <GlobalContext.Provider value={{ globalValue, setGlobalValue }}>

    <div className="w-[380px]  rounded-md shadow-md absolute left-0 right-0  top-20 bottom-0  h-[500px] px-12 pt-12 mx-auto bg-white-green">
      
      <div className="flex justify-between items-center mb-3">
         <PrimaryButton
          buttonName={"Sign In"}
          className={"bg-primary-green w-full font-extrabold"}
          shadow
          scale
        />
        <PrimaryButton
          buttonName={"Sign Up"}
          className={"ring-2 ring-inset   ring-slate-blue w-full font-extrabold"}
          textColor={'text-slate-blue '}
          shadow
          scale
        />
   
      


        </div>

      {newsForm.slice(0, 2).map((items, index) => (
        <div key={index} className=" w-full">
          <CommentForm type={items.type} label={items.label} />
        </div>
      ))}

      <PrimaryButton
        buttonName={"Sign In"}
        className={"bg-primary-green w-full font-extrabold"}
        shadow
        scale
      />

      <div className="mt-6 flex items-center justify-center relative  pb-7">
        <div className="text-slate-blue font-open text center bg-white-green  px-3  text-[11px] font-bold  z-10">
          or continue with
        </div>
        <div className="absolute left-0  w-full bg-gray-400 p-[.5px]"></div>
      </div>

      <div className=" space-y-3">
        <PrimaryButton
          buttonName={"Google"}
          className={"bg-red-400 w-full px-7"}
          icon={googleLogo}
          shadow
          scale
        />

        <PrimaryButton
          buttonName={"Facebook"}
          className={"bg-blue-600 w-full"}
          icon={facebookLogo}
          shadow
          scale
        />
      </div>
  
    </div>
  );
};

export default Signin;
