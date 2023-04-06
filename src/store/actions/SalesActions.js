import {
  TOGGLE_CHECK_SALE,
  TOGGLE_SELECT_ALL_SALES,
  DESELECT_ALL_SALES,
} from "../actions/SalesTypes";

export function toggleCheckSale(id) {
  return {
    type: TOGGLE_CHECK_SALE,
    payload: { id },
  };
}

export function toggleSelectAllSales() {
  return {
    type: TOGGLE_SELECT_ALL_SALES,
  };
}

export function deselectAllSales() {
  return {
    type: DESELECT_ALL_SALES,
  };
}
