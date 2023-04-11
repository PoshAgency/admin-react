import React from "react";
import { Table, Card, Dropdown } from "react-bootstrap";
import MetarialDate from "../../Forms/Pickers/MetarialDate";

import OrdersTableRow from "./OrdersTableRow";
import { useDispatch, useSelector } from "react-redux";
import {
  deselectAllOrders,
  toggleSelectAllOrders,
} from "../../../../store/actions/OrdersActions";

const OrdersTable = ({ orders }) => {
  const { selectedOrders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const handleAllOrders = () => {
    dispatch(toggleSelectAllOrders());
  };

  const handleDeselectAllOrders = () => {
    dispatch(deselectAllOrders());
  };

  // // PAGINATION
  // const sort = 3;
  // let jobPagination = Array(Math.ceil(pages.length / sort))
  //   .fill()
  //   .map((_, i) => i + 1);

  // const activePag = useRef(0);
  // const jobData = useRef(
  //   pages.slice(activePag.current * sort, (activePag.current + 1) * sort)
  // );

  // const onClick = (i) => {
  //   activePag.current = i;

  //   jobData.current = pages.slice(
  //     activePag.current * sort,
  //     (activePag.current + 1) * sort
  //   );
  // };

  return (
    <Card className="w-100">
      <Card.Header className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Card.Title>Sales</Card.Title>
          <div
            className={`${
              selectedOrders.length ? "visible" : "invisible"
            } d-flex align-items-center`}
          >
            <h5
              className="inline-block mb-0 ml-5 mt-1"
              onClick={handleDeselectAllOrders}
              role="button"
            >
              Deselect ({selectedOrders.length})
            </h5>
            <h5
              className="inline-block mb-0 ml-3 mt-1 d-flex align-items-center"
              role="button"
            >
              <span>
                <i
                  className="las la-trash"
                  style={{ fontSize: "1.4rem", color: "red" }}
                ></i>
              </span>
              Delete ({selectedOrders.length})
            </h5>
          </div>
        </div>
        <div className="d-flex  align-items-center">
          <MetarialDate />
          <div className="basic-dropdown ml-3">
            <Dropdown>
              <Dropdown.Toggle variant="transparent">Sort By</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#"
                  className="d-flex justify-content-between"
                >
                  Date Added
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="d-flex justify-content-between"
                >
                  Ascending
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="d-flex justify-content-between"
                >
                  Descending
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
                    onChange={handleAllOrders}
                    checked={
                      selectedOrders.length === orders.length &&
                      orders.length > 0
                    }
                    disabled={orders.length === 0}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="checkAll"
                  ></label>
                </div>
              </th>
              <th>
                <strong>Full Name</strong>
              </th>
              <th>
                <strong>ID</strong>
              </th>
              <th>
                <strong>Email</strong>
              </th>
              <th>
                <strong>Created</strong>
              </th>
              <th>
                <strong>Total</strong>
              </th>
              <th>
                <strong>Actions</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return <OrdersTableRow order={order} key={order.id} />;
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default OrdersTable;
