
import { useEffect } from "react";
import SummaryCard from "../../components/ProfileComponents/SummaryCard";

import { summary } from "../../constants/index_four";
import FavoriteCars from "./FavoriteCars";
import RecentOrder from "./RecentOrder";

const Dashboard = ({setData}) => {

  useEffect(() => {
    const dataToSend = 'Dashboard';
    
    setData(dataToSend);
  }, []);

  return (
    
    // <div>
    //   <div>
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
    //   </div>
    // </div>
  );
};

export default Dashboard;
