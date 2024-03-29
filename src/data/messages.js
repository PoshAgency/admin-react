import { v4 as uuid } from "uuid";

export const messages = [
  {
    id: uuid(),
    title: "404",
    slug: "confirm-email",
    message: "<h2>404</h2>",
    buttonLink: "https://google.com",
    buttonText: "Google",
    template: "error",
  },
  {
    id: uuid(),
    title: "403",
    slug: "forbidden-access",
    message: "<h2>403</h2>",
    buttonLink: "https://yahoo.com",
    buttonText: "Yahoo",
    template: "error",
  },
  {
    id: uuid(),
    title: "Thank you for your message",
    slug: "thank-you-for-your-message",
    message: "<p>You will be contacted shortly.</p>",
    buttonLink: "",
    buttonText: "Go to homepage",
    template: "thank-you",
  },
  {
    id: uuid(),
    title: "Prazna korpa",
    slug: "prazna-korpa",
    message:
      "<p>Vasa korpa je prazna</p><p>Pogledajte proizvode iz nase ponude.</p>",
    buttonLink: "/",
    buttonText: "Naslovna",
    template: "warning",
  },
  {
    id: uuid(),
    title: "Zavrsena kupovina",
    slug: "zavrsena-kupovina",
    message: "Potvrda porudzbine je poslata na vasu email adresu.",
    buttonLink: "",
    buttonText: "Pocetna stranica",
    template: "success",
  },
];
