import React from "react";
import { Table } from "react-bootstrap";
import OrdersModalRow from "./OrdersModalRow";

const OrdersModalTable = ({ orders }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th className="">#</th>
          <th>
            <strong>Image</strong>
          </th>
          <th>
            <strong>Product</strong>
          </th>
          <th>
            <strong>Price</strong>
          </th>
          <th>
            <strong>Quantity</strong>
          </th>
          <th>
            <strong>Tax</strong>
          </th>
          <th>
            <strong>Total</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <OrdersModalRow order={order} index={index} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default OrdersModalTable;
