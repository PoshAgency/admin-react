import React from "react";
import { Button } from "react-bootstrap";
import { pages } from "../../data/pages";

const Pages = () => {
  console.log(pages);
  return (
    <div className="container w-100">
      <div className="row d-flex justify-content-end">
        <Button variant="dark" className="btn">
          New Page
        </Button>
      </div>
      <div className="row mt-5">
        <div className="col d-flex align-items-center">
          <p className="mb-0">{`${pages.length}`} pages</p>
        </div>
        <div className="col d-flex justify-content-end px-0">
          <div className="input-group w-75">
            <input
              type="text"
              className="form-control"
              placeholder="Search pages"
            />
            <div className="input-group-append">
              <button className="btn btn-dark" type="button">
                <i class="las la-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">3</div>
    </div>
  );
};

export default Pages;
