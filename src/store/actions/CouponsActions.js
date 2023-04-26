import {
  TOGGLE_CHECK_COUPON,
  TOGGLE_SELECT_ALL_COUPONS,
  DESELECT_ALL_COUPONS,
  EDIT_COUPON,
  REMOVE_SELECTED_COUPON,
} from "./CouponsTypes";

export function toggleCheckCoupon(id) {
  return {
    type: TOGGLE_CHECK_COUPON,
    payload: { id },
  };
}

export function toggleSelectAllCoupons() {
  return {
    type: TOGGLE_SELECT_ALL_COUPONS,
  };
}

export function deselectAllCoupons() {
  return {
    type: DESELECT_ALL_COUPONS,
  };
}

export function editCoupon(id) {
  return {
    type: EDIT_COUPON,
    payload: { id },
  };
}

export function removeSelectedCoupon() {
  return {
    type: REMOVE_SELECTED_COUPON,
  };
}
