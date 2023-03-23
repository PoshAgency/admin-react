import React from "react";
import { Button } from "react-bootstrap";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import Select from "react-select";
import slugify from "slugify";

const titles = [
  {
    title:
      "The European Health Data Space: A new catalyst for medical innovation",
  },
  {
    title: "IBM: Artificial Intelligence and Research Projects",
  },
  {
    title: "INTERPOL CKE as Privanova’s Dissemination Platform for LEAs",
  },
  {
    title: "Horizon Europe Data Management Plan from an Ethics Perspective",
  },
  {
    title: "Privacy Impact Assessments for H2020 Projects",
  },
  {
    title:
      "Opinion on the European Gambling and Betting Association’s draft Code of Conduct",
  },
  {
    title: "CC-DRIVER Kickoff Meeting",
  },
  {
    title: "MARVEL Kick-off Meeting",
  },
  {
    title: "Living-in.EU: Digital Transformation in the European Cities",
  },
  {
    title: "Privanova – INTERPOL Cybercrime Knowledge Exchange Member",
  },
];

const generateBlogLinks = () => {
  return titles.map((title) => ({
    label: title.title,
    value: `http://theposh.agency/${slugify(title.title.toLocaleLowerCase())}`,
  }));
};

const CustomClearIndicator = (props) => {
  const {
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;

  const handleClick = (event) => {
    // add your custom clear button logic here
    console.log("Clear button clicked!");
    props.clearValue();
  };

  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles("clearIndicator", props)}
      onClick={handleClick}
    >
      {/* add your custom clear button icon here */}
      &#x2715;
    </div>
  );
};

const customComponents = {
  CustomClearIndicator,
};

const BlogRelatedLinks = ({ control }) => {
  const methods = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "related",
  });

  const addNewRelatedLink = () => {
    append({ label: "", value: "" });
  };

  const removeLink = (index) => {
    remove(index);
  };

  const removeRelatedLinks = () => {
    remove();
  };

  const options = generateBlogLinks();

  return (
    <div className="col">
      <div className="d-flex justify-content-between mb-3">
        <h3>Related blogs</h3>
        <div>
          <Button
            variant="light"
            className="btn-sm mr-3"
            onClick={() => addNewRelatedLink(null)}
          >
            Add link
          </Button>
          <Button
            variant="light"
            className="btn-sm"
            onClick={removeRelatedLinks}
          >
            Remove all
          </Button>
        </div>
      </div>
      <div>
        {!fields.length ? (
          <h4 className="mt-4 pl-4">List is empty.</h4>
        ) : (
          fields.map((field, index) => (
            <div className="mt-2 d-flex align-items-center" key={index}>
              <Controller
                name={`related.${index}`}
                control={methods.control}
                render={({ field: { onChange, value, ref, name } }) => (
                  <Select
                    className="mr-2 w-100"
                    components={customComponents}
                    ref={ref}
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder="Add related blog"
                    isSearchable={true}
                    // isClearable={removeLink}
                    options={options}
                  />
                )}
              />
              <Button onClick={() => removeLink(index)} variant="danger">
                Remove
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogRelatedLinks;
