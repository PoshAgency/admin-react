import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import OrdersModalTable from "./table/OrdersModalTable/OrdersModalTable";
import { Link } from "react-router-dom";

const OrdersModal = ({ modalOpen, setModalOpen }) => {
  const { selectedOrder } = useSelector((state) => state.orders);

  return (
    <Modal
      className="fade bd-example-modal-lg"
      show={modalOpen}
      size="lg"
      onHide={() => setModalOpen(false)}
    >
      <Modal.Header>
        <Modal.Title>Order ID: {selectedOrder?.id}</Modal.Title>
        <Button
          variant=""
          className="close"
          onClick={() => setModalOpen(false)}
        >
          <span>&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <p className="mb-0">
              <span className="w-50 d-inline-block">Full name:</span>{" "}
              <b>{selectedOrder?.clientInfo.fullName}</b>
            </p>
            <p className="mb-0">
              <span className="w-50 d-inline-block">Date:</span>{" "}
              <b>{selectedOrder?.createdAt}</b>
            </p>
            <p className="mb-0">
              <span className="w-50 d-inline-block">Order status:</span>{" "}
              <b>{selectedOrder?.status}</b>
            </p>
            <p className="mb-0">
              <span className="w-50 d-inline-block">Payment method:</span>{" "}
              <b>{selectedOrder?.paymentMethod}</b>
            </p>
          </div>
          <div className="col">
            <p className="mb-0">
              <span className="w-50 d-inline-block">Total:</span>{" "}
              <b>{`$${selectedOrder?.orderTotal.toFixed(2)}`}</b>
            </p>
            <p className="mb-0">
              <span className="w-50 d-inline-block">Tax (included):</span>{" "}
              <b>{`$${selectedOrder?.tax.toFixed(2)}`}</b>
            </p>
            <p className="mb-0">
              <span className="w-50 d-inline-block">Discount:</span>{" "}
              <b>{`$${selectedOrder?.discount.toFixed(2)}`}</b>
            </p>
            <p className="mb-0">
              <span className="w-50 d-inline-block">Order total:</span>{" "}
              <b>{`$${selectedOrder?.orderTotal.toFixed(2)}`}</b>
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <OrdersModalTable orders={selectedOrder?.products} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger light" onClick={() => setModalOpen(false)}>
          Close
        </Button>
        <Link to={`/orders/${selectedOrder?.id}`}>
          <Button variant="" type="button" className="btn btn-primary">
            Order page
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default OrdersModal;
