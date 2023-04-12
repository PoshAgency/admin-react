import { v4 as uuid } from "uuid";

export const orders = [
  {
    id: uuid(),
    status: "active",
    createdAt: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
    client: "macabojovic@gmail.com",
    order: 234,
    tax: 46.8,
    discount: 0,
    productsTotal: 234,
    paymentMethod: "Cash on delivery",
    delivery: 21,
    orderTotal: 255,
    message: "This is some order message.",
    products: [
      {
        image: "https://www.milami.rs/images/3TuraMain/T175-02Main.jpg",
        title: "Apollo Open White Hearts",
        quantity: 2,
        size: 19,
        price: 117,
        total: 234,
      },
    ],
    deliveryAddress: {
      client: "Marijana Zivanovic",
      email: "macabojovic@gmail.com",
      phone: "555-555-5555",
      address: "Goranska 26",
      city: "Petrovac Na Mlavi",
      zipCode: "12300",
      country: "Serbia",
    },
    clientInfo: {
      fullName: "Marija Zivanovic",
      email: "macabojovic@gmail.com",
      phone: "555-555-5555",
      address: "Goranska 26",
      city: "Petrovac Na Mlavi",
      zipCode: "12300",
      country: "Serbia",
    },
  },
  {
    id: uuid(),
    status: "active",
    createdAt: new Date(2023, 4, 4).toLocaleDateString("en-gb"),
    client: "urke7bg@gmail.com",
    order: 6242,
    tax: 1054.5,
    discount: 0,
    productsTotal: 6242,
    paymentMethod: "On delivery",
    delivery: 0,
    orderTotal: 6242,
    message: "This is some order message from urke.",
    products: [
      {
        image:
          "https://www.milami.rs/images/700x550-24/Pod-uglom/126-10masna10-1.jpg",
        title: "Best Color Fuxia Hearts",
        quantity: 1,
        size: 29,
        price: 2499,
        total: 2499,
      },
      {
        image: "https://www.milami.rs/images/Milami-19-08-2021/225-2Z.jpg",
        title: "Neo Fuxia Stars",
        quantity: 1,
        size: 19,
        price: 1650,
        total: 1650,
      },
      {
        image: "https://www.milami.rs/images/3TuraMain/T171-02Main.jpg",
        title: "Jess White Pink",
        quantity: 1,
        size: 19,
        price: 2093,
        total: 2093,
      },
    ],
    deliveryAddress: {
      client: "Uros Popovic",
      email: "urke7bg@gmail.com",
      phone: "555-555-5555",
      address: "Kedrova 11",
      city: "Beograd",
      zipCode: "11032",
      country: "Serbia",
    },
    clientInfo: {
      fullName: "Uros Popovic",
      email: "urke7bg@gmail.com",
      phone: "555-555-5555",
      address: "Kedrova 11",
      city: "Beograd",
      zipCode: "11032",
      country: "Serbia",
    },
  },
  {
    id: uuid(),
    status: "active",
    createdAt: new Date(2023, 12, 2).toLocaleDateString("en-gb"),
    client: "jelena.djiki@yahoo.com",
    order: 1750,
    tax: 355.83,
    discount: 0,
    productsTotal: 1750,
    paymentMethod: "Cash on delivery",
    delivery: 300,
    orderTotal: 2050,
    message: "",
    products: [
      {
        image: "https://www.milami.rs/images/Milami-stari-sajt-14-09/210-8.jpg",
        title: "Spencer violet",
        quantity: 1,
        size: 25,
        price: 1750,
        total: 1750,
      },
    ],
    deliveryAddress: {
      client: "Jelena Petrovic",
      email: "jelena.djiki@yahoo.com",
      phone: "555-555-5555",
      address: "Trg Oslobodjenja 23",
      city: "Backa Palanka",
      zipCode: "21400",
      country: "Serbia",
    },
    clientInfo: {
      fullName: "Jelena Petrovic",
      email: "jelena.djiki@yahoo.com",
      phone: "555-555-5555",
      address: "Trg Oslobodjenja 23",
      city: "Backa Palanka",
      zipCode: "21400",
      country: "Serbia",
    },
  },
];
