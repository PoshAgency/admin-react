import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import {
  toggleCheckTeamMember,
  toggleTeamMemberPinned,
} from "../../../../store/actions/TeamActions";

// import "./PagesTableRow.css";

const TeamTableRow = ({ teamMember }) => {
  const { selectedTeamMembers } = useSelector((state) => state.team);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: !teamMember.pinned && teamMember.id });
  const dispatch = useDispatch();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePageDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Selected product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Selected product is safe!");
      }
    });
  };

  const selectTeamMember = () => {
    dispatch(toggleCheckTeamMember(teamMember.id));
  };

  const isChecked = (id) => {
    return selectedTeamMembers.includes(id);
  };

  const togglePinned = () => {
    dispatch(toggleTeamMemberPinned(teamMember.id));
  };

  return (
    <tr
      key={teamMember.id}
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
            id={`checkbox-${teamMember.id}`}
            onChange={selectTeamMember}
            checked={isChecked(teamMember.id)}
          />
          <label
            className="custom-control-label"
            htmlFor={`checkbox-${teamMember.id}`}
          >
            <MenuIcon className="ml-3" />
          </label>
        </div>
      </td>
      <td>
        <strong>{teamMember.fullName}</strong>
      </td>
      {/* <td>
        <div className="d-flex align-items-center">
          <span className="w-space-no">{teamMember.email}</span>
        </div>
      </td> */}
      <td>{teamMember.email}</td>
      <td onClick={togglePinned}>
        <div className="d-flex align-items-center">
          {
            <>
              <i
                className={`fa fa-circle ${
                  teamMember.pinned ? "text-success" : "text-danger"
                } mr-1`}
              ></i>
              {teamMember.pinned ? "Pinned" : "Not Pinned"}
            </>
          }
        </div>
      </td>
      <td data-no-dnd="true">
        <div className="d-flex">
          <Link
            to="/pages/single"
            className="btn btn-primary shadow btn-xs sharp mr-1"
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

export default TeamTableRow;
