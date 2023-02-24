import React, { useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import "./PagesSectionAccordion.css";

import NewPageSection from "./NewPageSection";

const PagesSectionAccordion = () => {
  const [sections, setSections] = useState([]);
  const [isActivePanel, setActivePanel] = useState({});

  const addNewSection = () => {
    setSections((prevState) => [
      ...prevState,
      { title: `Section ${Math.floor(Math.random() * 1000)}` },
    ]);
  };

  const collapseAllSections = () => {
    console.log("collapse");
    setActivePanel({});
  };

  const removeSection = (event, sectionIndex) => {
    event.stopPropagation();
    const filteredSections = sections.filter(
      (section, index) => index !== sectionIndex
    );
    setSections([...filteredSections]);
  };

  return (
    <div className="col">
      <div className="d-flex justify-content-between mb-3">
        <h3>Page sections</h3>
        <div>
          <Button
            variant="light"
            className="btn-sm mr-3"
            onClick={addNewSection}
          >
            Add section
          </Button>
          <Button
            variant="light"
            className="btn-sm"
            onClick={collapseAllSections}
          >
            Collapse sections
          </Button>
        </div>
      </div>
      <div>
        {!sections.length ? (
          <h4 className="mt-4 pl-4">Section list is empty.</h4>
        ) : (
          sections.map((item, index) => (
            <NewPageSection
              item={item}
              index={index}
              isActivePanel={isActivePanel}
              setActivePanel={setActivePanel}
              removeSection={removeSection}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PagesSectionAccordion;
