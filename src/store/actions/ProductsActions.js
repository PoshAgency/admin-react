import {
  TOGGLE_CHECK_PRODUCT,
  TOGGLE_PINNED_PRODUCT,
  DESELECT_ALL_PRODUCTS,
  TOGGLE_SELECT_ALL_PRODUCTS,
  EDIT_PRODUCT,
} from "../actions/ProductsTypes";

export function toggleProductPinned(id) {
  return {
    type: TOGGLE_PINNED_PRODUCT,
    payload: { id },
  };
}

export function toggleCheckProduct(id) {
  return {
    type: TOGGLE_CHECK_PRODUCT,
    payload: { id },
  };
}

export function toggleSelectAllProducts() {
  return {
    type: TOGGLE_SELECT_ALL_PRODUCTS,
  };
}

export function deselectAllProducts() {
  return {
    type: DESELECT_ALL_PRODUCTS,
  };
}

export function editProduct(id) {
  return {
    type: EDIT_PRODUCT,
    payload: { id },
  };
}
