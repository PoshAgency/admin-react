import { v4 as uuid } from "uuid";
import slugify from "slugify";

export const products = [
  {
    title: "Shoes 1111",
    slug: `https://theposh.agency/${slugify("Product 1")}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
    category: "shoes",
    tags: [],
    active: true,
    id: uuid(),
    pinned: true,
    content: "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
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
    title: "Bags 2124",
    slug: `https://theposh.agency/${slugify("Product 2")}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
    category: "bags",
    active: false,
    tags: [],
    id: uuid(),
    pinned: false,
    content: "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
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
    title: "Shoes 32134",
    slug: `https://theposh.agency/${slugify("Product 3")}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
    category: "shoes",
    active: true,
    tags: [],
    id: uuid(),
    pinned: false,
    content: "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
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
    title: "Accessories 1543",
    slug: `https://theposh.agency/${slugify("Product 4")}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
    category: "accessories",
    active: true,
    tags: [],
    id: uuid(),
    pinned: true,
    content: "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
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
    title: "Accessories 54634",
    slug: `https://theposh.agency/${slugify("Product 5")}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
    category: "accessories",
    active: false,
    tags: [],
    id: uuid(),
    pinned: true,
    content: "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
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
    content: "<p>Privanova – INTERPOL Cybercrime Knowledge Exchange Member</p>",
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
];
