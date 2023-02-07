import React, { useRef } from "react";
import { Table, Card, Dropdown } from "react-bootstrap";
import MetarialDate from "../../components/Forms/Pickers/MetarialDate";

import { Link } from "react-router-dom";

const PagesTable = ({ pages }) => {
  const sort = 3;

  let pagesPagination = Array(Math.ceil(pages.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const activePag = useRef(0);

  const pagesData = useRef(
    pages.slice(activePag.current * sort, (activePag.current + 1) * sort)
  );

  const onClick = (i) => {
    activePag.current = i;

    pagesData = pages.slice(
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

  return (
    <Card className="w-100">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>Pages</Card.Title>
        <div className="d-flex  align-items-center">
          <MetarialDate />
          <div className="basic-dropdown ml-3">
            <Dropdown>
              <Dropdown.Toggle variant="transparent">Sort</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#"
                  className="d-flex justify-content-between"
                >
                  Title{" "}
                  <span>
                    <i className="fa fa-arrow-down"></i>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="d-flex justify-content-between"
                >
                  Title{" "}
                  <span>
                    <i className="fa fa-arrow-up"></i>
                  </span>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  href="#"
                  className="d-flex justify-content-between"
                >
                  Date{" "}
                  <span>
                    <i className="fa fa-arrow-down"></i>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="d-flex justify-content-between"
                >
                  Date{" "}
                  <span>
                    <i className="fa fa-arrow-up"></i>
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
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
              <th>
                <strong>Actions</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, index) => (
              <tr key={index}>
                <td>
                  <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={`checkbox-${page.id}`}
                      required=""
                      onChange={(e) => {}}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={`checkbox-${page.id}`}
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
                      to="#"
                      className="btn btn-primary shadow btn-xs sharp mr-1"
                    >
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-danger shadow btn-xs sharp mr-1"
                    >
                      <i className="fa fa-trash"></i>
                    </Link>
                    <Link to="#" className="btn btn-info shadow btn-xs sharp">
                      <i className="fa fa-copy"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PagesTable;
