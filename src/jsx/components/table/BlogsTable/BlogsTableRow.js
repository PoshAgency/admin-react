import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import {
  editBlog,
  toggleBlogPinned,
  toggleCheckBlog,
} from "../../../../store/actions/BlogsActions";

// import "./PagesTableRow.css";

const BlogsTableRow = ({ blog }) => {
  const { selectedBlogs } = useSelector((state) => state.blogs);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: !blog.pinned && blog.id });
  const dispatch = useDispatch();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePageDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this blog!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Selected blog has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Selected blog is safe!");
      }
    });
  };

  const selectPage = () => {
    dispatch(toggleCheckBlog(blog.id));
  };

  const isChecked = (id) => {
    return selectedBlogs.includes(id);
  };

  const togglePinned = () => {
    dispatch(toggleBlogPinned(blog.id));
  };

  const selectEditBlog = () => {
    dispatch(editBlog(blog.id));
  };

  return (
    <tr
      key={blog.id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <td>
        <div className="custom-control custom-checkbox checkbox-success check-lg">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`checkbox-${blog.id}`}
            onChange={selectPage}
            checked={isChecked(blog.id)}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${blog.id}`}
          >
            <MenuIcon className="ml-3" />
          </label>
        </div>
      </td>
      <td>
        <strong>{blog.title}</strong>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span className="w-space-no">{blog.author}</span>
        </div>
      </td>
      <td>{blog.date} </td>
      <td>{blog.category}</td>
      <td onClick={togglePinned}>
        <div className="d-flex align-items-center">
          {
            <>
              <i
                className={`fa fa-circle ${
                  blog.pinned ? "text-success" : "text-danger"
                } mr-1`}
              ></i>
              {blog.pinned ? "Pinned" : "Not Pinned"}
            </>
          }
        </div>
      </td>
      <td data-no-dnd="true">
        <div className="d-flex">
          <Link
            to={`/blogs/${blog.id}`}
            className="btn btn-primary shadow btn-xs sharp mr-1"
            onClick={selectEditBlog}
          >
            <i className="fa fa-pencil"></i>
          </Link>
          {/*  to add touch-action css */}
          <Button
            onClick={handlePageDelete}
            className="btn btn-danger shadow btn-xs sharp mr-1"
          >
            <i className="fa fa-trash"></i>
          </Button>
          <Button className="btn btn-info shadow btn-xs sharp mr-1">
            <i className="fa fa-copy"></i>
          </Button>
          <Button className="btn btn-secondary shadow btn-xs sharp">
            <i className="fa fa-search"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default BlogsTableRow;
