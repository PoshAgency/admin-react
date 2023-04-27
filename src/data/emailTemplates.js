import { v4 as uuid } from "uuid";

export const emailTemplates = [
  {
    id: uuid(),
    title: "Confirm email",
    slug: "confirm-email",
    message:
      "<h2>Email Confirmation</h2><p>Click on <i>link</i> to confirm your email.</p>",
    variables: [
      { value: "{name}", name: "name" },
      { value: "{lastName}", name: "last name" },
      { value: "{validationLink}", name: "validation link" },
    ],
  },
  {
    id: uuid(),
    title: "Order received",
    slug: "order-received",
    message:
      "<h2>Order received</h2><p>Your order have been received successfully.</p>",
    variables: [
      { value: "{name}", name: "name" },
      { value: "{email}", name: "email" },
    ],
  },
];
