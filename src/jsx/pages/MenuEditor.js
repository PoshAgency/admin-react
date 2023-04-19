import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NTable from "../components/PluginsMenu/Nestable/NTable";
import MenuEditorForm from "./MenuEditorForm";

const MenuEditor = () => {
  const { menu } = useParams();
  const data = useSelector((state) => state.menuItems[menu]);

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
          <div className="col px-5 py-3 h-100">
            <MenuEditorForm />
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
