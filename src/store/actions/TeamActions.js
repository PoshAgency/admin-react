import {
  TOGGLE_PINNED_TEAM_MEMBER,
  TOGGLE_CHECK_TEAM_MEMBER,
  DESELECT_ALL_TEAM_MEMBERS,
  TOGGLE_SELECT_ALL_TEAM_MEMBERS,
  REMOVE_SELECTED_TEAM_MEMBER,
} from "./TeamTypes";

export function toggleTeamMemberPinned(id) {
  return {
    type: TOGGLE_PINNED_TEAM_MEMBER,
    payload: { id },
  };
}

export function toggleCheckTeamMember(id) {
  return {
    type: TOGGLE_CHECK_TEAM_MEMBER,
    payload: { id },
  };
}

export function toggleSelectAllTeamMembers() {
  return {
    type: TOGGLE_SELECT_ALL_TEAM_MEMBERS,
  };
}

export function deselectAllTeamMembers() {
  return {
    type: DESELECT_ALL_TEAM_MEMBERS,
  };
}

export function removeSelectedTeamMember() {
  return {
    type: REMOVE_SELECTED_TEAM_MEMBER,
  };
}
