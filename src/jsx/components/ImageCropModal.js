import React from "react";
import { Button, Modal } from "react-bootstrap";
import ImageCropper from "./ImageCropper";

const ImageCropModal = ({
  isModalOpen,
  setIsModalOpen,
  imageToCrop,
  onImageCropped,
}) => {
  return (
    <Modal
      className="fade bd-example-modal-lg"
      show={isModalOpen}
      size="lg"
      onHide={() => setIsModalOpen(false)}
    >
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Button
          variant=""
          className="close"
          onClick={() => setIsModalOpen(false)}
        >
          <span>&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <ImageCropper
          imageToCrop={imageToCrop}
          onImageCropped={onImageCropped}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger light" onClick={() => setIsModalOpen(false)}>
          Close
        </Button>
        {/* <Button variant="" type="button" className="btn btn-primary">
          Save changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default ImageCropModal;
