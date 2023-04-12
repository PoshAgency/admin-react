import React from "react";

const OrdersTableRow = ({ order, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img src={order?.image} alt={order?.title} width={40} />
      </td>
      <td>{order?.title}</td>
      <td>{`$${(order?.price * 0.8).toFixed(2)}`}</td>
      <td>{order?.quantity}</td>
      <td>{`$${(order?.price * 0.2).toFixed(2)}`}</td>
      <td>{`$${order?.total.toFixed(2)}`}</td>
    </tr>
  );
};

export default OrdersTableRow;
