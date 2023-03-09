import React, { useState } from "react";
import { Button } from "react-bootstrap";

import noImg from "../../images/no-image.jpg";
import ImageCropModal from "./ImageCropModal";

const PageImageUploader = ({ register }) => {
  const [desktopImage, setDesktopImage] = useState(null);
  const [mobileImage, setMobileImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDesktopImageChange = (e) => {
    if (!e.target.files[0]) return;

    const newDesktopImageBlob = URL.createObjectURL(e.target.files[0]);

    setDesktopImage(newDesktopImageBlob);
  };

  const handleMobileImageChange = (e) => {
    if (!e.target.files[0]) return;

    const newMobileImageBlob = URL.createObjectURL(e.target.files[0]);

    setMobileImage(newMobileImageBlob);
  };

  return (
    <div className="container mt-3 px-0 d-flex flex-column">
      <h3>Page images</h3>

      <div className="d-flex mt-3">
        <div className="col-2 d-flex flex-column px-0">
          <label
            htmlFor="add-desktop-image"
            className="btn btn-outline-light btn-xxs mb-0"
            onChange={handleDesktopImageChange}
          >
            Add desktop{" "}
            <input
              {...register("desktopImage")}
              type="file"
              accept="image/jpeg, image/png"
              id="add-desktop-image"
              hidden
            />
          </label>
          <label
            htmlFor="add-mobile-image"
            className="btn btn-outline-light btn-xxs mt-2 mb-0"
            onChange={handleMobileImageChange}
          >
            Add Mobile{" "}
            <input
              {...register("mobileImage")}
              type="file"
              accept="image/jpeg, image/png"
              id="add-mobile-image"
              hidden
            />
          </label>
          <Button
            type="button"
            variant="outline-light"
            className="btn-xxs mt-2"
            onClick={() => setIsModalOpen(true)}
            disabled={desktopImage === null}
          >
            Crop for mobile
          </Button>
        </div>
        <div className="col ml-3">
          <div className="d-flex mb-3">
            <img
              src={desktopImage || noImg}
              alt=""
              height={200}
              width={300}
              className="rounded object-fit-cover"
              style={{ objectFit: "cover" }}
            />
            <img
              src={mobileImage || noImg}
              alt=""
              height={200}
              width={170}
              className="ml-3 rounded object-fit-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
          <small className="text-muted">
            Desirable sizes are 1920px x 650px for desktop, and 640px x 600px
            for mobile. Max. file size is 300kb. Supported formats: JPG.
          </small>
        </div>
      </div>
      <ImageCropModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        imageToCrop={desktopImage}
        onImageCropped={(croppedImage) => setMobileImage(croppedImage)}
      />
    </div>
  );
};

export default PageImageUploader;
