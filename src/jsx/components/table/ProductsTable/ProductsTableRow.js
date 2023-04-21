import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import {
  editProduct,
  toggleCheckProduct,
  toggleProductPinned,
} from "../../../../store/actions/ProductsActions";

// import "./PagesTableRow.css";

const ProductsTableRow = ({ product }) => {
  const { selectedProducts } = useSelector((state) => state.products);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: !product.pinned && product.id });
  const dispatch = useDispatch();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePageDelete = () => {
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

  const selectPage = () => {
    dispatch(toggleCheckProduct(product.id));
  };

  const isChecked = (id) => {
    return selectedProducts.includes(id);
  };

  const togglePinned = () => {
    dispatch(toggleProductPinned(product.id));
  };

  const handleEditProduct = () => {
    dispatch(editProduct(product.id));
  };

  return (
    <tr
      key={product.id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <td>
        <div className="custom-control custom-checkbox checkbox-success check-lg">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${product.id}`}
            onChange={selectPage}
            checked={isChecked(product.id)}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${product.id}`}
          >
            <MenuIcon className="ml-3" />
          </label>
        </div>
      </td>
      <td>
        <strong>{product.title}</strong>
      </td>
      <td>{product.date} </td>
      <td>{product.category}</td>
      <td onClick={togglePinned}>
        <div className="d-flex align-items-center">
          {
            <>
              <i
                className={`fa fa-circle ${
                  product.pinned ? "text-success" : "text-danger"
                } mr-1`}
              ></i>
              {product.pinned ? "Pinned" : "Not Pinned"}
            </>
          }
        </div>
      </td>
      <td data-no-dnd="true">
        <div className="d-flex">
          <Link
            to={`/products/${product.id}`}
            className="btn btn-primary shadow btn-xs sharp mr-1"
            onClick={handleEditProduct}
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

export default ProductsTableRow;
