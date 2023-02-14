import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Table, Card, Dropdown, Button } from "react-bootstrap";
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
import { useDispatch, useSelector } from "react-redux";
import { togglePagePinned } from "../../../../store/actions/PagesActions";
import {
  useTable,
  useRowSelect,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";

const PagesTable = ({ searchQuery, setPages }) => {
  const dispatch = useDispatch();

  const { pages } = useSelector((state) => state.pages);

  // Memoize pages provided to the table
  const data = useMemo(() => pages, [pages]);

  // Define column titles
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        Cell: ({ value }) => {
          return <strong>{value}</strong>;
        },
      },
      {
        Header: "Author",
        accessor: "author",
        Cell: ({ value }) => (
          <div className="d-flex align-items-center">
            <span className="w-space-no">{value}</span>
          </div>
        ),
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: "Category",
        accessor: "category",
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: "Pinned",
        accessor: "pinned",
        Cell: ({ cell }) => {
          return (
            <div
              role="button"
              className="d-flex align-items-center"
              onClick={() => {
                togglePinned(cell.row.original.id);
              }}
            >
              {
                <>
                  <i
                    className={`fa fa-circle ${
                      cell.value ? "text-success" : "text-danger"
                    } mr-1`}
                  ></i>
                  {cell.value ? "Pinned" : "Not Pinned"}
                </>
              }
            </div>
          );
        },
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ value }) => (
          <div className="d-flex" data-no-dnd="true">
            <Link
              to="/pages/single"
              className="btn btn-primary shadow btn-xs sharp mr-1"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            {/*  to add touch-action css */}
            <Button className="btn btn-danger shadow btn-xs sharp mr-1">
              <i className="fa fa-trash"></i>
            </Button>
            <Button className="btn btn-info shadow btn-xs sharp">
              <i className="fa fa-copy"></i>
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const togglePinned = (id) => {
    dispatch(togglePagePinned(id));
  };

  // Create table instance
  const tableInstance = useTable({ columns, data }, useGlobalFilter);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

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
        <Table responsive {...getTableProps()}>
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
          <tbody {...getTableBodyProps()}>
            <>
              <DndContext collisionDetection={closestCenter}>
                <SortableContext
                  items={pages}
                  strategy={verticalListSortingStrategy}
                >
                  {rows.map((row, index) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </SortableContext>
              </DndContext>
            </>
          </tbody>
          <tfoot></tfoot>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PagesTable;
