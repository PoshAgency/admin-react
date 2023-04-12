import React from "react";
import { Table, Card } from "react-bootstrap";
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
        {orders.map((order, index) => {
          return <OrdersModalRow order={order} key={order.id} index={index} />;
        })}
      </tbody>
    </Table>
  );
};

export default OrdersModalTable;
