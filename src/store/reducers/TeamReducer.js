import { teamMembers } from "../../data/teamMembers";

import {
  TOGGLE_PINNED_TEAM_MEMBER,
  TOGGLE_CHECK_TEAM_MEMBER,
  DESELECT_ALL_TEAM_MEMBERS,
  TOGGLE_SELECT_ALL_TEAM_MEMBERS,
  REMOVE_SELECTED_TEAM_MEMBER,
  EDIT_TEAM_MEMBER,
} from "../actions/TeamTypes";

const initialState = {
  team: teamMembers,
  selectedTeamMembers: [],
  selectedTeamMember: {},
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

  if (action.type === EDIT_TEAM_MEMBER) {
    const selectedTeamMember = state.team.find(
      (teamMember) => teamMember.id === action.payload.id
    );

    return {
      ...state,
      selectedTeamMember,
    };
  }

  if (action.type === REMOVE_SELECTED_TEAM_MEMBER) {
    return { ...state, selectedTeamMember: {} };
  }

  return state;
}
