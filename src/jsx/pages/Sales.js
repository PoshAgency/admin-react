import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SalesTable from "../components/table/SalesTable/SalesTable";
import { removeSelectedSale } from "../../store/actions/SalesActions";

const Sales = () => {
  const dispatch = useDispatch();
  const { sales } = useSelector((state) => state.sales);
  const [filteredSales, setFilteredSales] = useState(sales);

  const searchSales = (e) => {
    if (!e.target.value) {
      setFilteredSales(sales);
    } else {
      setFilteredSales(
        sales.filter(
          (sale) =>
            sale.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            sale.type.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    return () => dispatch(removeSelectedSale());
  }, [dispatch]);

  return (
    <>
      <div className="row d-flex justify-content-end">
        <Link to="/sales/new">
          <Button variant="primary" className="btn">
            New Sale
          </Button>
        </Link>
      </div>
      <div className="row mt-5">
        <div className="col d-flex align-items-center">
          <h4 className="mb-0">{`${filteredSales.length} ${
            filteredSales.length === 1 ? "Sale" : "Sales"
          }`}</h4>
        </div>
        <div className="col d-flex justify-content-end px-0">
          <div className="input-group search-area w-75">
            <input
              type="text"
              className="form-control"
              placeholder="Search sales"
              onChange={searchSales}
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex flex-wrap mt-5">
        <SalesTable sales={filteredSales} setSales={setFilteredSales} />
      </div>
    </>
  );
};

export default Sales;
