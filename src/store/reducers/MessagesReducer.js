import {
  TOGGLE_CHECK_MESSAGE,
  DESELECT_ALL_MESSAGES,
  TOGGLE_SELECT_ALL_MESSAGES,
} from "../actions/MessagesActions";

import { messages } from "../../data/messages";

const initialState = { messages: messages, selectedMessages: [] };

export default function MessagesReducer(state = initialState, action) {
  if (action.type === TOGGLE_CHECK_MESSAGE) {
    const messageIndex = state.messages.findIndex(
      (message) => message === action.payload.id
    );

    let newSelectedMessages = [...state.selectedMessages];

    if (messageIndex !== -1) {
      newSelectedMessages = state.selectedMessages.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedMessages.push(action.payload.id);
    }

    return {
      ...state,
      selectedMessages: newSelectedMessages,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_MESSAGES) {
    let newSelectedMessagesArray = [];

    if (state.messages.length > state.selectedMessages.length) {
      newSelectedMessagesArray = state.messages.map((template) => template.id);
    }

    return { ...state, selectedMessages: newSelectedMessagesArray };
  }

  if (action.type === DESELECT_ALL_MESSAGES) {
    return { ...state, selectedMessages: [] };
  }

  return state;
}
