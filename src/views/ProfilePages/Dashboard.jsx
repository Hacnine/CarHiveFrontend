import { useEffect } from "react";
import SummaryCard from "../../components/ProfileComponents/SummaryCard";

import { profile, profileLinks, summary } from "../../constants/index_four";
import FavoriteCars from "./FavoriteCars";
import RecentOrder from "./RecentOrder";
import ProfileCard from "../../components/ProfileComponents/ProfileCard";
import { useState } from "react";
import ProfileLinks from "../../components/ProfileComponents/ProfileLinks";
import { AppContext, useGlobalContext } from "../../Context";

const Dashboard = () => {
  const { activeLink, setActiveLink, title, setTitle } =
    useGlobalContext(AppContext);
  useEffect(() => {
    const dataToSend = "Dashboard";

    setTitle(dataToSend);
  }, []);

  // const setData = (data) => {
  //   setTitle(data);
  // };

  return (
    // <div>
    <div className="flex items-start justify-between flex-col md:flex-row gap-8 wrapper">
      <div className="md:w-[30%] bg-white-green rounded-md px-7 py-7 w-full ">
        <ProfileLinks />
      </div>

      <div className="md:w-[70%] w-full">
        {/* {activeLink ===0? 
      <div>
      <Dashboard setData={setData}/>
      </div>
      : activeLink ===1? 
      <div>
      <Profile setTitle={setData}/>  
      </div>
      :activeLink ===2? 
      <div>
        <Orders setData={setData}/>
      </div>
      :null
      }
    </div> */}

        <div className="sm:space-y-5 gap-10  flex flex-col items-center justify-center ">
          <div className="grid sm:grid-cols-4 sm:mt-0 mt-14 grid-cols-2 iten w-full ">
            {summary.map((items, index) => (
              <div className="px-2 " key={index}>
                <SummaryCard {...items} />
              </div>
            ))}
          </div>
          <div className="w-full ml-4">
            <RecentOrder />
          </div>

          <div className="w-full ml-4">
            <FavoriteCars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
