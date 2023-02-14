import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCheckPage,
  togglePagePinned,
} from "../../../../store/actions/PagesActions";

const PagesTableRow = ({ row, index }) => {
  const { selectedPages } = useSelector((state) => state.pages);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: !row.original.pinned && row.id });
  const dispatch = useDispatch();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePageDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this page!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Selected page has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Selected page is safe!");
      }
    });
  };

  const selectPage = () => {
    dispatch(toggleCheckPage(row.id));
  };

  const isChecked = (id) => {
    return selectedPages.includes(id);
  };

  const togglePinned = () => {
    dispatch(togglePagePinned(row.id));
  };

  return (
    <tr
      key={row.id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      {...row.getRowProps()}
    >
      {/* <td>
        <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${page.id}`}
            onChange={selectPage}
            checked={isChecked(page.id)}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${page.id}`}
          ></label>
        </div>
      </td> */}
      <td>
        <strong>{row.original.title}</strong>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span className="w-space-no">{row.original.author}</span>
        </div>
      </td>
      <td>{row.original.date} </td>
      <td>{row.original.category}</td>
      <td onClick={togglePinned}>
        <div className="d-flex align-items-center">
          {
            <>
              <i
                className={`fa fa-circle ${
                  row.original.pinned ? "text-success" : "text-danger"
                } mr-1`}
              ></i>
              {row.original.pinned ? "Pinned" : "Not Pinned"}
            </>
          }
        </div>
      </td>
      <td data-no-dnd="true">
        <div className="d-flex">
          <Link
            to="/pages/single"
            className="btn btn-primary shadow btn-xs sharp mr-1"
          >
            <i className="fa fa-pencil"></i>
          </Link>
          {/*  to add touch-action css */}
          <Button
            onClick={handlePageDelete}
            className="btn btn-danger shadow btn-xs sharp mr-1"
          >
            <i className="fa fa-trash"></i>
          </Button>
          <Button className="btn btn-info shadow btn-xs sharp">
            <i className="fa fa-copy"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default PagesTableRow;
