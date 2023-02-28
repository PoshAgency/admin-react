import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageImagesUploader from "../components/PageImagesUploader";
import slugify from "slugify";
import BasicDatePicker from "../components/Forms/Pickers/MetarialDate";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import NewPageSections from "../components/NewPageSections";

import "./NewPage.css";
import NewPageGalleries from "../components/NewPageGalleries";

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
        <form onSubmit={(e) => e.preventDefault()} className="card-body">
          <div className="row d-flex justify-content-between">
            <div className="col-8 w-100">
              <h3>Page Title</h3>
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
              <h3 className="mt-4">Hero Title</h3>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control input-default px-2 mb-3"
                  placeholder="Enter hero title"
                />
              </div>
              <PageImagesUploader />
              <h3 className="mt-4">Description</h3>
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
                <h3 className="mb-3">Date Published</h3>
                <BasicDatePicker style={{ paddingLeft: "12px" }} />
              </div>
              <div>
                <h3 className="mb-3 mt-3">Template</h3>
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
          </div>
          <div className="row d-flex flex-column mt-5">
            <div className="col">
              <h3 className="mb-3">
                Page content{" "}
                <span className="small ml-2">(Up to 240 characters)</span>
              </h3>
              <CKEditor
                editor={Editor}
                data=""
                onReady={(editor) => {
                  console.log("ready");
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  // console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  // console.log("Focus.", editor);
                }}
              />
            </div>
          </div>
          <div className="row mt-5">
            <NewPageGalleries />
          </div>
          <div className="row mt-5">
            <NewPageSections />
          </div>
          <div className="row mt-5">
            <div className="col">
              <h3>SEO</h3>
              <div className="form-group mt-3 w-50 px-3">
                <h5>Title</h5>
                <input
                  id="seo-title"
                  type="text"
                  className="form-control input-default px-3 mb-3"
                  placeholder="SEO Title"
                />
              </div>
              <div className="form-group mt-3 w-75 px-3">
                <h5>Description</h5>
                <textarea
                  id="seo-description"
                  rows={4}
                  className="form-control input-default px-3"
                  placeholder="Max 160 characters"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <Button variant="dark">Publish</Button>
            <Button className="ml-3" variant="light">
              Save as draft
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPage;
