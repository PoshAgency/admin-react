import {
  TOGGLE_CHECK_BLOG,
  TOGGLE_SELECT_ALL_BLOGS,
  TOGGLE_PINNED_BLOG,
  DESELECT_ALL_BLOGS,
  EDIT_BLOG,
} from "../actions/BlogsTypes";
import { blogs } from "../../data/blogs";

const initialState = {
  blogs,
  selectedBlogs: [],
  selectedBlog: {},
};

export default function BlogsReducer(state = initialState, action) {
  if (action.type === TOGGLE_PINNED_BLOG) {
    const blogs = [...state.blogs];
    const blogIndex = blogs.findIndex((blog) => action.payload.id === blog.id);

    blogs[blogIndex].pinned = !blogs[blogIndex].pinned;

    return { ...state, blogs };
  }

  if (action.type === TOGGLE_CHECK_BLOG) {
    const blogIndex = state.selectedBlogs.findIndex(
      (blog) => blog === action.payload.id
    );

    let newSelectedBlogs = [...state.selectedBlogs];

    if (blogIndex !== -1) {
      newSelectedBlogs = state.selectedBlogs.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedBlogs.push(action.payload.id);
    }

    return {
      ...state,
      selectedBlogs: newSelectedBlogs,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_BLOGS) {
    let newSelectedBlogsArray = [];

    if (state.blogs.length > state.selectedBlogs.length) {
      newSelectedBlogsArray = state.blogs.map((blog) => blog.id);
    }

    return { ...state, selectedBlogs: newSelectedBlogsArray };
  }

  if (action.type === DESELECT_ALL_BLOGS) {
    return { ...state, selectedBlogs: [] };
  }

  if (action.type === EDIT_BLOG) {
    const selectedBlog = state.blogs.find(
      (blog) => blog.id === action.payload.id
    );

    return {
      ...state,
      selectedBlog,
    };
  }

  return state;
}
