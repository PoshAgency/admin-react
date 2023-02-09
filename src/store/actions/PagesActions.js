import { TOGGLE_PINNED_PAGE } from "../actions/PagesTypes";

export function togglePagePinned(id) {
  return {
    type: TOGGLE_PINNED_PAGE,
    payload: { id },
  };
}
