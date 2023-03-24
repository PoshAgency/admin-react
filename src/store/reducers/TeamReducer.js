import { v4 as uuid } from "uuid";

import {
  TOGGLE_PINNED_TEAM_MEMBER,
  TOGGLE_CHECK_TEAM_MEMBER,
  DESELECT_ALL_TEAM_MEMBERS,
  TOGGLE_SELECT_ALL_TEAM_MEMBERS,
} from "../actions/TeamTypes";

const initialState = {
  team: [
    {
      title:
        "TEAM The European Health Data Space: A new catalyst for medical innovation",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title:
        "TEAM Horizon Europe Data Management Plan from an Ethics Perspective",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "TEAM Privacy Impact Assessments for H2020 Projects",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title:
        "TEAM Opinion on the European Gambling and Betting Association’s draft Code of Conduct",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "TEAM CC-DRIVER Kickoff Meeting",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "TEAM Living-in.EU: Digital Transformation in the European Cities",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: true,
    },
    {
      title: "TEAM Privanova – INTERPOL Cybercrime Knowledge Exchange Member",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: true,
    },
  ],
  selectedTeamMembers: [],
};

export default function TeamReducer(state = initialState, action) {
  if (action.type === TOGGLE_PINNED_TEAM_MEMBER) {
    const team = [...state.team];
    const teamMemberIndex = team.findIndex(
      (teamMember) => action.payload.id === teamMember.id
    );

    team[teamMemberIndex].pinned = !team[teamMemberIndex].pinned;

    return { ...state, team };
  }

  if (action.type === TOGGLE_CHECK_TEAM_MEMBER) {
    const teamMemberIndex = state.selectedTeamMembers.findIndex(
      (teamMember) => teamMember === action.payload.id
    );

    let newSelectedTeamMembers = [...state.selectedTeamMembers];

    if (teamMemberIndex !== -1) {
      newSelectedTeamMembers = state.selectedTeamMembers.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedTeamMembers.push(action.payload.id);
    }

    return {
      ...state,
      selectedTeamMembers: newSelectedTeamMembers,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_TEAM_MEMBERS) {
    let newSelectedTeamMembersArray = [];

    if (state.team.length > state.selectedTeamMembers.length) {
      newSelectedTeamMembersArray = state.team.map(
        (teamMember) => teamMember.id
      );
    }

    return { ...state, selectedTeamMembers: newSelectedTeamMembersArray };
  }

  if (action.type === DESELECT_ALL_TEAM_MEMBERS) {
    return { ...state, selectedTeamMembers: [] };
  }

  return state;
}
