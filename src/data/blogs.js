import { v4 as uuid } from "uuid";
import slugify from "slugify";

export const blogs = [
  {
    title:
      "The European Health Data Space: A new catalyst for medical innovation",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    slug: `https://theposh.agency/${slugify(
      "The European Health Data Space: A new catalyst for medical innovation"
    )}`,
    author: "ThePosh team",
    date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
    category: "news",
    active: true,
    id: uuid(),
    pinned: false,
    content:
      "<p>The European Health Data Space: A new catalyst for medical innovation</p>",
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
    title: "IBM: Artificial Intelligence and Research Projects",
    slug: `https://theposh.agency/${slugify(
      "IBM: Artificial Intelligence and Research Projects"
    )}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "ThePosh team",
    date: new Date(2023, 0, 13).toLocaleDateString("en-gb"),
    content: "<p>IBM: Artificial Intelligence and Research Projects</p>",
    category: "news",
    active: true,
    id: uuid(),
    pinned: false,
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
    title: "INTERPOL CKE as Privanova’s Dissemination Platform for LEAs",
    slug: `https://theposh.agency/${slugify(
      "INTERPOL CKE as Privanova’s Dissemination Platform for LEAs"
    )}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "Primanova team",
    date: new Date(2023, 0, 8).toLocaleDateString("en-gb"),
    category: "news",
    active: false,
    id: uuid(),
    pinned: true,
    content:
      "<p>INTERPOL CKE as Privanova’s Dissemination Platform for LEAs</p>",
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
    title: "Horizon Europe Data Management Plan from an Ethics Perspective",
    slug: `https://theposh.agency/${slugify(
      "Horizon Europe Data Management Plan from an Ethics Perspective"
    )}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "ThePosh team",
    date: new Date(2023, 0, 2).toLocaleDateString("en-gb"),
    category: "insights",
    active: true,
    id: uuid(),
    pinned: false,
    content:
      "<p>Horizon Europe Data Management Plan from an Ethics Perspective</p>",
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
    title: "Copyright infringement as a form of cybercrime",
    slug: `https://theposh.agency/${slugify(
      "Copyright infringement as a form of cybercrime"
    )}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "Primanova team",
    date: new Date(2023, 0, 18).toLocaleDateString("en-gb"),
    category: "reports",
    active: true,
    id: uuid(),
    pinned: false,
    content: "<p>Copyright infringement as a form of cybercrime</p>",
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
    title: "Privacy Impact Assessments for H2020 Projects",
    slug: `https://theposh.agency/${slugify(
      "Privacy Impact Assessments for H2020 Projects"
    )}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "ThePosh team",
    date: new Date(2023, 1, 3).toLocaleDateString("en-gb"),
    category: "reports",
    active: true,
    id: uuid(),
    pinned: true,
    content: "<p>Privacy Impact Assessments for H2020 Projects</p>",
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
    title:
      "Opinion on the European Gambling and Betting Association’s draft Code of Conduct",
    slug: `https://theposh.agency/${slugify(
      "Opinion on the European Gambling and Betting Association’s draft Code of Conduct"
    )}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "Primanova team",
    date: new Date(2023, 1, 1).toLocaleDateString("en-gb"),
    category: "news",
    active: false,
    id: uuid(),
    pinned: false,
    content:
      "<p>Opinion on the European Gambling and Betting Association’s draft Code of Conduct</p>",
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
    title: "CC-DRIVER Kickoff Meeting",
    slug: `https://theposh.agency/${slugify("CC-DRIVER Kickoff Meeting")}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "ThePosh team",
    date: new Date(2023, 0, 13).toLocaleDateString("en-gb"),
    category: "insights",
    active: true,
    id: uuid(),
    pinned: false,
    content: "<p>CC-DRIVER Kickoff Meeting</p>",
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
    title: "MARVEL Kick-off Meeting",
    slug: `https://theposh.agency/${slugify("MARVEL Kick-off Meeting")}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "Primanova team",
    date: new Date(2023, 1, 2).toLocaleDateString("en-gb"),
    category: "news",
    active: true,
    id: uuid(),
    pinned: false,
    content: "<p>MARVEL Kick-off Meeting</p>",
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
    title: "Living-in.EU: Digital Transformation in the European Cities",
    slug: `https://theposh.agency/${slugify(
      "Living-in.EU: Digital Transformation in the European Cities"
    )}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "ThePosh team",
    date: new Date(2023, 0, 2).toLocaleDateString("en-gb"),
    category: "insights",
    active: false,
    id: uuid(),
    pinned: false,
    content:
      "<p>Living-in.EU: Digital Transformation in the European Cities</p>",
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
    title: "Privanova – INTERPOL Cybercrime Knowledge Exchange Member",
    slug: `https://theposh.agency/${slugify(
      "Privanova – INTERPOL Cybercrime Knowledge Exchange Member"
    )}`,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere accusantium, perferendis aspernatur ipsa animi totam sed, esse, quam nisi possimus explicabo deleniti placeat temporibus corporis blanditiis quas delectus amet.",
    author: "ThePosh team",
    date: new Date(2023, 1, 22).toLocaleDateString("en-gb"),
    category: "reports",
    active: false,
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
];
