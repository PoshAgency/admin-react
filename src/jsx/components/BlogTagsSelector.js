import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

const BlogTagsSelector = ({ methods, title, name }) => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState([]);

  const options = [
    { label: "News", value: "news", __isNew__: true },
    { label: "Insights", value: "insights", __isNew__: true },
    { label: "Research", value: "research", __isNew__: true },
    { label: "Reports", value: "report", __isNew__: true },
  ];

  const components = {
    DropdownIndicator: null,
  };

  useEffect(() => {
    methods.setValue(name, value);
  }, [value, methods, name]);

  const createOption = (label) => ({
    label: label.replace(/./, (c) => c.toUpperCase()),
    value: label,
  });

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();

        break;
      default:
        return null;
    }
  };

  return (
    <div className="mt-3">
      <h3 className="mb-3">{title}</h3>
      <CreatableSelect
        options={options}
        isMulti
        isClearable
        components={components}
        onChange={(newValue) => setValue(newValue)}
        onInputChange={(newValue) => setInputValue(newValue)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Create or select existing tags"
        value={value}
      />
    </div>
  );
};

export default BlogTagsSelector;
