import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const PageImageUploader = () => {
  const [desktopImage, setDesktopImage] = useState(null);

  // useEffect(() => {
  //   if (!desktopImage) return;
  //   const addedImageUrl = URL.createObjectURL(desktopImage);
  //   setDesktopImageUrl((prevState) => {
  //     addedImageUrl;

  //     console.log(desktopImageUrl);
  //   });
  // }, [desktopImage]);

  const handleDesktopImageChange = (e) => {
    if (!e.target.files[0]) return;

    const newDesktopImageBlob = URL.createObjectURL(e.target.files[0]);

    setDesktopImage(newDesktopImageBlob);
  };

  return (
    <div className="container mt-3 px-0 d-flex flex-column">
      <h4>Page images</h4>

      <div className="d-flex mt-3">
        <div className="col-2 d-flex flex-column px-2">
          <label
            htmlFor="add"
            className="btn btn-outline-light btn-xxs mb-0"
            onChange={handleDesktopImageChange}
          >
            Add desktop{" "}
            <input type="file" accept="image/jpeg, image/png" id="add" hidden />
          </label>
          <Button
            type="button"
            variant="outline-light"
            className="btn-xxs mt-2"
          >
            Crop mobile
            <input type="file" name="" id="" className="d-none" />
          </Button>
          <Button
            type="button"
            variant="outline-light"
            className="btn-xxs mt-2"
          >
            Add mobile
          </Button>
        </div>
        <div className="col">
          <div style={{ width: "256px" }}>
            <img src={desktopImage} alt="" width={256} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageImageUploader;
