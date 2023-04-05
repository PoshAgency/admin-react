import React, { useEffect, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import Select from "react-select";
import ExcludedItem from "./ExcludedItem";

// const CustomOption = ({ innerProps, isDisabled }) =>
//   !isDisabled ? <div {...innerProps}>{`test`}</div> : null;

const CouponProductSelector = ({ applyToCategory }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "excludedItems",
  });
  const [value, setValue] = useState("");
  const { products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts((prevState) =>
      products.filter((product) => product.category === applyToCategory)
    );
  }, [applyToCategory, products]);

  const handleChange = (selectedOption) => {
    append(selectedOption);

    console.log(fields);
    setValue(null);
  };

  return (
    <>
      <div>
        <Select
          getOptionLabel={(option) => option.title}
          getOptionValue={(option) => option.id}
          onChange={handleChange}
          value={value}
          placeholder="Search products"
          options={filteredProducts.length > 0 ? filteredProducts : products}
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
