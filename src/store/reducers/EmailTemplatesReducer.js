import {
  TOGGLE_CHECK_EMAIL_TEMPLATE,
  DESELECT_ALL_EMAIL_TEMPLATES,
  TOGGLE_SELECT_ALL_EMAIL_TEMPLATES,
  EDIT_EMAIL_TEMPLATE,
  REMOVE_SELECTED_EMAIL_TEMPLATE,
} from "../actions/EmailTemplatesTypes";

import { emailTemplates } from "../../data/emailTemplates";

const initialState = {
  emailTemplates: emailTemplates,
  selectedTemplates: [],
  selectedEmailTemplate: null,
};

export default function EmailTemplatesReducers(state = initialState, action) {
  if (action.type === TOGGLE_CHECK_EMAIL_TEMPLATE) {
    const templateIndex = state.selectedTemplates.findIndex(
      (template) => template === action.payload.id
    );

    let newSelectedTemplates = [...state.selectedTemplates];

    if (templateIndex !== -1) {
      newSelectedTemplates = state.selectedTemplates.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedTemplates.push(action.payload.id);
    }

    return {
      ...state,
      selectedTemplates: newSelectedTemplates,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_EMAIL_TEMPLATES) {
    let newSelectedTemplatesArray = [];

    if (state.emailTemplates.length > state.selectedTemplates.length) {
      newSelectedTemplatesArray = state.emailTemplates.map(
        (template) => template.id
      );
    }

    return { ...state, selectedTemplates: newSelectedTemplatesArray };
  }

  if (action.type === DESELECT_ALL_EMAIL_TEMPLATES) {
    return { ...state, selectedTemplates: [] };
  }

  if (action.type === EDIT_EMAIL_TEMPLATE) {
    const selectedEmailTemplate = state.emailTemplates.find(
      (template) => template.id === action.payload.id
    );

    return { ...state, selectedEmailTemplate };
  }

  if (action.type === REMOVE_SELECTED_EMAIL_TEMPLATE) {
    return {
      ...state,
      selectedEmailTemplate: null,
    };
  }

  return state;
}
