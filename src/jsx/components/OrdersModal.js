import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const OrdersModal = ({ modalOpen, setModalOpen }) => {
  const { previewOrder } = useSelector((state) => state.orders);

  return (
    <Modal
      className="fade bd-example-modal-lg"
      show={modalOpen}
      size="lg"
      onHide={() => setModalOpen(false)}
    >
      <Modal.Header>
        <Modal.Title>Order ID: {previewOrder?.id}</Modal.Title>
        <Button
          variant=""
          className="close"
          onClick={() => setModalOpen(false)}
        >
          <span>&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>Modal body text goes here.</Modal.Body>
      <Modal.Footer>
        <Button variant="danger light" onClick={() => setModalOpen(false)}>
          Close
        </Button>
        <Button variant="" type="button" className="btn btn-primary">
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrdersModal;
