import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { header, footer } from "../../data/menus";
import NTable from "../components/PluginsMenu/Nestable/NTable";

const MenuEditor = () => {
  const { menu } = useParams();

  let data = [];

  if (menu === "header") {
    data = header;
  } else {
    data = footer;
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Settings</h2>
        <Link to="/settings">
          <Button variant="transparent">Cancel</Button>
        </Link>
      </div>
      <div className="w-100 mt-5 card">
        <div className="row">
          <div className="col px-5 py-3">
            <h3 className="">{`${
              menu.charAt(0).toUpperCase() + menu.slice(1)
            } menu`}</h3>
            <div className="nestable mt-3">
              <div className="dd" id="nestable">
                <ol className="dd-list">
                  <li className="dd-item" data-id="1">
                    <NTable items={data} />
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col px-5 py-3">
            <div className="sticky-top">
              <h3>New Menu Item</h3>
              <p>You can also type in custom Title and URL</p>
              <div className="form-group mt-4">
                <h4>Title</h4>
                <input
                  type="text"
                  className="form-control input-default px-2 mt-3"
                  placeholder="Enter page title"
                  defaultValue=""
                  onChange={(e) => {}}
                />
              </div>
              <div className="form-group mt-4">
                {/* <h3>Page Title</h3> */}
                <input
                  type="text"
                  className="form-control input-default px-2 mt-3"
                  placeholder="Enter page title"
                  defaultValue=""
                  onChange={(e) => {}}
                />
                <p className="mt-2">
                  Info: if contains https, http or www - url will open in new
                  tab
                </p>
              </div>
              <div className="custom-control custom-checkbox checkbox-success check-lg">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={`menu-item-title`}
                  // onChange={selectTeamMember}
                  // checked={false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`menu-item-title`}
                >
                  <p className="ml-2">Title</p>
                </label>
              </div>
              <div className="custom-control custom-checkbox checkbox-success check-lg">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={`menu-item-external-link`}
                  // onChange={}
                  // checked={false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`menu-item-external-link`}
                >
                  <p className="ml-2 mb-0">External link</p>
                </label>
              </div>
              <div className="form-group mt-3">
                <h4 className="">Status</h4>
                <select className="form-control mt-3">
                  <option value="">Select a template</option>
                  <option value="homepage">Active</option>
                  <option value="homepage">Draft</option>
                </select>
              </div>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default MenuEditor;
