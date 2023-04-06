import React, { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import Select from "react-select";
import CouponItem from "./CouponItem";

// const CustomOption = ({ innerProps, isDisabled }) =>
//   !isDisabled ? <div {...innerProps}>{`test`}</div> : null;

const CouponProductSelector = ({ name, title }) => {
  const { control } = useFormContext();
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
        <h3>Coupon products</h3>
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
          <CouponItem item={item} key={item.id} remove={remove} />
        ))}
      </div>
    </>
  );
};

export default CouponProductSelector;
