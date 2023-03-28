import { v4 as uuid } from "uuid";

export const customers = [
  {
    id: uuid(),
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    email: "john@google.com",
    phone: "555-555-5555",
    country: "USA",
    city: "New York City",
    address: "123 Main St",
    postalCode: "10001",
    company: "ABC Company",
    pib: "123456789",
  },
  {
    id: uuid(),
    firstName: "Jane",
    lastName: "Doe",
    fullName: "Jane Doe",
    email: "jane@google.com",
    phone: "777-777-7777",
    country: "USA",
    city: "Los Angeles City",
    address: "2nd Street",
    postalCode: "20031",
    company: "AAB Company",
    pib: "123456788",
  },
];
