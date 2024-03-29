import {
  DESELECT_ALL_CONTACTS,
  EDIT_CONTACT,
  REMOVE_SELECTED_CONTACT,
  TOGGLE_CHECK_CONTACT,
  TOGGLE_SELECT_ALL_CONTACTS,
} from "../actions/NewsletterTypes";

export function toggleCheckContact(id) {
  return {
    type: TOGGLE_CHECK_CONTACT,
    payload: { id },
  };
}

export function toggleSelectAllContacts() {
  return {
    type: TOGGLE_SELECT_ALL_CONTACTS,
  };
}

export function deselectAllContacts() {
  return {
    type: DESELECT_ALL_CONTACTS,
  };
}

export function editContact(id) {
  return { type: EDIT_CONTACT, payload: { id } };
}

export function removeSelectedContact() {
  return { type: REMOVE_SELECTED_CONTACT };
}
