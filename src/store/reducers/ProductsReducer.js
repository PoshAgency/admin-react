import {
  TOGGLE_PINNED_PRODUCT,
  TOGGLE_CHECK_PRODUCT,
  DESELECT_ALL_PRODUCTS,
  TOGGLE_SELECT_ALL_PRODUCTS,
  EDIT_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from "../actions/ProductsTypes";
import { products } from "../../data/products";

const initialState = {
  products,
  selectedProducts: [],
  selectedProduct: {},
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

    if (state.products.length > state.selectedProducts.length) {
      newSelectedProductsArray = state.products.map((product) => product.id);
    }

    return { ...state, selectedProducts: newSelectedProductsArray };
  }

  if (action.type === DESELECT_ALL_PRODUCTS) {
    return { ...state, selectedProducts: [] };
  }

  if (action.type === EDIT_PRODUCT) {
    const selectedProduct = state.products.find(
      (product) => product.id === action.payload.id
    );

    return { ...state, selectedProduct };
  }

  if (action.type === REMOVE_SELECTED_PRODUCT) {
    return { ...state, selectedProduct: {} };
  }

  return state;
}
