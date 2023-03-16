import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Editor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Accordion, Button } from "react-bootstrap";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Controller } from "react-hook-form";

import noImg from "../../images/no-image.jpg";
import { useFormContext } from "react-hook-form";

const availableColors = [
  { title: "White", hashValue: "#ffffff" },
  { title: "Light Gray 1", hashValue: "#f8f8f8" },
  { title: "Light Gray 2", hashValue: "#e8e8e8" },
  { title: "Light Gray 3", hashValue: "#dddddd" },
  { title: "Light Gray 4", hashValue: "#d0d0d0" },
  { title: "Black", hashValue: "#000000" },
  { title: "Gold", hashValue: "#ffcc08" },
];

const ColorOption = ({
  color,
  setSectionBackgroundColor,
  getSelectedColor,
}) => {
  const selectedColor = getSelectedColor();

  const { hashValue, title } = color;

  return (
    <span
      key={hashValue}
      role="button"
      className="rounded-circle mr-2"
      onClick={() => setSectionBackgroundColor(hashValue)}
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
  field,
  index,
  activePanels,
  setActivePanels,
  removeField,
}) => {
  const [imagePosition, setImagePosition] = useState("left");
  const [sectionTitle, setSectionTitle] = useState(field.title);
  const [previewImage, setPreviewImage] = useState(noImg);
  const methods = useFormContext();

  const toggleItem = (id) => {
    setActivePanels((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((panelId) => panelId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  // useEffect for handling section image preview
  useEffect(() => {
    const addedImage = methods.watch(`sections.${index}.sectionImage`);

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (addedImage.length) {
      reader.readAsDataURL(addedImage[0]);
    }
  }, [index, methods]);

  // useEffect for handling image position in section
  useEffect(() => {
    const newImagePosition = methods.watch(`sections.${index}.imagePosition`);

    setImagePosition(newImagePosition);
  }, [methods, index]);

  const setSectionBackgroundColor = (color) => {
    methods.setValue(`sections.${index}.selectedColor`, color);
  };

  const getSelectedColor = () => {
    const selectedColor = methods.watch(`sections.${index}.selectedColor`);

    return selectedColor;
  };

  // DRAG N DROP FUNCTIONALITY
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Accordion
      className="accordion accordion-rounded-stylish accordion-bordered container px-3 mt-3 ml-0"
      activeKey={activePanels.includes(`${index}`) ? `${index}` : null}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="accordion__item mb-0">
        <Accordion.Toggle
          as={"div"}
          eventKey={`${index}`}
          className={`accordion__header accordion__header--primary d-flex justify-content-between align-items-center`}
          onClick={() => toggleItem(`${index}`)}
        >
          <div className="d-flex align-items-center">
            <span className="accordion__header--icon lg">
              <MenuIcon />
            </span>
            <span className="accordion__header--text ml-2">{sectionTitle}</span>
          </div>
          <Button
            variant="danger"
            className="btn-xs"
            onClick={(e) => removeField(e, index)}
          >
            Remove field
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
                  htmlFor="add-section-image"
                  className="mb-0 position-relative w-100"
                  role="button"
                  // style={{ maxHeight: "200px" }}
                >
                  <Button
                    variant="outline-danger"
                    className="btn-rounded btn-xxs badge-circle position-absolute ml-2 mt-2"
                  >
                    X
                  </Button>
                  <img
                    src={previewImage || noImg}
                    alt=""
                    className="img-fluid rounded object-fit-cover"
                    height={200}
                    width={300}
                    style={{ objectFit: "cover" }}
                  />
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    id="add-section-image"
                    {...methods.register(`sections.${index}.sectionImage`)}
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
                  {...methods.register(`sections.${index}.imagePosition`)}
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
                      getSelectedColor={getSelectedColor}
                      setSectionBackgroundColor={setSectionBackgroundColor}
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
                  {...methods.register(`sections.${index}.title`)}
                  onChange={(e) => {
                    setSectionTitle(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <h4 className="mb-3">Description</h4>
                <Controller
                  name={`sections.${index}.sectionDescription`}
                  control={methods.control}
                  render={({
                    field: { onChange, onBlur, value, ref, name },
                  }) => {
                    return (
                      <CKEditor
                        editor={Editor}
                        name={name}
                        data={value}
                        ref={ref}
                        onReady={(editor) => {
                          // console.log("ready");
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          onChange(data);
                        }}
                        onBlur={(event, editor) => {
                          // console.log("Blur.", editor);
                          onBlur();
                        }}
                        onFocus={(event, editor) => {
                          // console.log("Focus.", editor);
                        }}
                      />
                    );
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <h4 className="mb-3">Button Text</h4>
                <input
                  type="text"
                  className="form-control input-default px-2 mb-3"
                  placeholder="Enter title"
                  {...methods.register(`sections.${index}.buttonText`)}
                />
              </div>
              <div className="form-group mt-3">
                <h4 className="mb-3">Button URL</h4>
                <input
                  type="text"
                  className="form-control input-default px-2 mb-3"
                  placeholder="Button URL"
                  {...methods.register(`sections.${index}.buttonURL`)}
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
