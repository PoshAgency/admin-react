import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GalleryModal from "./GalleryModal";
import GalleryIcon from "./GalleryIcon";
import { useFieldArray, useFormContext } from "react-hook-form";

const NewPageGalleries = () => {
  const methods = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryID, setGalleryID] = useState(null);

  const { fields, append, update, remove } = useFieldArray({
    control: methods.control,
    name: "galleries",
  });

  const clearGalleries = () => {
    remove();
  };

  const removeGallery = (e, galleryId) => {
    e.stopPropagation();

    const index = fields.indexOf((gallery) => gallery.id === galleryId);

    remove(index);
  };

  const handleGallery = (id) => {
    setGalleryID(`${id}`);

    setIsModalOpen(true);
  };

  return (
    <div className="col">
      <div className="d-flex justify-content-between mb-3">
        <h3>Galleries</h3>
        <div>
          <Button
            variant="light"
            className="btn-sm mr-3"
            onClick={() => handleGallery(null)}
          >
            Add gallery
          </Button>
          <Button variant="light" className="btn-sm" onClick={clearGalleries}>
            Remove all
          </Button>
        </div>
        <GalleryModal
          galleryID={galleryID}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          galleries={fields}
          append={append}
          update={update}
        />
      </div>
      <div className="d-flex mb-3 flex-wrap">
        {!fields.length ? (
          <h4 className="mt-4 pl-4">Gallery list is empty.</h4>
        ) : (
          fields.map((gallery, index) => (
            <GalleryIcon
              gallery={gallery}
              key={index}
              handleGallery={handleGallery}
              removeGallery={removeGallery}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewPageGalleries;
