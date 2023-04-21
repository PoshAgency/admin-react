import React from "react";
import MessagesTableRow from "./MessagesTableRow";
import MetarialDate from "../../Forms/Pickers/MetarialDate";

import { Card, Dropdown, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deselectAllMessages,
  toggleSelectAllMessages,
} from "../../../../store/actions/MessagesActions";
import TablePagination from "../../TablePagination";

const MessagesTable = ({ messages }) => {
  const { selectedMessages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handleAllMessages = () => {
    dispatch(toggleSelectAllMessages());
  };

  const handleDeselectAllMessages = () => {
    dispatch(deselectAllMessages());
  };

  return (
    <Card className="w-100">
      <Card.Header className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Card.Title>Coupons</Card.Title>
          <div
            className={`${
              selectedMessages.length ? "visible" : "invisible"
            } d-flex align-items-center`}
          >
            <h5
              className="inline-block mb-0 ml-5 mt-1"
              onClick={handleDeselectAllMessages}
              role="button"
            >
              Deselect ({selectedMessages.length})
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
              Delete ({selectedMessages.length})
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
                    onChange={handleAllMessages}
                    checked={
                      selectedMessages.length === messages.length &&
                      messages.length > 0
                    }
                    disabled={messages.length === 0}
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
                <strong>Slug</strong>
              </th>
              <th>
                <strong>Actions</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <MessagesTableRow message={message} key={message.id} />
            ))}
          </tbody>
        </Table>
        <TablePagination
          size={""}
          gutter={true}
          variant={"primary"}
          bg={false}
          circle={false}
        />
      </Card.Body>
    </Card>
  );
};

export default MessagesTable;
