import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const TablePagination = ({ size, gutter, variant, bg, circle }) => {
  const active = 1;
  let items = [];

  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <section className="mb-3 d-flex px-4 justify-content-between align-items-center">
      <div>
        <p className="mb-0">Showing 10 items of 100</p>
      </div>
      <Pagination
        size={size}
        className={`${gutter ? "pagination-gutter" : ""} ${
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
    </section>
  );
};

export default TablePagination;
