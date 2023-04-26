import React from "react";
import { Button } from "react-bootstrap";

const TemplateVariable = ({ field, removeTemplateVariable, index }) => {
  return (
    <div className="d-flex align-items-center mt-2">
      <p className="mb-0">
        {field.variable} - {field.name}
      </p>
      <Button
        className="btn btn-danger shadow btn-xs sharp ml-3"
        onClick={(e) => removeTemplateVariable(index)}
      >
        <i className="fa fa-trash"></i>
      </Button>
    </div>
  );
};

export default TemplateVariable;
