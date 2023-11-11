import React from "react";
import { orders } from "../../constants/index_four";
import OrderInfoCard from "../../components/ProfileComponents/OrderInfoCard";

const RecentOrder = () => {
  return (
    <div className="bg-white-green px-7 py-7 rounded-md">
      <h4 className=" text-slate-blue text-2xl font-open font-bold">
        Recent Orders
      </h4>

      {orders.map((items, index) => (
        <div className="mt-3">
            <OrderInfoCard index={index} {...items} />
        </div>
      ))}
    </div>
  );
};

export default RecentOrder;
