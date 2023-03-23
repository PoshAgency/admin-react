import React, { useState } from "react";
import { Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const BlogTagsSelector = ({ control, title, name }) => {
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

  const createOption = (label) => ({
    label: label.replace(/./, (c) => c.toUpperCase()),
    value: label,
  });

  const handleKeyDown = (event, field) => {
    switch (event.key) {
      case "Enter":
      case "Tab":
        if (inputValue === "") return event.preventDefault();
        console.log(inputValue);

        const tagExists =
          field.value !== null &&
          field?.value.findIndex((tag) => tag.value === inputValue);

        if (tagExists > -1) return event.preventDefault();

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
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <CreatableSelect
            {...field}
            options={options}
            isMulti
            isClearable
            components={components}
            onChange={(newValue) => field.onChange(newValue)}
            onInputChange={(newValue) => setInputValue(newValue)}
            onKeyDown={(e) => handleKeyDown(e, field)}
            placeholder="Create or select existing tags"
            value={field.value}
          />
        )}
      />
    </div>
  );
};

export default BlogTagsSelector;
