
import SummaryCard from "../../components/ProfileComponents/SummaryCard";

import { summary } from "../../constants/index_four";
import FavoriteCars from "./FavoriteCars";
import RecentOrder from "./RecentOrder";

const Dashboard = () => {
  return (
    // <div>
    //   <div>
    <div className="sm:space-y-5 gap-10  flex flex-col items-center justify-center ">
      <div className="grid grid-cols-4 iten w-full ">
        {summary.map((items, index) => (
          <div className="px-2 ">
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
