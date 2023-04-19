import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import swal from "sweetalert";
import { toggleCheckMessage } from "../../../../store/actions/MessagesActions";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const MessagesTableRow = ({ message }) => {
  const { selectedMessages } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  const handleMessageDelete = () => {
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

  const selectMessage = () => {
    dispatch(toggleCheckMessage(message.id));
  };

  const isChecked = (id) => {
    return selectedMessages.includes(id);
  };

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox checkbox-success check-lg">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${message.id}`}
            onChange={selectMessage}
            checked={isChecked(message.id)}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${message.id}`}
          >
            <MenuIcon className="ml-3" />
          </label>
        </div>
      </td>
      <td>
        <strong>{message.title}</strong>
      </td>
      <td>{message.slug}</td>
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
            onClick={handleMessageDelete}
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

export default MessagesTableRow;
