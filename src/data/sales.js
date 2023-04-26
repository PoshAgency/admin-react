import slugify from "slugify";
import { v4 as uuid } from "uuid";

export const sales = [
  {
    id: uuid(),
    title: "Sale 10%",
    description: "<h2>Sale 10%</h2><p>This is a 10% sale offer.</p>",
    type: "cash",
    saleParameter: 25,
    startDate: new Date("April 1, 2023"),
    endDate: new Date("April 30, 2023"),
    slug: "https://theposh.agency/sales/single/",
    visible: true,
    bannerImg:
      "https://marketplace.canva.com/EAE6uxzge6c/1/0/1600w/canva-yellow-and-white-minimalist-big-sale-banner-BjBIq-T_6j4.jpg",
    products: [
      {
        title: "Accessories 54634",
        slug: `https://theposh.agency/${slugify("Product 5")}`,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
        date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
        category: "accessories",
        active: false,
        tags: [],
        id: uuid(),
        pinned: true,
        content:
          "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
        desktopImage:
          "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        mobileImage:
          "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        galleries: [
          {
            description: "This is a gallery 1 description.",
            id: "53a45cb7-1407-4357-ac21-52992e38fb36",
            images: [
              {
                id: "071d762d-be26-4618-9c9d-9bc147c4cfc9",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672050/posh-dashboard/khmytmksijbv9pz5nxxt.jpg",
              },
              {
                id: "d8f045d3-f1c0-453e-85b3-f466b2cb3179",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672053/posh-dashboard/culcsvfkklsta9g6etpp.jpg",
              },
            ],
            name: "Gallery 1",
            type: "gallery",
          },
          {
            description: "This is a slider 2 description.",
            id: "53a45cb7-1407-4357-ac21-52992e38fb36",
            images: [
              {
                id: "071d762d-be26-4618-9c9d-9bc147c4cfc9",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672050/posh-dashboard/khmytmksijbv9pz5nxxt.jpg",
              },
              {
                id: "d8f045d3-f1c0-453e-85b3-f466b2cb3179",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672053/posh-dashboard/culcsvfkklsta9g6etpp.jpg",
              },
            ],
            name: "Slider 1",
            type: "slider",
          },
        ],
        related: [],
      },
      {
        title: "Shoes 6674",
        slug: `https://theposh.agency/${slugify("Product 6")}`,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
        date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
        category: "shoes",
        active: false,
        tags: [],
        id: uuid(),
        pinned: false,
        content:
          "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
        desktopImage:
          "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        mobileImage:
          "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        galleries: [
          {
            description: "This is a gallery 1 description.",
            id: "53a45cb7-1407-4357-ac21-52992e38fb36",
            images: [
              {
                id: "071d762d-be26-4618-9c9d-9bc147c4cfc9",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672050/posh-dashboard/khmytmksijbv9pz5nxxt.jpg",
              },
              {
                id: "d8f045d3-f1c0-453e-85b3-f466b2cb3179",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672053/posh-dashboard/culcsvfkklsta9g6etpp.jpg",
              },
            ],
            name: "Gallery 1",
            type: "gallery",
          },
          {
            description: "This is a slider 2 description.",
            id: "53a45cb7-1407-4357-ac21-52992e38fb36",
            images: [
              {
                id: "071d762d-be26-4618-9c9d-9bc147c4cfc9",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672050/posh-dashboard/khmytmksijbv9pz5nxxt.jpg",
              },
              {
                id: "d8f045d3-f1c0-453e-85b3-f466b2cb3179",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672053/posh-dashboard/culcsvfkklsta9g6etpp.jpg",
              },
            ],
            name: "Slider 1",
            type: "slider",
          },
        ],
        related: [],
      },
    ],
  },
  {
    id: uuid(),
    title: "Free delivery",
    description: "<h2>Free delivery</h2><p>This is a free delivery sale.</p>",
    type: "delivery",
    saleParameter: "",
    startDate: new Date("April 1, 2023"),
    endDate: new Date("April 30, 2023"),
    slug: "https://theposh.agency/sales/single/",
    visible: false,
    bannerImg:
      "https://thumbs.dreamstime.com/b/sales-banner-colorful-price-tags-sale-sign-40114844.jpg",
    products: [
      {
        title: "Accessories 54634",
        slug: `https://theposh.agency/${slugify("Product 5")}`,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
        date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
        category: "accessories",
        active: false,
        tags: [],
        id: uuid(),
        pinned: true,
        content:
          "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
        desktopImage:
          "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        mobileImage:
          "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        galleries: [
          {
            description: "This is a gallery 1 description.",
            id: "53a45cb7-1407-4357-ac21-52992e38fb36",
            images: [
              {
                id: "071d762d-be26-4618-9c9d-9bc147c4cfc9",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672050/posh-dashboard/khmytmksijbv9pz5nxxt.jpg",
              },
              {
                id: "d8f045d3-f1c0-453e-85b3-f466b2cb3179",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672053/posh-dashboard/culcsvfkklsta9g6etpp.jpg",
              },
            ],
            name: "Gallery 1",
            type: "gallery",
          },
          {
            description: "This is a slider 2 description.",
            id: "53a45cb7-1407-4357-ac21-52992e38fb36",
            images: [
              {
                id: "071d762d-be26-4618-9c9d-9bc147c4cfc9",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672050/posh-dashboard/khmytmksijbv9pz5nxxt.jpg",
              },
              {
                id: "d8f045d3-f1c0-453e-85b3-f466b2cb3179",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672053/posh-dashboard/culcsvfkklsta9g6etpp.jpg",
              },
            ],
            name: "Slider 1",
            type: "slider",
          },
        ],
        related: [],
      },
      {
        title: "Shoes 6674",
        slug: `https://theposh.agency/${slugify("Product 6")}`,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
        date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
        category: "shoes",
        active: false,
        tags: [],
        id: uuid(),
        pinned: false,
        content:
          "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
        desktopImage:
          "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        mobileImage:
          "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        galleries: [
          {
            description: "This is a gallery 1 description.",
            id: "53a45cb7-1407-4357-ac21-52992e38fb36",
            images: [
              {
                id: "071d762d-be26-4618-9c9d-9bc147c4cfc9",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672050/posh-dashboard/khmytmksijbv9pz5nxxt.jpg",
              },
              {
                id: "d8f045d3-f1c0-453e-85b3-f466b2cb3179",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672053/posh-dashboard/culcsvfkklsta9g6etpp.jpg",
              },
            ],
            name: "Gallery 1",
            type: "gallery",
          },
          {
            description: "This is a slider 2 description.",
            id: "53a45cb7-1407-4357-ac21-52992e38fb36",
            images: [
              {
                id: "071d762d-be26-4618-9c9d-9bc147c4cfc9",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672050/posh-dashboard/khmytmksijbv9pz5nxxt.jpg",
              },
              {
                id: "d8f045d3-f1c0-453e-85b3-f466b2cb3179",
                orderNumber: 0,
                source:
                  "https://res.cloudinary.com/pedja1310/image/upload/…679672053/posh-dashboard/culcsvfkklsta9g6etpp.jpg",
              },
            ],
            name: "Slider 1",
            type: "slider",
          },
        ],
        related: [],
      },
    ],
  },
];
