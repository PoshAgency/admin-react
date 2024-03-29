import { v4 as uuid } from "uuid";

export const coupons = [
  {
    id: uuid(),
    title: "Accessories 10$",
    code: "accessories10",
    description: "<h2>Coupon 1</h2><p>This is a coupon 1.</p>",
    typeOfDiscount: "fixed",
    discountParameter: 25,
    startDate: new Date("April 1, 2023"),
    endDate: new Date("April 30, 2023"),
    apllyToCurrentDiscounts: true,
    singleUse: false,
    onlySelectedProducts: false,
    selectedProducts: [],
    applyToCategory: "shoes",
    excludedProducts: [{ id: uuid() }, { id: uuid() }, { id: uuid() }],
  },
  {
    id: uuid(),
    title: "Shoes 10%",
    code: "shoes10",
    description: "<h2>Coupon 2</h2><p>This is a coupon 2.</p>",
    typeOfDiscount: "precentage",
    discountParameter: 10,
    startDate: new Date("April 1, 2023"),
    endDate: new Date("April 30, 2023"),
    apllyToCurrentDiscounts: true,
    singleUse: true,
    onlySelectedProducts: false,
    selectedProducts: [],
    applyToCategory: "shoes",
    excludedProducts: [{ id: uuid() }, { id: uuid() }, { id: uuid() }],
  },
  {
    id: uuid(),
    title: "Shoes 15%",
    code: "shoes15",
    description: "<h2>Coupon 3</h2><p>This is a coupon 3.</p>",
    typeOfDiscount: "precentage",
    discountParameter: 10,
    startDate: new Date("April 1, 2023"),
    endDate: new Date("April 30, 2023"),
    apllyToCurrentDiscounts: true,
    singleUse: false,
    onlySelectedProducts: false,
    selectedProducts: [],
    applyToCategory: "shoes",
    excludedProducts: [{ id: uuid() }, { id: uuid() }, { id: uuid() }],
  },
];
