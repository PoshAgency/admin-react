import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const GalleryModal = ({
  isModalOpen,
  setIsModalOpen,
  galleries,
  galleryID,
}) => {
  const [gallery, setGallery] = useState(null);

  // set initial gallery values in modal on open
  useEffect(() => {
    const index = galleries.findIndex((gallery) => gallery.id === galleryID);

    if (index > -1) return setGallery(galleries[index]);

    setGallery({
      id: Math.round(Math.random() * 1000000000),
      name: "",
      deescription: "",
      images: [],
    });
  }, [galleryID]);

  return (
    <Modal
      className="fade bd-example-modal-lg"
      show={isModalOpen}
      size="lg"
      onHide={() => setIsModalOpen(false)}
    >
      <Modal.Body
        className="d-flex pb-2"
        style={{ maxWidth: "1000px", height: "500px" }}
      >
        <div className="col-5">
          <div className="w-100">
            <h5>Gallery title</h5>
            {gallery?.name ? (
              <h3 className="mt-4">{gallery.name}</h3>
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
            {gallery?.description ? (
              <p> {gallery.description}</p>
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
          <div

          // style={{ position: "absolute", bottom: "0" }}
          >
            <label
              as="button"
              htmlFor="add-mobile-image"
              className="btn btn-primary btn-sm position-absolute bottom-0 mb-0"

              // onChange={handleMobileImageChange}
            >
              <span style={{}} className="">
                Add photo
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
        <div className="col-7 h-100 overflow-hidden position-relative">
          <div>
            <h4>Images</h4>
          </div>
          <div
            className="d-flex flex-wrap position-relative mh-100 z-1"
            style={{
              overflowY: "scroll",
            }}
          >
            {gallery?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={index}
                className="object-fit-cover mt-2 mr-2 rounded-lg"
                style={{
                  width: "180px",
                  height: "120px",
                }}
              ></img>
            ))}
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
