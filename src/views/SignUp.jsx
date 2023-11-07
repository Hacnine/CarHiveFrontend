import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { newsForm, signUpForm } from "../constants/index_two";
import CommentForm from "../components/CommentForm";
import { PrimaryButton } from "../components";

const SignUp = () => {
  const googleLogo = (
    <AiFillGoogleCircle className="text-white-green w-6 h-6" />
  );
  const facebookLogo = <BsFacebook className="text-white-green w-6 h-6" />;

  return (
    <div className="w-[380px]  rounded-md shadow-md absolute left-0 right-0  top-20 bottom-0  h-[500px] px-12  pt-12 mx-auto bg-white-green">
        <div className="flex justify-between items-center mb-3">

        <PrimaryButton
          buttonName={"Sign In"}
          className={"bg-primary-green w-full font-extrabold"}
          shadow
          scale
        />
        
        <PrimaryButton
          buttonName={"Sign Up"}
          className={"ring-2 ring-inset   ring-blue-500 w-full font-extrabold"}
          textColor={'text-blue-500 '}
          shadow
          scale
        />
   
       


        </div>

        <div className=" flex items-center justify-center gap-2">
          {signUpForm.slice(0, 2).map((items, index) => (
            <div key={index} className="w-1/2">
              <CommentForm type={items.type} label={items.label} />
            </div>
          ))}

          
        </div>
        <div>
        {signUpForm.slice(2, 4).map((items, index) => (
            <div key={index} className="m">
              <CommentForm type={items.type} label={items.label} />
            </div>
          ))}
        </div>

        <div className=" flex items-center justify-center gap-2 mb-4">
          {signUpForm.slice(4, 6).map((items, index) => (
            <div key={index} className="w-1/2">
              <CommentForm type={items.type} label={items.label} />
            </div>
          ))}

          
        </div>

        <PrimaryButton
          buttonName={"Sign Up"}
          className={"bg-primary-green w-full  font-extrabold"}
          shadow
          scale
        />

        <div className="mt-3 flex items-center justify-center relative  mb-3">
          <div className="text-slate-blue font-open text center bg-white-green  px-3  text-[11px] font-bold  z-10">
            or sign up with
          </div>
          <div className="absolute left-0  w-full bg-gray-400 p-[.5px]"></div>
        </div>

        <div className="flex items-center justify-center gap-5">
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

export default SignUp;
