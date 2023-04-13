import React from "react";
import { useSelector } from "react-redux";

const OrderTimeline = () => {
  const { selectedOrder } = useSelector((state) => state.orders);

  return (
    <div className="px-4">
      <h4>Order timeline</h4>
      <hr />
      <p className="mb-1">
        <span className="w-25 d-inline-block">Created:</span>
        <b>{selectedOrder?.createdAt}</b>
      </p>
    </div>
  );
};

export default OrderTimeline;
