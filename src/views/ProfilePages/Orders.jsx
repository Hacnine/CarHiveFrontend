import React from "react";
import { useEffect } from "react";
import { cancelledOrders, completedOrders, scheduledOrders } from "../../constants/index_four";
import OrderInfoCard from "../../components/ProfileComponents/OrderInfoCard";
import OrderContainer from "../../components/ProfileComponents/OrderContainer";

const Orders = ({ setData }) => {
  useEffect(() => {
    const dataToSend = "Orders";
    setData(dataToSend);
  }, []);

  return (
    <div>
      <div>
        <OrderContainer title={"Scheduled Orders"} orders={scheduledOrders} />
      </div>

      <div>
        <OrderContainer title={"Completed Orders"} orders={completedOrders} />
      </div>

      <div>
        <OrderContainer title={"Cancelled Orders"} orders={cancelledOrders} />
      </div>
    </div>
  );
};

export default Orders;
