import React from "react";

const GalleryIcon = ({ gallery }) => {
  const { name, images, id } = gallery;

  return (
    <div
      className="rounded-lg d-flex justify-content-center align-items-center mr-3 bg-image "
      style={{
        border: `1px solid #3D4465`,
        backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${images[0]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "white",
        height: "150px",
        width: "250px",
      }}
      role="button"
    >
      <p className="mb-0" style={{ fontSize: "32px" }}>
        {name}
      </p>
    </div>
  );
};

export default GalleryIcon;
