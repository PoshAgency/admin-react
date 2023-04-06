import React, { useEffect, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import Select from "react-select";
import ExcludedItem from "./ExcludedItem";

// const CustomOption = ({ innerProps, isDisabled }) =>
//   !isDisabled ? <div {...innerProps}>{`test`}</div> : null;

const CouponProductSelector = ({ name, title }) => {
  const { control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "couponProducts",
  });
  const [value, setValue] = useState("");
  const { products } = useSelector((state) => state.products);

  const handleChange = (selectedOption) => {
    append(selectedOption);

    setValue(null);
  };

  return (
    <>
      <div>
        <h4>Excluded products</h4>
        <Select
          getOptionLabel={(option) => option.title}
          getOptionValue={(option) => option.id}
          onChange={handleChange}
          value={value}
          placeholder="Search products"
          options={products}
        />
      </div>
      <div>
        {fields.map((item) => (
          <ExcludedItem item={item} key={item.id} remove={remove} />
        ))}
      </div>
    </>
  );
};

export default CouponProductSelector;
