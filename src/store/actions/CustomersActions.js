import {
  TOGGLE_CHECK_CUSTOMER,
  TOGGLE_SELECT_ALL_CUSTOMERS,
  DESELECT_ALL_CUSTOMERS,
} from "./CustomersTypes";

export function toggleCheckCustomer(id) {
  return {
    type: TOGGLE_CHECK_CUSTOMER,
    payload: { id },
  };
}

export function toggleSelectAllCustomers() {
  return {
    type: TOGGLE_SELECT_ALL_CUSTOMERS,
  };
}

export function deselectAllCustomers() {
  return {
    type: DESELECT_ALL_CUSTOMERS,
  };
}
