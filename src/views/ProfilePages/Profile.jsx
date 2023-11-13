import React, { useState } from "react";
import { useEffect } from "react";
import { newsForm, signUpForm } from "../../constants/index_two";
import CommentForm from "../../components/News/CommentForm";
import EditProfileForm from "../../components/ProfileComponents/EditProfileForm";
import Notifications from "./Notifications";
const Profile = ({ setData }) => {
  const [visible, setVisible] = useState("Profile");

  const handleClick = ({}) => {
    setVisible(true);
  };

  useEffect(() => {
    const dataToSend = "Profile";
    setData(dataToSend);
  }, []);
  return (
 
      <div className="px-7 py-7 bg-white-green rounded-md">
        <div className="flex items-center gap-14 ">
          {/* {visible?  */}
          <div>
            <p
              className={`${
                visible === "Profile"
                  ? "border-b-2 border-primary-green text-gray-900"
                  : "text-gray-600 border-b-2 border-transparent"
              } font-lato font-bold text-[17px] transition-all duration-300 ease-in-out cursor-pointer`}
              onClick={() => setVisible("Profile")}
            >
              Profile
            </p>
          </div>

          <div>
            <p
              className={`${
                visible === "Notifications"
                  ? "border-b-2 border-primary-green text-gray-900"
                  : "text-gray-600 border-b-2 border-transparent"
              } font-lato font-bold text-[17px] transition-all duration-700  ease-in-out cursor-pointer`}
              onClick={() => setVisible("Notifications")}
            >
              Notifications
            </p>
          </div>
         
        </div>
        
        <EditProfileForm visible={visible}/>
        <Notifications visible={visible}/>

      </div>

  );
};

export default Profile;
