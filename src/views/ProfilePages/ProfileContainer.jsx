import { useState } from "react";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileComponents/ProfileCard";
import { profile, profileLinks } from "../../constants/index_four";
import Footer from "../Footer";
import Dashboard from "./Dashboard";
import RecentOrder from "./RecentOrder";
import Profile from "./Profile";
import Orders from "./Orders";


const ProfileContainer = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [title, setTitle] = useState('');

  const setData = (data) => {
    setTitle(data);
  };
  

  return (
    <div>
      <Header title={title} bg={ 'bg-profile'}/>
      <div className="wrapper my-20 ">
       
            <div className="flex items-start justify-between flex-col md:flex-row gap-8">
              <div className="md:w-[30%] bg-white-green rounded-md px-7 py-7 w-full ">
                {profile.map((items, index) => (
                  <div key={index} className="">
                    <ProfileCard {...items} />
                  </div>
                ))}

                <div className="mt-8  gap-1">
                  {profileLinks.map((item, index) => (
                     <a
                     key={index}
                     className={`flex items-center gap-2 justify-start border h-10 my-1 pl-2 rounded-md cursor-pointer ${activeLink === index ? 'bg-primary-green text-white-green' : ''}`}
                     onClick={() => 
                      {setActiveLink(index)
                      console.log(activeLink)}}>
                        
                     <item.Icon className={`${activeLink === index ? ' text-white-green' : 'text-primary-green'}`} />
                     <span className={`${activeLink === index ? ' text-white-green' : 'text-blue-gray-900'}font-semibold`} >{item.linkName}</span>
                   </a>
                  ))}
                </div>
              </div>

              <div className="md:w-[70%] w-full">
                <div>
                <Dashboard setData={setData}/>
                </div>

                <div>
                <Profile setData={setData}/>
                </div>

                <div>
                  <Orders setData={setData}/>
                </div>
               
              </div>
            
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProfileContainer
