import {
  TOGGLE_PINNED_PAGE,
  TOGGLE_CHECK_PAGE,
  DESELECT_ALL_PAGES,
  TOGGLE_SELECT_ALL_PAGES,
} from "../actions/PagesTypes";

const initialState = {
  pages: [
    {
      title:
        "The European Health Data Space: A new catalyst for medical innovation",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: "0",
      pinned: false,
    },
    {
      title: "IBM: Artificial Intelligence and Research Projects",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 0, 13).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: "2",
      pinned: false,
    },
    {
      title: "INTERPOL CKE as Privanova’s Dissemination Platform for LEAs",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "Primanova team",
      date: new Date(2023, 0, 8).toLocaleDateString("en-gb"),
      category: "news",
      active: false,
      id: "3",
      pinned: true,
    },
    {
      title: "Horizon Europe Data Management Plan from an Ethics Perspective",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 0, 2).toLocaleDateString("en-gb"),
      category: "insights",
      active: true,
      id: "4",
      pinned: false,
    },
    {
      title: "Copyright infringement as a form of cybercrime",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "Primanova team",
      date: new Date(2023, 0, 18).toLocaleDateString("en-gb"),
      category: "reports",
      active: true,
      id: "5",
      pinned: false,
    },
    {
      title: "Privacy Impact Assessments for H2020 Projects",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "reports",
      active: true,
      id: "6",
      pinned: true,
    },
    {
      title:
        "Opinion on the European Gambling and Betting Association’s draft Code of Conduct",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "Primanova team",
      date: new Date(2023, 1, 1).toLocaleDateString("en-gb"),
      category: "news",
      active: false,
      id: "7",
      pinned: false,
    },
    {
      title: "CC-DRIVER Kickoff Meeting",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 0, 13).toLocaleDateString("en-gb"),
      category: "insights",
      active: true,
      id: "8",
      pinned: false,
    },
    {
      title: "MARVEL Kick-off Meeting",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "Primanova team",
      date: new Date(2023, 1, 2).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: "9",
      pinned: false,
    },
    {
      title: "Living-in.EU: Digital Transformation in the European Cities",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 0, 2).toLocaleDateString("en-gb"),
      category: "insights",
      active: false,
      id: "10",
      pinned: false,
    },
    {
      title: "Privanova – INTERPOL Cybercrime Knowledge Exchange Member",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
      category: "reports",
      active: false,
      id: "11",
      pinned: true,
    },
  ],
  selectedPages: [],
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

  return state;
}
