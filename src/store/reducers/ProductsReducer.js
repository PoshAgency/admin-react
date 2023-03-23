import { v4 as uuid } from "uuid";

import {
  TOGGLE_PINNED_PRODUCT,
  TOGGLE_CHECK_PRODUCT,
  DESELECT_ALL_PRODUCTS,
  TOGGLE_SELECT_ALL_PRODUCTS,
} from "../actions/ProductsTypes";

const initialState = {
  products: [
    {
      title:
        "PRODUCT The European Health Data Space: A new catalyst for medical innovation",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title:
        "PRODUCT Horizon Europe Data Management Plan from an Ethics Perspective",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "PRODUCT Privacy Impact Assessments for H2020 Projects",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title:
        "PRODUCT Opinion on the European Gambling and Betting Association’s draft Code of Conduct",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title: "PRODUCT CC-DRIVER Kickoff Meeting",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: false,
    },
    {
      title:
        "PRODUCT Living-in.EU: Digital Transformation in the European Cities",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: true,
    },
    {
      title:
        "PRODUCT Privanova – INTERPOL Cybercrime Knowledge Exchange Member",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
      author: "ThePosh team",
      date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
      category: "news",
      active: true,
      id: uuid(),
      pinned: true,
    },
  ],
  selectedProducts: [],
};

export default function ProductsReducer(state = initialState, action) {
  if (action.type === TOGGLE_PINNED_PRODUCT) {
    const products = [...state.products];
    const productIndex = products.findIndex(
      (product) => action.payload.id === product.id
    );

    products[productIndex].pinned = !products[productIndex].pinned;

    return { ...state, products };
  }

  if (action.type === TOGGLE_CHECK_PRODUCT) {
    const pageIndex = state.selectedProducts.findIndex(
      (product) => product === action.payload.id
    );

    let newSelectedProducts = [...state.selectedProducts];

    if (pageIndex !== -1) {
      newSelectedProducts = state.selectedProducts.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedProducts.push(action.payload.id);
    }

    return {
      ...state,
      selectedProducts: newSelectedProducts,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_PRODUCTS) {
    let newSelectedProductsArray = [];

    if (state.pages.length > state.selectedPages.length) {
      newSelectedProductsArray = state.pages.map((page) => page.id);
    }

    return { ...state, selectedPages: newSelectedProductsArray };
  }

  if (action.type === DESELECT_ALL_PRODUCTS) {
    return { ...state, selectedProducts: [] };
  }

  return state;
}
