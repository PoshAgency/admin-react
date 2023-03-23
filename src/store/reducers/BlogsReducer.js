import { v4 as uuid } from "uuid";
import {
  TOGGLE_CHECK_BLOG,
  TOGGLE_SELECT_ALL_BLOGS,
  TOGGLE_PINNED_BLOG,
  DESELECT_ALL_BLOGS,
} from "../actions/BlogsTypes";

const initialState = {
  blogs: [
    {
      title:
        "BLOG The European Health Data Space: A new catalyst for medical innovation",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "BLOG IBM: Artificial Intelligence and Research Projects",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 0, 13).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "BLOG INTERPOL CKE as Privanova’s Dissemination Platform for LEAs",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "Primanova team",
      date: new Date(2023, 0, 8).toLocaleDateString("en-gb"),
      category: "news",
      active: false,
      id: uuid(),
      pinned: true,
    },
    {
      title:
        "BLOG Horizon Europe Data Management Plan from an Ethics Perspective",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 0, 2).toLocaleDateString("en-gb"),
      category: "insights",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "BLOG Copyright infringement as a form of cybercrime",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "Primanova team",
      date: new Date(2023, 0, 18).toLocaleDateString("en-gb"),
      category: "reports",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "BLOG Privacy Impact Assessments for H2020 Projects",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "reports",
      active: true,
      id: uuid(),
      pinned: true,
    },
    {
      title:
        "BLOG Opinion on the European Gambling and Betting Association’s draft Code of Conduct",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "Primanova team",
      date: new Date(2023, 1, 1).toLocaleDateString("en-gb"),
      category: "news",
      active: false,
      id: uuid(),
      pinned: false,
    },
    {
      title: "BLOG CC-DRIVER Kickoff Meeting",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 0, 13).toLocaleDateString("en-gb"),
      category: "insights",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "BLOG MARVEL Kick-off Meeting",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "Primanova team",
      date: new Date(2023, 1, 2).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "BLOG Living-in.EU: Digital Transformation in the European Cities",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 0, 2).toLocaleDateString("en-gb"),
      category: "insights",
      active: false,
      id: uuid(),
      pinned: false,
    },
    {
      title: "BLOG Privanova – INTERPOL Cybercrime Knowledge Exchange Member",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
      category: "reports",
      active: false,
      id: uuid(),
      pinned: true,
    },
  ],
  selectedBlogs: [],
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

  return state;
}
