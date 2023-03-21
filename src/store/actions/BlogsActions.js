import {
  TOGGLE_CHECK_BLOG,
  TOGGLE_PINNED_BLOG,
  DESELECT_ALL_BLOGS,
  TOGGLE_SELECT_ALL_BLOGS,
} from "../actions/BlogsTypes";

export function toggleBlogPinned(id) {
  return {
    type: TOGGLE_PINNED_BLOG,
    payload: { id },
  };
}

export function toggleCheckBlog(id) {
  return {
    type: TOGGLE_CHECK_BLOG,
    payload: { id },
  };
}

export function toggleSelectAllBlogs() {
  return {
    type: TOGGLE_SELECT_ALL_BLOGS,
  };
}

export function deselectAllBlogs() {
  return {
    type: DESELECT_ALL_BLOGS,
  };
}
