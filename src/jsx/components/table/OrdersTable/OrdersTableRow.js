import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import dayjs from "dayjs";
import {
  setPreviewOrder,
  toggleCheckOrder,
} from "../../../../store/actions/OrdersActions";

// import "./PagesTableRow.css";

const OrdersTableRow = ({ order, setModalOpen }) => {
  const { selectedOrders } = useSelector((state) => state.orders);

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

  const selectOrder = () => {
    dispatch(toggleCheckOrder(order.id));
  };

  const isChecked = (id) => {
    return selectedOrders.includes(id);
  };

  const openOrderPreview = () => {
    dispatch(setPreviewOrder(order.id));
    setModalOpen(true);
  };

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox checkbox-success check-lg">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${order.id}`}
            onChange={selectOrder}
            checked={isChecked(order.id)}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${order.id}`}
          ></label>
        </div>
      </td>
      <td>
        <strong>{order.clientInfo.fullName}</strong>
      </td>
      <td>{order.id}</td>
      <td>{order.client}</td>
      <td>{dayjs(order.createdAt).format("DD/MM/YYYY")}</td>
      <td>{`$${order.orderTotal.toFixed(2)}`}</td>
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
          <Button
            className="btn btn-secondary shadow btn-xs sharp"
            onClick={(e) => openOrderPreview(order.id)}
          >
            <i className="fa fa-search"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default OrdersTableRow;
