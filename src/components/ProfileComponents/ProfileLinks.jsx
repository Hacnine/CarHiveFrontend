
import { useEffect } from "react";
import SummaryCard from "../../components/ProfileComponents/SummaryCard";


import { profile, profileLinks, summary } from "../../constants/index_four";
import ProfileCard from "../../components/ProfileComponents/ProfileCard";
import { useState } from "react";

const ProfileLinks = () => {
    const [activeLink, setActiveLink] = useState(0);
    const [title, setTitle] = useState('');
  return (
    <div className="">
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
  )
}

export default ProfileLinks
