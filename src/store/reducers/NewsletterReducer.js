import { newsletterContacts } from "../../data/newsletterContacts";
import {
  DESELECT_ALL_CONTACTS,
  TOGGLE_CHECK_CONTACT,
  TOGGLE_SELECT_ALL_CONTACTS,
} from "../actions/NewsletterTypes";

const initialState = {
  emailList: newsletterContacts,
  selectedContacts: [],
};

export default function NewsletterReducer(state = initialState, action) {
  if (action.type === TOGGLE_CHECK_CONTACT) {
    const contactIndex = state.selectedContacts.findIndex(
      (contact) => contact === action.payload.id
    );

    let newSelectedContacts = [...state.selectedContacts];

    if (contactIndex !== -1) {
      newSelectedContacts = state.selectedContacts.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedContacts.push(action.payload.id);
    }

    return {
      ...state,
      selectedContacts: newSelectedContacts,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_CONTACTS) {
    let newSelectedContactsArray = [];

    if (state.emailList.length > state.selectedContacts.length) {
      newSelectedContactsArray = state.emailList.map((contact) => contact.id);
    }

    return { ...state, selectedContacts: newSelectedContactsArray };
  }

  if (action.type === DESELECT_ALL_CONTACTS) {
    return { ...state, selectedContacts: [] };
  }

  return state;
}
