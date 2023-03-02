import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./NewPageSections.css";

import NewPageSection from "./NewPageSection";

const NewPageSections = () => {
  const [sections, setSections] = useState([]);
  const [isActivePanel, setActivePanel] = useState({});

  const addNewSection = () => {
    setSections((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        title: "New Section",
        selectedColor: "#fff",
        imagePosition: "left",
        buttonText: "",
        buttonURL: "",
        description: "",
      },
    ]);
  };

  const collapseAllSections = () => {
    setActivePanel((prevState) => {
      const nextState = {};

      Object.keys(prevState).forEach((key) => {
        nextState[key] = false;
      });

      return nextState;
    });
  };

  const removeSection = (event, sectionId) => {
    event.stopPropagation();
    const filteredSections = sections.filter(
      (section) => section.id !== sectionId
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
          sections.map((section, index) => (
            <NewPageSection
              key={index}
              data={section}
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

export default NewPageSections;
