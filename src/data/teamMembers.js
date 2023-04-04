import { v4 as uuid } from "uuid";

export const teamMembers = [
  {
    id: uuid(),
    email: "janedoe@gmail.com",
    firstName: "Jane",
    lastName: "Doe",
    fullName: "Jane Doe",
    instagram: "instagram",
    facebook: "facebook",
    linkedin: "linkedin",
    twitter: "twitter",
    youtube: "youtube",
    pinned: false,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJaCUMva78kbQlp3iGl6vI3KAY_z6uuNkSnQ&usqp=CAU",
  },
  {
    id: uuid(),
    email: "johndoe@yahoo.com",
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    instagram: "instagram",
    facebook: "facebook",
    linkedin: "linkedin",
    twitter: "twitter",
    youtube: "youtube",
    pinned: true,
    photo:
      "https://c8.alamy.com/comp/JY0BC4/portrait-of-happy-male-lawyer-in-office-JY0BC4.jpg",
  },
];
