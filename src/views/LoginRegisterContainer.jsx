import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";

import CommentForm from "../components/CommentForm";
import { newsForm } from "../constants/index_two";
import { PrimaryButton } from "../components";
import Header from "../components/Header";
import Footer from "./Footer";

import React from "react";
import Signin from "./Signin";
import SignUp from "./SignUp";

import { AppContext,useGlobalContext } from "../Context";


const LoginRegisterContainer = () => {

  const {signInBtn, setSignInBtn } = useGlobalContext(AppContext);

  return (
    <div className="relative">

      
      <Header bg={"bg-login h-[700px]"} />

      {signInBtn? <Signin />:<SignUp/>}
      
      

      <Footer />
    </div>
  );
};

export default LoginRegisterContainer;
