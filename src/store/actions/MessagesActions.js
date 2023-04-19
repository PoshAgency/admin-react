import {
  TOGGLE_CHECK_MESSAGE,
  DESELECT_ALL_MESSAGES,
  TOGGLE_SELECT_ALL_MESSAGES,
} from "./MessagesTypes";

export function toggleCheckMessage(id) {
  return {
    type: TOGGLE_CHECK_MESSAGE,
    payload: { id },
  };
}

export function toggleSelectAllMessages() {
  return {
    type: TOGGLE_SELECT_ALL_MESSAGES,
  };
}

export function deselectAllMessages() {
  return {
    type: DESELECT_ALL_MESSAGES,
  };
}
