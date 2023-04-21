import React from "react";
import { useSelector } from "react-redux";

const OrderAddress = () => {
  const { selectedOrder } = useSelector((state) => state.orders);

  return (
    <div className="px-4">
      <h5>Shipping address</h5>
      <hr />
      <p className="mb-1">
        <span className="w-25 d-inline-block">Client:</span>
        <b>{selectedOrder?.deliveryAddress?.client}</b>
      </p>
      <p className="mb-1">
        <span className="w-25 d-inline-block">Email:</span>
        <b>{selectedOrder?.deliveryAddress?.email}</b>
      </p>
      <p className="mb-1">
        <span className="w-25 d-inline-block">Phone:</span>
        <b>{selectedOrder?.deliveryAddress?.phone}</b>
      </p>
      <p className="mb-1">
        <span className="w-25 d-inline-block">Address:</span>
        <b>{selectedOrder?.deliveryAddress?.address}</b>
      </p>
      <p className="mb-1">
        <span className="w-25 d-inline-block">Zip Code:</span>
        <b>{selectedOrder?.deliveryAddress?.zipCode}</b>
      </p>
      <p className="mb-1">
        <span className="w-25 d-inline-block">City:</span>
        <b>{selectedOrder?.deliveryAddress?.city}</b>
      </p>
      <p className="mb-1">
        <span className="w-25 d-inline-block">Country:</span>
        <b>{selectedOrder?.deliveryAddress?.country}</b>
      </p>
    </div>
  );
};

export default OrderAddress;
