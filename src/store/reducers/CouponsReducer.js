import {
  TOGGLE_CHECK_COUPON,
  TOGGLE_SELECT_ALL_COUPONS,
  DESELECT_ALL_COUPONS,
} from "../actions/CouponsTypes";

import { coupons } from "../../data/coupons";

const initialState = { coupons, selectedCoupons: [] };

export default function CouponsReducer(state = initialState, action) {
  if (action.type === TOGGLE_CHECK_COUPON) {
    const couponIndex = state.selectedCoupons.findIndex(
      (coupon) => coupon === action.payload.id
    );

    let newSelectedCoupons = [...state.selectedCoupons];

    if (couponIndex !== -1) {
      newSelectedCoupons = state.selectedCoupons.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedCoupons.push(action.payload.id);
    }

    return {
      ...state,
      selectedCoupons: newSelectedCoupons,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_COUPONS) {
    let newSelectedCouponsArray = [];

    if (state.coupons.length > state.selectedCoupons.length) {
      newSelectedCouponsArray = state.coupons.map((coupon) => coupon.id);
    }

    return { ...state, selectedCoupons: newSelectedCouponsArray };
  }

  if (action.type === DESELECT_ALL_COUPONS) {
    return { ...state, selectedCoupons: [] };
  }
  return state;
}
