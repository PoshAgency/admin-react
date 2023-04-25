import {
  TOGGLE_PINNED_PAGE,
  TOGGLE_CHECK_PAGE,
  DESELECT_ALL_PAGES,
  TOGGLE_SELECT_ALL_PAGES,
  EDIT_PAGE,
  REMOVE_SELECTED_PAGE,
} from "../actions/PagesTypes";
import { pages } from "../../data/pages";

const initialState = {
  pages,
  selectedPages: [],
  selectedPage: {},
};

export default function PagesReducer(state = initialState, action) {
  if (action.type === TOGGLE_PINNED_PAGE) {
    const pages = [...state.pages];
    const pageIndex = pages.findIndex((page) => action.payload.id === page.id);

    pages[pageIndex].pinned = !pages[pageIndex].pinned;

    return { ...state, pages };
  }

  if (action.type === TOGGLE_CHECK_PAGE) {
    const pageIndex = state.selectedPages.findIndex(
      (page) => page === action.payload.id
    );

    let newSelectedPages = [...state.selectedPages];

    if (pageIndex !== -1) {
      newSelectedPages = state.selectedPages.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedPages.push(action.payload.id);
    }

    return {
      ...state,
      selectedPages: newSelectedPages,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_PAGES) {
    let newSelectedPagesArray = [];

    if (state.pages.length > state.selectedPages.length) {
      newSelectedPagesArray = state.pages.map((page) => page.id);
    }

    return { ...state, selectedPages: newSelectedPagesArray };
  }

  if (action.type === DESELECT_ALL_PAGES) {
    return { ...state, selectedPages: [] };
  }

  if (action.type === EDIT_PAGE) {
    const selectedPage = state.pages.find(
      (page) => page.id === action.payload.id
    );

    return { ...state, selectedPage };
  }

  if (action.type === REMOVE_SELECTED_PAGE) {
    return { ...state, selectedPage: {} };
  }

  return state;
}
