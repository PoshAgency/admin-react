import {
  TOGGLE_CHECK_ORDER,
  TOGGLE_SELECT_ALL_ORDERS,
  DESELECT_ALL_ORDERS,
  SET_SELECTED_ORDER,
} from "../actions/OrdersTypes";

import { orders } from "../../data/orders";

const initialState = {
  orders: orders,
  selectedOrders: [],
  selectedOrder: null,
};

export default function OrdersReducer(state = initialState, action) {
  if (action.type === SET_SELECTED_ORDER) {
    const orderIndex = state.orders.findIndex(
      (order) => order.id === action.payload.id
    );

    if (orderIndex >= 0) {
      return { ...state, selectedOrder: state.orders[orderIndex] };
    }
  }

  if (action.type === TOGGLE_CHECK_ORDER) {
    const orderIndex = state.selectedOrders.findIndex(
      (order) => order === action.payload.id
    );

    let newSelectedOrders = [...state.selectedOrders];

    if (orderIndex !== -1) {
      newSelectedOrders = state.selectedOrders.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedOrders.push(action.payload.id);
    }

    return {
      ...state,
      selectedOrders: newSelectedOrders,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_ORDERS) {
    let newSelectedOrdersArray = [];

    if (state.orders.length > state.selectedOrders.length) {
      newSelectedOrdersArray = state.orders.map((order) => order.id);
    }

    return { ...state, selectedOrders: newSelectedOrdersArray };
  }

  if (action.type === DESELECT_ALL_ORDERS) {
    return { ...state, selectedOrders: [] };
  }

  return state;
}
