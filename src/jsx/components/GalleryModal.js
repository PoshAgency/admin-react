import React from "react";
import { Button, Modal } from "react-bootstrap";

const GalleryModal = ({
  modalData,
  isModalOpen,
  setIsModalOpen,
  setNewGallery,
}) => {
  console.log(modalData);

  return (
    <Modal
      className="fade bd-example-modal-lg"
      show={isModalOpen}
      size="lg"
      onHide={() => setIsModalOpen(false)}
    >
      <Modal.Body
        className="d-flex pb-2"
        style={{ minHeight: "60vh", maxWidth: "1000px" }}
      >
        <div className="col-5">
          <div className="w-100">
            <h5>Gallery title</h5>
            {modalData?.name ? (
              <h3 className="mt-4">{modalData.name}</h3>
            ) : (
              <div className="form-group mt-2">
                <input
                  type="text"
                  className="form-control input-danger px-2 mb-3 w-100"
                  placeholder="Enter gallery title"
                  // onChange={(e) => setPagePath(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className="w-100 mt-3">
            <h5 className="mt-4">Gallery description</h5>
            {modalData?.description ? (
              <p> {modalData.description}</p>
            ) : (
              <div className="form-group mt-3 h-100">
                <textarea
                  className="form-control"
                  rows="8"
                  placeholder="Enter gallery description"
                  id="description"
                ></textarea>
              </div>
            )}
          </div>
        </div>
        <div className="col-7 position-relative">
          <div>
            <h4>Images</h4>
          </div>
          <div
            className="mr-3 z-3"
            style={{ position: "absolute", bottom: "8px", right: "8px" }}
          >
            <label
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              htmlFor="add-mobile-image"
              className="btn btn-primary d-flex justify-content-center align-items-center"

              // onChange={handleMobileImageChange}
            >
              <span style={{ fontSize: "40px" }} className="">
                +
              </span>
              <input
                type="file"
                accept="image/jpeg, image/png"
                id="add-mobile-image"
                hidden
              />
            </label>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger light" onClick={() => setIsModalOpen(false)}>
          Close
        </Button>
        <Button variant="" type="button" className="btn btn-primary">
          Create gallery
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GalleryModal;
