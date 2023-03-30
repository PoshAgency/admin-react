import { EDIT_MENU_ITEM } from "./MenuItemsTypes";

export function editMenuItem(menuItem) {
  return {
    type: EDIT_MENU_ITEM,
    payload: menuItem,
  };
}
