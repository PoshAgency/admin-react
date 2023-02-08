import React from "react";
import { Link } from "react-router-dom";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const PagesTableRow = ({ page, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: page.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      key={index}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <td>
        <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${page.id}`}
            required=""
            onChange={(e) => {}}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${page.id}`}
          ></label>
        </div>
      </td>
      <td>
        <strong>{page.title}</strong>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span className="w-space-no">by: {page.author}</span>
        </div>
      </td>
      <td>{page.date} </td>
      <td>{page.category}</td>
      {/* <td>
        <div className="d-flex align-items-center">
          {
            <>
              <i
                className={`fa fa-circle ${
                  page.active ? "text-success" : "text-danger"
                } mr-1`}
              ></i>
              {page.active ? "Active" : "Inactive"}
            </>
          }
        </div>
      </td> */}
      <td>
        <div className="d-flex">
          <Link
            to="/single-page"
            className="btn btn-primary shadow btn-xs sharp mr-1"
          >
            <i className="fa fa-pencil"></i>
          </Link>
          <Link to="#" className="btn btn-danger shadow btn-xs sharp mr-1">
            <i className="fa fa-trash"></i>
          </Link>
          <Link to="#" className="btn btn-info shadow btn-xs sharp">
            <i className="fa fa-copy"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default PagesTableRow;
