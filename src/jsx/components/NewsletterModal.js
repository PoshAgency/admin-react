import React from "react";
import { Button, Modal } from "react-bootstrap";

const NewsletterModal = ({ openModal, setOpenModal }) => {
  return (
    <Modal className="fade" show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Button
          variant=""
          className="close"
          onClick={() => setOpenModal(false)}
        >
          <span>&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>Modal body text goes here.</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)} variant="danger light">
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewsletterModal;
