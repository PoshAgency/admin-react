import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import dayjs from "dayjs";
import {
  editSale,
  toggleCheckSale,
} from "../../../../store/actions/SalesActions";

// import "./PagesTableRow.css";

const SalesTableRow = ({ sale }) => {
  const { selectedSales } = useSelector((state) => state.sales);

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

  const selectSale = () => {
    dispatch(toggleCheckSale(sale.id));
  };

  const isChecked = (id) => {
    return selectedSales.includes(id);
  };

  const handleEditSale = () => {
    dispatch(editSale(sale.id));
  };

  return (
    <tr key={sale.id}>
      <td>
        <div className="custom-control custom-checkbox checkbox-success check-lg">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${sale.id}`}
            onChange={selectSale}
            checked={isChecked(sale.id)}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${sale.id}`}
          >
            <MenuIcon className="ml-3" />
          </label>
        </div>
      </td>
      <td>
        <strong>{sale.title}</strong>
      </td>
      <td>{sale.type}</td>
      <td>{sale.saleParameter}</td>
      <td>{dayjs(sale.startDate).format("DD/MM/YYYY")}</td>
      <td>{dayjs(sale.endDate).format("DD/MM/YYYY")}</td>
      <td data-no-dnd="true">
        <div className="d-flex">
          <Link
            to={`/sales/${sale.id}`}
            className="btn btn-primary shadow btn-xs sharp mr-1"
            onClick={handleEditSale}
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

export default SalesTableRow;
