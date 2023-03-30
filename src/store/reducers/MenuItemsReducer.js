import { header, footer } from "../../data/menus";
import { EDIT_MENU_ITEM } from "../actions/MenuItemsTypes";

const initialState = {
  header: header,
  footer: footer,
  selectedItem: {},
};

export default function MenuItemsReducer(state = initialState, action) {
  console.log("in reducer");
  if (action.type === EDIT_MENU_ITEM) {
    return { ...state, selectedItem: action.payload };
  }
  return state;
}
