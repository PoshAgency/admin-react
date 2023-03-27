import { v4 as uuid } from "uuid";

export const pages = [
  {
    id: uuid(),
    title: "About Us",
    slug: "https://theposh.agency/about-us",
    template: "about-us",
    pinned: true,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque.",
    published:
      "Wed Mar 01 2023 16:02:00 GMT+0100 (Central European Standard Time)",
    hero: "About Us Hero Title",
    desktopImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    mobileImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    seoTitle: "About Us SEO",
    seoDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque. SEO",
    sections: [
      {
        buttonText: "Read more",
        buttonURL: "https://www.google.com",
        imagePosition: "left",
        sectionDescription:
          "<h2>Our Story</h2><p>&nbsp;</p><h3>Heading 1</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>&nbsp;</h3><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
        sectionImage: [],
        selectedColor: "#dddddd",
        title: "Our Story",
      },
    ],
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
    pageContent:
      "<h2>About Us</h2><p>&nbsp;</p><h3>Heading 2<br>&nbsp;</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
  },
  {
    id: uuid(),
    title: "Compliance",
    slug: "https://theposh.agency/compliance",
    template: "compliance",
    pinned: true,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque.",
    published:
      "Wed Mar 01 2023 16:02:00 GMT+0100 (Central European Standard Time)",
    hero: "About Us Hero Title",
    desktopImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    mobileImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    seoTitle: "About Us SEO",
    seoDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque. SEO",
    sections: [
      {
        buttonText: "Read more",
        buttonURL: "https://www.google.com",
        imagePosition: "left",
        sectionDescription:
          "<h2>Our Story</h2><p>&nbsp;</p><h3>Heading 1</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>&nbsp;</h3><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
        sectionImage: [],
        selectedColor: "#dddddd",
        title: "Our Story",
      },
    ],
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
    pageContent:
      "<h2>About Us</h2><p>&nbsp;</p><h3>Heading 2<br>&nbsp;</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
  },
  {
    id: uuid(),
    title: "Legal",
    slug: "https://theposh.agency/legal",
    template: "legal",
    pinned: false,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque.",
    published:
      "Wed Mar 01 2023 16:02:00 GMT+0100 (Central European Standard Time)",
    hero: "About Us Hero Title",
    desktopImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    mobileImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    seoTitle: "About Us SEO",
    seoDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque. SEO",
    sections: [
      {
        buttonText: "Read more",
        buttonURL: "https://www.google.com",
        imagePosition: "left",
        sectionDescription:
          "<h2>Our Story</h2><p>&nbsp;</p><h3>Heading 1</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>&nbsp;</h3><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
        sectionImage: [],
        selectedColor: "#dddddd",
        title: "Our Story",
      },
    ],
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
    pageContent:
      "<h2>About Us</h2><p>&nbsp;</p><h3>Heading 2<br>&nbsp;</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
  },
  {
    id: uuid(),
    title: "Contact Us",
    slug: "https://theposh.agency/contact-us",
    template: "contact-us",
    pinned: false,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque.",
    published:
      "Wed Mar 01 2023 16:02:00 GMT+0100 (Central European Standard Time)",
    hero: "About Us Hero Title",
    desktopImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    mobileImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    seoTitle: "About Us SEO",
    seoDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque. SEO",
    sections: [
      {
        buttonText: "Read more",
        buttonURL: "https://www.google.com",
        imagePosition: "left",
        sectionDescription:
          "<h2>Our Story</h2><p>&nbsp;</p><h3>Heading 1</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>&nbsp;</h3><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
        sectionImage: [],
        selectedColor: "#dddddd",
        title: "Our Story",
      },
    ],
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
    pageContent:
      "<h2>About Us</h2><p>&nbsp;</p><h3>Heading 2<br>&nbsp;</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
  },
  {
    id: uuid(),
    title: "Budgeting",
    slug: "https://theposh.agency/budgeting",
    template: "budgeting",
    pinned: true,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque.",
    published:
      "Wed Mar 01 2023 16:02:00 GMT+0100 (Central European Standard Time)",
    hero: "About Us Hero Title",
    desktopImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    mobileImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    seoTitle: "About Us SEO",
    seoDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque. SEO",
    sections: [
      {
        buttonText: "Read more",
        buttonURL: "https://www.google.com",
        imagePosition: "left",
        sectionDescription:
          "<h2>Our Story</h2><p>&nbsp;</p><h3>Heading 1</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>&nbsp;</h3><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
        sectionImage: [],
        selectedColor: "#dddddd",
        title: "Our Story",
      },
    ],
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
    pageContent:
      "<h2>About Us</h2><p>&nbsp;</p><h3>Heading 2<br>&nbsp;</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
  },
  {
    title: "Network",
    slug: "https://theposh.agency/network",
    template: "network",
    pinned: false,
    id: uuid(),
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque.",
    published:
      "Wed Mar 01 2023 16:02:00 GMT+0100 (Central European Standard Time)",
    hero: "About Us Hero Title",
    desktopImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    mobileImage:
      "https://images.unsplash.com/photo-1676579526746-acba9b0eef80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    seoTitle: "About Us SEO",
    seoDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, animi veniam minima vel dolore et alias sint esse, perferendis obcaecati ducimus rerum quasi quisquam vero autem! Eum perferendis ad, ducimus beatae alias at ex rem rerum maiores corporis. Corrupti, neque. SEO",
    sections: [
      {
        buttonText: "Read more",
        buttonURL: "https://www.google.com",
        imagePosition: "left",
        sectionDescription:
          "<h2>Our Story</h2><p>&nbsp;</p><h3>Heading 1</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>&nbsp;</h3><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
        sectionImage: [],
        selectedColor: "#dddddd",
        title: "Our Story",
      },
    ],
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
    pageContent:
      "<h2>About Us</h2><p>&nbsp;</p><h3>Heading 2<br>&nbsp;</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p><h3>Heading 2</h3><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime, nisi, itaque quaerat neque officia ullam alias illo magni sit qui autem delectus. Deleniti vitae consequatur tempore repellat, ipsa debitis ad explicabo quia ipsum consectetur eum dignissimos. Quam eos ea voluptatum repellendus explicabo dolorum doloribus illum perspiciatis optio facilis natus porro ipsum iusto minima, libero ex odio soluta doloremque quidem accusamus nemo tenetur enim dolore? Accusantium dicta quaerat minima animi.</p>",
  },
];
