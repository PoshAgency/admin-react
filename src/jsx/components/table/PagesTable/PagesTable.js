import React, { useRef } from "react";
import { Table, Card, Dropdown } from "react-bootstrap";
import MetarialDate from "../../Forms/Pickers/MetarialDate";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import PagesTableRow from "./PagesTableRow";

const PagesTable = ({ pages, setPages }) => {
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

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id !== over.id) {
      setPages((prevState) => {
        const activeIndex = pages.map((page) => page.id).indexOf(active.id);
        const overIndex = pages.map((page) => page.id).indexOf(over.id);

        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

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
              {/* <th>
                <strong>Status</strong>
              </th> */}
              <th>
                <strong>Actions</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <>
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={pages}
                  strategy={verticalListSortingStrategy}
                >
                  {pages.map((page, index) => (
                    <PagesTableRow page={page} index={index} />
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
