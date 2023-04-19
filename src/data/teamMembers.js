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
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_600,h_400/https://sarawilliamsesq.com/wp-content/uploads/2021/08/female-lawyer-5.jpg",
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
