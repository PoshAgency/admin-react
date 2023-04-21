import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleCheckEmailTemplate } from "../../../../store/actions/EmailTemplatesActions";

// import "./PagesTableRow.css";

const EmailTemplatesTableRow = ({ emailTemplate }) => {
  const { selectedTemplates } = useSelector((state) => state.emailTemplates);

  const dispatch = useDispatch();

  const handlePageDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this coupon!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Selected coupon has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Selected coupon is safe!");
      }
    });
  };

  const selectEmailTemplate = () => {
    dispatch(toggleCheckEmailTemplate(emailTemplate.id));
  };

  const isChecked = (id) => {
    return selectedTemplates.includes(id);
  };

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox checkbox-success check-lg">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${emailTemplate.id}`}
            onChange={selectEmailTemplate}
            checked={isChecked(emailTemplate.id)}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${emailTemplate.id}`}
          >
            <MenuIcon className="ml-3" />
          </label>
        </div>
      </td>
      <td>
        <strong>{emailTemplate.title}</strong>
      </td>
      <td>{emailTemplate.slug}</td>
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
          <Button className="btn btn-info shadow btn-xs sharp mr-1">
            <i className="fa fa-copy"></i>
          </Button>
          <Button className="btn btn-secondary shadow btn-xs sharp">
            <i className="fa fa-search"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default EmailTemplatesTableRow;
