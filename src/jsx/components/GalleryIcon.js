import React from "react";

const GalleryIcon = ({ gallery, handleGallery }) => {
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
      }}
      role="button"
      onClick={() => handleGallery(id)}
    >
      <p className="mb-0" style={{ fontSize: "32px" }}>
        {name}
      </p>
    </div>
  );
};

export default GalleryIcon;
