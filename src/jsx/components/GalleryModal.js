import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import GalleryImage from "./GalleryImage";

const GalleryModal = ({
  isModalOpen,
  setIsModalOpen,
  galleries,
  setGalleries,
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
      description: "",
      images: [],
    });
  }, [galleries, galleryID]);

  const handleImageUpload = (e) => {
    if (!e.target.files[0]) return;

    const newImageObjects = [...e.target.files].map((image) => {
      const source = URL.createObjectURL(image);

      return {
        id: Math.round(Math.random() * 1000000000),
        orderNumber: 0,
        source,
      };
    });

    setGallery((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...newImageObjects],
    }));
  };

  const handleGalleryInput = (e) => {
    setGallery({ ...gallery, [e.target.name]: e.target.value });
  };

  const handleSaveGallery = () => {
    const currentGalleryIndex = galleries.findIndex(
      (storedGallery) => storedGallery.id === gallery.id
    );

    if (currentGalleryIndex > -1) {
      const updatedGallery = { ...gallery };

      const newGalleries = [
        ...galleries.slice(0, currentGalleryIndex),
        updatedGallery,
        ...galleries.slice(currentGalleryIndex + 1),
      ];

      setGalleries(newGalleries);

      setIsModalOpen(false);

      return;
    }

    setIsModalOpen(false);

    setGalleries((prevState) => [...prevState, gallery]);
  };

  // DRAG N DROP FUNCTIONALITY
  // handle droping dragged element
  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id !== over.id) {
      setGallery((prevState) => {
        const activeIndex = prevState.images
          .map((image) => image.id)
          .indexOf(active.id);
        const overIndex = prevState.images
          .map((image) => image.id)
          .indexOf(over.id);

        return {
          ...prevState,
          images: arrayMove(prevState.images, activeIndex, overIndex),
        };
      });
    }
  };

  // prevent firing drag and drop element before moving more than 8px
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

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
            <div className="form-group mt-2">
              <input
                type="text"
                name="name"
                value={gallery?.name}
                className="form-control input-danger px-2 mb-3 w-100"
                placeholder="Enter gallery title"
                onChange={handleGalleryInput}
              />
            </div>
          </div>
          <div className="w-100 mt-3">
            <h5 className="mt-4">Gallery description</h5>
            <div className="form-group mt-3 h-100">
              <textarea
                onChange={handleGalleryInput}
                className="form-control"
                value={gallery?.description}
                name="description"
                rows="8"
                placeholder="Enter gallery description"
                id="description"
              ></textarea>
            </div>
          </div>
          <div className="mt-3">
            <h5 className="mt-2">
              Copy shortcode:{" "}
              <span
                role="button"
                onClick={() =>
                  navigator.clipboard.writeText(`[${gallery.name}]`)
                }
              >{`[${gallery?.name}]`}</span>
            </h5>
          </div>
          <div>
            <label
              as="button"
              htmlFor="add-gallery-images"
              className="btn btn-primary btn-sm position-absolute bottom-0 mb-0 mt-3"
              onChange={handleImageUpload}
            >
              <span style={{}} className="">
                Add photo
              </span>
              <input
                type="file"
                accept="image/jpeg"
                id="add-gallery-images"
                hidden
                multiple
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
            {!gallery?.images.length ? (
              <p>Image list is empty.</p>
            ) : (
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                sensors={sensors}
              >
                <SortableContext
                  items={gallery.images}
                  strategy={rectSortingStrategy}
                >
                  {gallery?.images.map((image, index) => (
                    <GalleryImage image={image} key={index} index={index} />
                  ))}
                </SortableContext>
              </DndContext>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger light"
          onClick={() => {
            setGallery(null);
            setIsModalOpen(false);
          }}
        >
          Close Gallery
        </Button>
        <Button
          variant=""
          type="button"
          className="btn btn-primary"
          onClick={() => {
            handleSaveGallery();
          }}
        >
          Save gallery
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GalleryModal;
