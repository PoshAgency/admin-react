import React from "react";
import { Button } from "react-bootstrap";

const PageImageUploader = () => {
  return (
    <div className="container mt-3 px-0 d-flex flex-column">
      <h4>Page images</h4>

      <div className="d-flex mt-3">
        <div className="col-2 d-flex flex-column px-2">
          <Button
            type="button"
            variant="outline-light"
            className="btn-xxs mt-2"
          >
            Add desktop
          </Button>
          <Button
            type="button"
            variant="outline-light"
            className="btn-xxs mt-2"
          >
            Crop mobile
          </Button>
          <Button
            type="button"
            variant="outline-light"
            className="btn-xxs mt-2"
          >
            Add mobile
          </Button>
        </div>
        <div className="col">right</div>
      </div>
    </div>
  );
};

export default PageImageUploader;
