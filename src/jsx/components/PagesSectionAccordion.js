import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import "./PagesSectionAccordion.css";

import noImg from "../../images/no-image.jpg";

const ColorOption = ({ color, selectedColor, setSelectedColor }) => {
  const { hashValue, title } = color;

  return (
    <span
      role="button"
      className="rounded-circle mr-2"
      onClick={() => setSelectedColor(hashValue)}
      style={{
        width: "32px",
        height: "32px",
        backgroundColor: `${hashValue}`,
        border: `${
          selectedColor === hashValue
            ? `2px solid ${selectedColor === "#000000" ? "#ffcc08" : "black"}`
            : ""
        }`,
      }}
      title={title}
    ></span>
  );
};

const availableColors = [
  { title: "White", hashValue: "#ffffff" },
  { title: "Light Gray 1", hashValue: "#f8f8f8" },
  { title: "Light Gray 2", hashValue: "#e8e8e8" },
  { title: "Light Gray 3", hashValue: "#ddd" },
  { title: "Light Gray 4", hashValue: "#d0d0d0" },
  { title: "Black", hashValue: "#000000" },
  { title: "Gold", hashValue: "#ffcc08" },
];

const PagesSectionAccordion = () => {
  const [isActivePanel, setActivePanel] = useState({});
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [sections, setSections] = useState([]);

  const toggleItem = (index) => {
    setActivePanel((prevState) => ({
      ...prevState,
      [index]: !Boolean(prevState[index]),
    }));
  };

  const addNewSection = () => {
    setSections((prevState) => [
      ...prevState,
      { title: `Section ${Math.random}` },
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
      {sections.map((item, index) => {
        const isOpen = isActivePanel[index];

        return (
          <Accordion
            className="accordion accordion-rounded-stylish accordion-bordered container px-3 mt-2 ml-0 "
            // alwaysOpen={true}
            defaultActiveKey={index}
            key={index}
          >
            <div className="accordion__item mb-0">
              <Accordion.Toggle
                as={Card.Text}
                eventKey={`${index}`}
                className={`accordion__header ${
                  isActivePanel[index] ? "" : "collapsed"
                } accordion__header--primary d-flex justify-content-between align-items-center`}
                onClick={() => toggleItem(index)}
              >
                <div className="d-flex align-items-center">
                  <span className="accordion__header--icon lg">
                    <MenuIcon />
                  </span>
                  <span className="accordion__header--text ml-2">
                    {item.title} {index + 1}
                  </span>
                </div>
                <Button
                  variant="danger"
                  className="btn-xs"
                  onClick={(e) => removeSection(e, index)}
                >
                  Remove section
                </Button>
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey={`${index}`}
                className="accordion__body px-5"
              >
                <div className="row">
                  <div className="col-4">
                    <div className="form-group mt-3 d-flex flex-column">
                      <h4 className="mb-3">Image</h4>
                      <label
                        htmlFor="add-desktop-image"
                        className="mb-0 position-relative"
                        role="button"
                      >
                        {/* <Badge
                          variant="outline-danger"
                          className="badge-circle position-absolute top-0 end-0"
                        >
                          X
                        </Badge> */}
                        <img src={noImg} alt="" className="img-fluid rounded" />
                        <input
                          type="file"
                          accept="image/jpeg, image/png"
                          id="add-desktop-image"
                          hidden
                        />
                      </label>
                      <small className="mt-2 ml-2">
                        Max file size 300kb, supported type: JPEG
                      </small>
                    </div>
                    <div className="form-group mt-5">
                      <h4 className="mb-3">Image Placement</h4>
                      <select
                        className="form-control"
                        name="image-placement"
                        defaultValue={"left"}
                      >
                        <option value="left">Left side</option>
                        <option value="right">Right side</option>
                        <option value="no-image">No Image</option>
                      </select>
                    </div>
                    <div className="form-group mt-5">
                      <h4 className="mb-3">Background Color</h4>
                      <div className="d-flex">
                        {availableColors.map((color, index) => (
                          <ColorOption
                            color={color}
                            key={index}
                            selectedColor={selectedColor}
                            setSelectedColor={setSelectedColor}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="form-group mt-3">
                      <h4 className="mb-3">Title</h4>
                      <input
                        type="text"
                        className="form-control input-default px-2 mb-3"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <h4 className="mb-3">Description</h4>
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
                    <div className="form-group mt-3">
                      <h4 className="mb-3">Button Text</h4>
                      <input
                        type="text"
                        className="form-control input-default px-2 mb-3"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <h4 className="mb-3">Button URL</h4>
                      <input
                        type="text"
                        className="form-control input-default px-2 mb-3"
                        placeholder="Enter title"
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        );
      })}
    </div>
  );
};

export default PagesSectionAccordion;
