import { v4 as uuid } from "uuid";

import { coupons } from "../../data/coupons";

const initialState = { coupons, selectedCoupons: [] };

export default function CouponsReducer(state = initialState, action) {
  return state;
}
