import React from "react";
import { useParams } from "react-router-dom";

const Orders = () => {
  const { status } = useParams();

  return <div>Orders</div>;
};

export default Orders;
