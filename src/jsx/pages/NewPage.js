import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import slugify from "slugify";

const NewPage = () => {
  const [pagePath, setPagePath] = useState("");

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>New Page</h2>
        <Link to="/pages">
          <Button variant="transparent">Cancel</Button>
        </Link>
      </div>
      <div className="w-100 mt-5 card">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="d-flex justify-content-between align-items-center card-body px-0"
        >
          <div className="col-8 w-100">
            <h4>Page Title</h4>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control input-default px-2 mb-3"
                placeholder="Enter page title"
                onChange={(e) => setPagePath(e.target.value)}
              />
              <span className="">{`https://theposh.agency/${slugify(
                pagePath
              )}`}</span>
            </div>
            <h4 className="mt-5">Hero Title</h4>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control input-default px-2 mb-3"
                placeholder="Enter hero title"
                onChange={(e) => setPagePath(e.target.value)}
              />
            </div>
            <h4>Description</h4>
            <div className="form-group p-4">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter description"
                id="description"
              ></textarea>
            </div>
          </div>
          <div className="col-4 w-100">
            <h4>Featured Photo</h4>
            <div className="d-flex align-items-center" role="button">
              <div className="image-upload">
                <input
                  type="file"
                  name="featured-image"
                  className="d-none"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  style={{ width: "100%", height: "256px" }}
                ></label>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPage;
