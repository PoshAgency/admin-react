import React, { useRef } from "react";
import { Table, Pagination, Badge, Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import data from "./tableData.js";

import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import { pages } from "../../../data/pages.js";

const PagesTable = () => {
  const sort = 3;
  let jobPagination = Array(Math.ceil(data.patientTable.data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const activePag = useRef(0);
  const jobData = useRef(
    data.patientTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    )
  );
  //const [demo, setdemo] = useState();
  const onClick = (i) => {
    activePag.current = i;

    jobData.current = data.patientTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    );
    /* setdemo(
         data.patientTable.data.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
         )
      ); */
  };

  console.log(pages);

  return (
    <Table responsive>
      <thead>
        <tr>
          <th className="width50">
            <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="checkAll"
                required=""
              />
              <label
                className="custom-control-label"
                htmlFor="checkAll"
              ></label>
            </div>
          </th>

          <th>
            <strong>Title</strong>
          </th>
          <th>
            <strong>Author</strong>
          </th>
          <th>
            <strong>Date</strong>
          </th>
          <th>
            <strong>Category</strong>
          </th>
          <th>
            <strong>Status</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {pages.map((page, index) => (
          <tr>
            <td>
              <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheckBox2"
                  required=""
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheckBox2"
                ></label>
              </div>
            </td>
            <td>
              <strong>{page.title}</strong>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="w-space-no">{page.author}</span>
              </div>
            </td>
            <td>{page.date} </td>
            <td>{page.category}</td>
            <td>
              <div className="d-flex align-items-center">
                {
                  <>
                    <i
                      className={`fa fa-circle ${
                        page.active ? "text-success" : "text-danger"
                      } mr-1`}
                    ></i>
                    {page.active ? "Active" : "Inactive"}
                  </>
                }
              </div>
            </td>
            <td>
              <div className="d-flex">
                <Link
                  href="#"
                  className="btn btn-primary shadow btn-xs sharp mr-1"
                >
                  <i className="fa fa-pencil"></i>
                </Link>
                <Link href="#" className="btn btn-danger shadow btn-xs sharp">
                  <i className="fa fa-trash"></i>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PagesTable;
