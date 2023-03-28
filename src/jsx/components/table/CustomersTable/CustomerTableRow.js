import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckCustomer } from "../../../../store/actions/CustomersActions";

// import "./PagesTableRow.css";

const CustomerTableRow = ({ customer }) => {
  const { selectedCustomers } = useSelector((state) => state.customers);

  const dispatch = useDispatch();

  const handleCustomerDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Selected product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Selected product is safe!");
      }
    });
  };

  const selectTeamMember = () => {
    dispatch(toggleCheckCustomer(customer.id));
  };

  const isChecked = (id) => {
    return selectedCustomers.includes(id);
  };

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox checkbox-success check-lg">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${customer.id}`}
            onChange={selectTeamMember}
            checked={isChecked(customer.id)}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${customer.id}`}
          ></label>
        </div>
      </td>
      <td>
        <strong>{customer.fullName}</strong>
      </td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>{`${customer.address}, ${customer.postalCode} ${customer.city}, ${customer.country}`}</td>
      <td data-no-dnd="true">
        <div className="d-flex">
          <Link
            to="/customers/single"
            className="btn btn-primary shadow btn-xs sharp mr-1"
          >
            <i className="fa fa-pencil"></i>
          </Link>
          {/*  to add touch-action css */}
          <Button
            onClick={handleCustomerDelete}
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

export default CustomerTableRow;
