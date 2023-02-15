import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomMuiDatePicker from "../components/Forms/Pickers/CustomMuiDatePicker";
import slugify from "slugify";
import BasicDatePicker from "../components/Forms/Pickers/MetarialDate";

const NewPage = () => {
  const [pagePath, setPagePath] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

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
          className="d-flex justify-content-between card-body px-0"
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
              <span className="ml-3">{`https://theposh.agency/${slugify(
                pagePath
              )}`}</span>
            </div>
            <h4 className="mt-4">Hero Title</h4>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control input-default px-2 mb-3"
                placeholder="Enter hero title"
              />
            </div>
            <h4 className="mt-4">Description</h4>
            <div className="form-group">
              <textarea
                className="form-control mt-3"
                rows="4"
                placeholder="Enter description"
                id="description"
              ></textarea>
            </div>
          </div>
          <div className="col-4 w-100">
            <div>
              <h4 className="mb-3">Date Published</h4>
              <BasicDatePicker style={{ paddingLeft: "12px" }} />
            </div>
            <div>
              <h4 className="mb-3 mt-3">Template</h4>
              <div className="form-group">
                <select className="form-control">
                  <option value="">Select a template</option>
                  <option value="homepage">Homepage</option>
                  <option value="about-us">About Us</option>
                  <option value="careers">Carrers</option>
                  <option value="default-page">Default Page</option>
                  <option value="team">Team</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPage;
