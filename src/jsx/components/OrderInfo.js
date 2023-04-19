import React from "react";
import { useSelector } from "react-redux";

const formatPrice = (value) => `$${value.toFixed(2)}`;

const OrderInfo = () => {
  const { selectedOrder } = useSelector((state) => state.orders);

  return (
    <div className="px-4">
      <h4>Order Info</h4>
      <hr />
      {/* FIRST SECTION - CLIENT INFO */}
      <li className="d-flex justify-content-between border-bottom">
        <span className="pb-1">Order ID</span>
        <span className="pb-1">
          <b>{selectedOrder?.id}</b>
        </span>
      </li>
      <li className="d-flex justify-content-between border-bottom mt-2">
        <span className="pb-1">Status</span>
        <span className="pb-1">
          <b>{selectedOrder?.status}</b>
        </span>
      </li>
      <li className="d-flex justify-content-between border-bottom mt-2">
        <span className="pb-1">Created</span>
        <span className="pb-1">
          <b>{selectedOrder?.createdAt}</b>
        </span>
      </li>
      <li className="d-flex justify-content-between border-bottom mt-2">
        <span className="pb-1">Client</span>
        <span className="pb-1">
          <b>{selectedOrder?.client}</b>
        </span>
      </li>
      {/* SECOND SECTION - ORDER INFO*/}
      <li className="d-flex justify-content-between border-bottom border-top mt-4">
        <span className="pb-1 pt-2">Order</span>
        <span className="pb-1 pt-2">
          <b>{formatPrice(selectedOrder?.order)}</b>
        </span>
      </li>
      <li className="d-flex justify-content-between border-bottom mt-2">
        <span className="pb-1">Tax (included)</span>
        <span className="pb-1">
          <b>{formatPrice(selectedOrder?.tax)}</b>
        </span>
      </li>
      <li className="d-flex justify-content-between border-bottom mt-2">
        <span className="pb-1">Discount</span>
        <span className="pb-1">
          <b>{formatPrice(selectedOrder?.discount)}</b>
        </span>
      </li>
      <li className="d-flex justify-content-between border-bottom mt-2">
        <span className="pb-1">Order total</span>
        <span className="pb-1">
          <b>{formatPrice(selectedOrder?.order)}</b>
        </span>
      </li>
      {/* THIRD SECTION - DELIVERY INFO*/}
      <li className="d-flex justify-content-between border-bottom border-top mt-4">
        <span className="pb-1 pt-2">Payment method</span>
        <span className="pb-1 pt-2">
          <b>{selectedOrder?.paymentMethod}</b>
        </span>
      </li>
      <li className="d-flex justify-content-between border-bottom mt-2">
        <span className="pb-1">Delivery</span>
        <span className="pb-1">
          <b>{formatPrice(selectedOrder?.delivery)}</b>
        </span>
      </li>
      {/* FOURTH SECTION - TOTAL */}
      <li className="d-flex justify-content-between border-bottom border-top mt-4">
        <span className="pb-1 pt-2">Order total</span>
        <span className="pb-1 pt-2">
          <b>{formatPrice(selectedOrder?.orderTotal)}</b>
        </span>
      </li>
      {/* FIFTH SECTION - MESSAGE */}
      <li className="d-flex justify-content-between border-bottom border-top mt-4">
        <span className="pb-1 pt-2">Message</span>
        <span className="pb-1 pt-2">
          <b>{selectedOrder?.message}</b>
        </span>
      </li>
    </div>
  );
};

export default OrderInfo;
