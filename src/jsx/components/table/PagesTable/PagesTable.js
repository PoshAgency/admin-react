import React, { useMemo, useRef, forwardRef } from "react";
import { Table, Card, Dropdown } from "react-bootstrap";
import MetarialDate from "../../Forms/Pickers/MetarialDate";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import PagesTableRow from "./PagesTableRow";
import { useDispatch, useSelector } from "react-redux";
import {
  deselectAllPages,
  toggleSelectAllPages,
} from "../../../../store/actions/PagesActions";
import { useTable, useRowSelect } from "react-table";

const PagesTable = ({ pages, setPages }) => {
  // Memoize pages provided to the table
  const data = useMemo(() => pages, [pages]);
  // Define column titles
  const columns = useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Author", accessor: "author" },
      { Header: "Date", accessor: "date" },
      { Header: "Category", accessor: "category" },
      { Header: "Status", accessor: "status" },
      { Header: "Actions", accessor: "actions" },
    ],
    []
  );

  const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {}
  );

  // Create table instance
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Card className="w-100">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>Pages</Card.Title>
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
        <Table responsive {...getTableBodyProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            <>
              <DndContext collisionDetection={closestCenter}>
                <SortableContext
                  items={pages}
                  strategy={verticalListSortingStrategy}
                >
                  {pages.map((page, index) => (
                    <PagesTableRow page={page} key={index} />
                  ))}
                </SortableContext>
              </DndContext>
            </>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PagesTable;
