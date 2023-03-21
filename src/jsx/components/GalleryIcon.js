import React from "react";
import { Button } from "react-bootstrap";

const GalleryIcon = ({ gallery, handleGallery, removeGallery }) => {
  const { name, images, id } = gallery;

  return (
    <div
      className="rounded-lg mt-3 d-flex justify-content-center align-items-center mr-3 bg-image "
      style={{
        border: `1px solid #3D4465`,
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${images[0].source})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "white",
        height: "150px",
        width: "250px",
        position: "relative",
      }}
      role="button"
      onClick={() => handleGallery(id)}
    >
      <p className="mb-0" style={{ fontSize: "32px" }}>
        {name}
      </p>

      <Button
        variant="outline-danger"
        className="btn-rounded btn-xxs badge-circle position-absolute mr-2 mt-2"
        onClick={(e) => removeGallery(e, id)}
        style={{ top: "0", right: "0" }}
      >
        X
      </Button>
    </div>
  );
};

export default GalleryIcon;
