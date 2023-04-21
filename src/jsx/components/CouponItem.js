import React from "react";
import { Button } from "react-bootstrap";

const CouponItem = ({ item, remove }) => {
  const removeFromExcludedItems = () => {
    remove(item.id);
  };

  return (
    <div className="d-flex align-items-center mt-3">
      <div>
        <img src={item.mobileImage} alt={item.title} width={48} height={48} />
      </div>
      <div className="d-flex justify-content-between w-100">
        <h4 className="ml-3 mb-0">{item.title}</h4>
        <Button
          className="btn btn-danger shadow btn-xs sharp mr-2"
          onClick={removeFromExcludedItems}
        >
          <i className="fa fa-trash"></i>
        </Button>
      </div>
    </div>
  );
};

export default CouponItem;
