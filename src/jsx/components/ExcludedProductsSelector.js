import React, { useEffect, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import Select from "react-select";
import CouponItem from "./CouponItem";

// const CustomOption = ({ innerProps, isDisabled }) =>
//   !isDisabled ? <div {...innerProps}>{`test`}</div> : null;

const ExcludedProductsSelector = ({ name, title }) => {
  const { control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "excludedProducts",
  });
  const [value, setValue] = useState("");
  const { products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const applyToCategory = watch("applyToCategory");

  useEffect(() => {
    setFilteredProducts((prevState) =>
      products.filter((product) => product.category === applyToCategory)
    );
  }, [applyToCategory, products]);

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
          options={filteredProducts.length > 0 ? filteredProducts : products}
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

export default ExcludedProductsSelector;
