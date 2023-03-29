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
          <div className="col pl-5">
            <h3 className="mt-3">{`${
              menu.charAt(0).toUpperCase() + menu.slice(1)
            } menu`}</h3>
            <div className="nestable w-75 mt-3">
              <div className="dd" id="nestable">
                <ol className="dd-list">
                  <li className="dd-item" data-id="1">
                    <NTable items={data} />
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col">Right</div>
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
