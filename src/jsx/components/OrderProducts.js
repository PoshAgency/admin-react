import React from "react";
import { useSelector } from "react-redux";
import OrdersModalTable from "./table/OrdersModalTable/OrdersModalTable";

const OrderProducts = () => {
  const { selectedOrder } = useSelector((state) => state.orders);

  return (
    <div>
      <OrdersModalTable orders={selectedOrder?.products} />
    </div>
  );
};

export default OrderProducts;
