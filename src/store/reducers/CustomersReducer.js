import {
  TOGGLE_CHECK_CUSTOMER,
  TOGGLE_SELECT_ALL_CUSTOMERS,
  DESELECT_ALL_CUSTOMERS,
} from "../actions/CustomersTypes";
import { customers } from "../../data/customers";

const initialState = {
  customers,
  selectedCustomers: [],
};

export default function CustomersReducer(state = initialState, action) {
  if (action.type === TOGGLE_CHECK_CUSTOMER) {
    const customerIndex = state.selectedCustomers.findIndex(
      (customer) => customer === action.payload.id
    );

    let newSelectedCustomers = [...state.selectedCustomers];

    if (customerIndex !== -1) {
      newSelectedCustomers = state.selectedCustomers.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedCustomers.push(action.payload.id);
    }

    return {
      ...state,
      selectedCustomers: newSelectedCustomers,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_CUSTOMERS) {
    let newSelectedCustomersArray = [];

    if (state.customers.length > state.selectedCustomers.length) {
      newSelectedCustomersArray = state.customers.map(
        (customer) => customer.id
      );
    }

    return { ...state, selectedCustomers: newSelectedCustomersArray };
  }

  if (action.type === DESELECT_ALL_CUSTOMERS) {
    return { ...state, selectedCustomers: [] };
  }

  return state;
}
