import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const PagesPagination = (size, gutter, variant, bg, circle) => (
  <Pagination
    size={size}
    className={`mt-4  ${gutter ? "pagination-gutter" : ""} ${
      variant && `pagination-${variant}`
    } ${!bg && "no-bg"} ${circle && "pagination-circle"}`}
  >
    <li className="page-item page-indicator">
      <Link className="page-link" to="#">
        <i className="la la-angle-left" />
      </Link>
    </li>
    {items}
    <li className="page-item page-indicator">
      <Link className="page-link" to="#">
        <i className="la la-angle-right" />
      </Link>
    </li>
  </Pagination>
);

export default PagesPagination;
