import {
  TOGGLE_CHECK_PAGE,
  TOGGLE_PINNED_PAGE,
  DESELECT_ALL_PAGES,
  TOGGLE_SELECT_ALL_PAGES,
} from "../actions/PagesTypes";

export function togglePagePinned(id) {
  return {
    type: TOGGLE_PINNED_PAGE,
    payload: { id },
  };
}

export function toggleCheckPage(id) {
  return {
    type: TOGGLE_CHECK_PAGE,
    payload: { id },
  };
}

export function toggleSelectAllPages() {
  return {
    type: TOGGLE_SELECT_ALL_PAGES,
  };
}

export function deselectAllPages() {
  return {
    type: DESELECT_ALL_PAGES,
  };
}
