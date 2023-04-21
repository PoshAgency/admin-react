import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  deselectAllBlogs,
  toggleSelectAllBlogs,
} from "../../../../store/actions/BlogsActions";
import BlogsTableRow from "./BlogsTableRow";
import TablePagination from "../../TablePagination";

const PagesTable = ({ blogs, setBlogs }) => {
  const { selectedBlogs } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();

  const handleAllPages = () => {
    dispatch(toggleSelectAllBlogs());
  };

  const handleDeselectAllPages = () => {
    dispatch(deselectAllBlogs());
  };

  // prevent firing drag and drop element before moving more than 8px
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // handle droping dragged element
  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id !== over.id) {
      setBlogs((prevState) => {
        const activeIndex = blogs.map((page) => page.id).indexOf(active.id);
        const overIndex = blogs.map((page) => page.id).indexOf(over.id);

        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

  // // PAGINATION
  // const sort = 3;
  // let jobPagination = Array(Math.ceil(blogs.length / sort))
  //   .fill()
  //   .map((_, i) => i + 1);

  // const activePag = useRef(0);
  // const jobData = useRef(
  //   blogs.slice(activePag.current * sort, (activePag.current + 1) * sort)
  // );

  // const onClick = (i) => {
  //   activePag.current = i;

  //   jobData.current = blogs.slice(
  //     activePag.current * sort,
  //     (activePag.current + 1) * sort
  //   );
  // };

  return (
    <Card className="w-100">
      <Card.Header className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Card.Title>Blogs</Card.Title>
          <div
            className={`${
              selectedBlogs.length ? "visible" : "invisible"
            } d-flex align-items-center`}
          >
            <h5
              className="inline-block mb-0 ml-5 mt-1"
              onClick={handleDeselectAllPages}
              role="button"
            >
              Deselect ({selectedBlogs.length})
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
              Delete ({selectedBlogs.length})
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
                    onChange={handleAllPages}
                    checked={
                      selectedBlogs.length === blogs.length && blogs.length > 0
                    }
                    disabled={blogs.length === 0}
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
            <>
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                sensors={sensors}
              >
                <SortableContext
                  items={blogs}
                  strategy={verticalListSortingStrategy}
                >
                  {blogs.map((blog, index) => (
                    <BlogsTableRow blog={blog} key={index} />
                  ))}
                </SortableContext>
              </DndContext>
            </>
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

export default PagesTable;
