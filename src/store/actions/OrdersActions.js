import {
  TOGGLE_CHECK_ORDER,
  TOGGLE_SELECT_ALL_ORDERS,
  DESELECT_ALL_ORDERS,
  SET_PREVIEW_ORDER,
} from "./OrdersTypes";

export function toggleCheckOrder(id) {
  return {
    type: TOGGLE_CHECK_ORDER,
    payload: { id },
  };
}

export function toggleSelectAllOrders() {
  return {
    type: TOGGLE_SELECT_ALL_ORDERS,
  };
}

export function deselectAllOrders() {
  return {
    type: DESELECT_ALL_ORDERS,
  };
}

export function setPreviewOrder(id) {
  return {
    type: SET_PREVIEW_ORDER,
    payload: { id },
  };
}
