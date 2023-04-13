import { v4 as uuid } from "uuid";

export const messages = [
  {
    id: uuid(),
    title: "404",
    slug: "confirm-email",
    message: "<h2>404</h2>",
    buttonLink: "https://google.com",
    buttonText: "Google",
  },
  {
    id: uuid(),
    title: "Thank you for your message",
    slug: "thank-you-for-your-message",
    message: "<p>You will be contacted shortly.</p>",
    buttonLink: "",
    buttonText: "Go to homepage",
  },
  {
    id: uuid(),
    title: "Prazna korpa",
    slug: "prazna-korpa",
    message:
      "<p>Vasa korpa je prazna</p><p>Pogledajte proizvode iz nase ponude.</p>",
    buttonLink: "/",
    buttonText: "Naslovna",
  },
  {
    id: uuid(),
    title: "Zavrsena kupovina",
    slug: "zavrsena-kupovina",
    message: "Potvrda porudzbine je poslata na vasu email adresu.",
    buttonLink: "",
    buttonText: "Pocetna stranica",
  },
];
