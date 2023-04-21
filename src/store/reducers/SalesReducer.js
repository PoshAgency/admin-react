import {
  TOGGLE_CHECK_SALE,
  TOGGLE_SELECT_ALL_SALES,
  DESELECT_ALL_SALES,
} from "../actions/SalesTypes";

import { sales } from "../../data/sales";

const initialState = { sales, selectedSales: [] };

export default function SalesReducer(state = initialState, action) {
  if (action.type === TOGGLE_CHECK_SALE) {
    const saleIndex = state.selectedSales.findIndex(
      (sale) => sale === action.payload.id
    );

    let newSelectedSales = [...state.selectedSales];

    if (saleIndex !== -1) {
      newSelectedSales = state.selectedSales.filter(
        (id) => id !== action.payload.id
      );
    } else {
      newSelectedSales.push(action.payload.id);
    }

    return {
      ...state,
      selectedSales: newSelectedSales,
    };
  }

  if (action.type === TOGGLE_SELECT_ALL_SALES) {
    let newSelectedSalesArray = [];

    if (state.sales.length > state.selectedSales.length) {
      newSelectedSalesArray = state.sales.map((sale) => sale.id);
    }

    return { ...state, selectedSales: newSelectedSalesArray };
  }

  if (action.type === DESELECT_ALL_SALES) {
    return { ...state, selectedSales: [] };
  }

  return state;
}
