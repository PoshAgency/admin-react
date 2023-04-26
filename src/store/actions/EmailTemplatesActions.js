import {
  TOGGLE_CHECK_EMAIL_TEMPLATE,
  DESELECT_ALL_EMAIL_TEMPLATES,
  TOGGLE_SELECT_ALL_EMAIL_TEMPLATES,
  EDIT_EMAIL_TEMPLATE,
  REMOVE_SELECTED_EMAIL_TEMPLATE,
} from "./EmailTemplatesTypes";

export function toggleCheckEmailTemplate(id) {
  return {
    type: TOGGLE_CHECK_EMAIL_TEMPLATE,
    payload: { id },
  };
}

export function toggleSelectAllEmailTemplates() {
  return {
    type: TOGGLE_SELECT_ALL_EMAIL_TEMPLATES,
  };
}

export function deselectAllEmailTemplates() {
  return {
    type: DESELECT_ALL_EMAIL_TEMPLATES,
  };
}

export function editEmailTemplate(id) {
  return {
    type: EDIT_EMAIL_TEMPLATE,
    payload: { id },
  };
}

export function removeSelectedEmailTemplate() {
  return {
    type: REMOVE_SELECTED_EMAIL_TEMPLATE,
  };
}
