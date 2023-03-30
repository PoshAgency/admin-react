import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const MenuEditorForm = () => {
  const values = useSelector((state) => state.menuItems.selectedItem);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "",
      title: "",
      path: "",
      isTitle: false,
      status: "active",
      isExternalLink: false,
    },
    values,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <h3>New Menu Item</h3>
      <p>You can also type in custom Title and URL</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mt-4">
          <h4>Title</h4>
          <input
            {...register("title")}
            type="text"
            className="form-control input-default px-2 mt-3"
            placeholder="Enter page title"
            defaultValue=""
            onChange={(e) => {}}
          />
        </div>
        <div className="form-group mt-4">
          <h4>Path</h4>
          <input
            {...register("path")}
            type="text"
            className="form-control input-default px-2 mt-3"
            placeholder="Enter path"
            defaultValue=""
            onChange={(e) => {}}
          />
          <p className="mt-2">
            Info: if contains https, http or www - url will open in new tab
          </p>
        </div>
        <div className="custom-control custom-checkbox checkbox-success check-lg">
          <input
            type="checkbox"
            {...register("isTitle")}
            className="custom-control-input"
            id={`menu-item-title`}
          />
          <label className="custom-control-label" htmlFor={`menu-item-title`}>
            <p className="ml-2">Title</p>
          </label>
        </div>
        <div className="custom-control custom-checkbox checkbox-success check-lg">
          <input
            type="checkbox"
            {...register("isExternalLink")}
            className="custom-control-input"
            id={`menu-item-external-link`}
          />
          <label
            className="custom-control-label"
            htmlFor={`menu-item-external-link`}
          >
            <p className="ml-2 mb-0">External link</p>
          </label>
        </div>
        <div className="form-group mt-3">
          <h4 className="">Status</h4>
          <select className="form-control mt-3" {...register("status")}>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default MenuEditorForm;
