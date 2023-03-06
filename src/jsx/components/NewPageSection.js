import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Accordion, Button } from "react-bootstrap";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import noImg from "../../images/no-image.jpg";

const availableColors = [
  { title: "White", hashValue: "#ffffff" },
  { title: "Light Gray 1", hashValue: "#f8f8f8" },
  { title: "Light Gray 2", hashValue: "#e8e8e8" },
  { title: "Light Gray 3", hashValue: "#ddd" },
  { title: "Light Gray 4", hashValue: "#d0d0d0" },
  { title: "Black", hashValue: "#000000" },
  { title: "Gold", hashValue: "#ffcc08" },
];

const ColorOption = ({ color, selectedColor, setSelectedColor }) => {
  const { hashValue, title } = color;
  return (
    <span
      key={hashValue}
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

const NewPageSection = ({
  section,
  index,
  isActivePanel,
  setActivePanel,
  removeSection,
}) => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [imagePosition, setImagePosition] = useState("left");

  const toggleItem = (index) => {
    setActivePanel((prevState) => ({
      ...prevState,
      [index]: !Boolean(prevState[index]),
    }));
  };

  const handleImagePosition = (event) => {
    setImagePosition(event.target.value);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Accordion
      className="accordion accordion-rounded-stylish accordion-bordered container px-3 mt-3 ml-0"
      // defaultActiveKey={index}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="accordion__item mb-0">
        <Accordion.Toggle
          as={"div"}
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
              {section.title}
            </span>
          </div>
          <Button
            variant="danger"
            className="btn-xs"
            onClick={(e) => removeSection(e, section.id)}
          >
            Remove section
          </Button>
        </Accordion.Toggle>
        <Accordion.Collapse
          eventKey={`${index}`}
          className="accordion__body px-5"
        >
          <div className="row">
            <div
              className={`col-4 order-${
                imagePosition === "right" ? "last" : "first"
              }`}
            >
              <div className="form-group mt-3 d-flex flex-column">
                <h4 className="mb-3">Image</h4>
                <label
                  htmlFor="add-desktop-image"
                  className="mb-0 position-relative"
                  role="button"
                >
                  <Button
                    variant="outline-danger"
                    className="btn-rounded btn-xxs position-absolute top-0 end-0 ml-2 mt-2"
                    badgecontent="1"
                  >
                    Remove
                  </Button>
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
                <h4 className="mb-3">Image Position</h4>
                <select
                  className="form-control"
                  name="image-placement"
                  defaultValue={imagePosition}
                  onChange={handleImagePosition}
                >
                  <option value="left" key={"left"}>
                    Left side
                  </option>
                  <option value="right" key={"right"}>
                    Right side
                  </option>
                  <option value="no-image" key={"no-image"}>
                    No Image
                  </option>
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
                  section=""
                  onReady={(editor) => {
                    console.log("ready");
                  }}
                  onChange={(event, editor) => {
                    const section = editor.getData();
                    console.log({ event, editor, section });
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
};

export default NewPageSection;
