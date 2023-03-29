import { v4 as uuid } from "uuid";

export const header = [
  { id: uuid(), text: "Contact" },
  {
    id: uuid(),
    text: "About Us",
    children: [
      { id: uuid(), text: "Team" },
      { id: uuid(), text: "Network" },
      { id: uuid(), text: "Careers" },
      { id: uuid(), text: "Privacy Policy" },
    ],
  },
  {
    id: uuid(),
    text: "EU Projects",
    children: [
      { id: uuid(), text: "POLIIICE" },
      { id: uuid(), text: "GLOCALFLEX" },
      { id: uuid(), text: "DRG4FOOD" },
      { id: uuid(), text: "FACILITATE" },
      { id: uuid(), text: "CYBERSPACE" },
      { id: uuid(), text: "TRACE" },
      { id: uuid(), text: "DigiCare4You" },
      { id: uuid(), text: "CC-DRIVER" },
      { id: uuid(), text: "IoT-NGIN" },
      { id: uuid(), text: "Marvel" },
      { id: uuid(), text: "AI4HealthSec" },
      { id: uuid(), text: "Cyrene" },
    ],
  },
  {
    id: uuid(),
    text: "EU Funding",
    children: [
      { id: uuid(), text: "Proposal Drafting" },
      { id: uuid(), text: "Consortium Building" },
      { id: uuid(), text: "Budgeting" },
      { id: uuid(), text: "Evaluation" },
    ],
  },
  {
    id: uuid(),
    text: "Compliance",
    children: [
      { id: uuid(), text: "GDPR Consulting" },
      { id: uuid(), text: "DPO on Demand" },
      { id: uuid(), text: "Risk Management" },
      { id: uuid(), text: "Privacy Training" },
      { id: uuid(), text: "Case Studies" },
      { id: uuid(), text: "GDPR Compliance for a Gaming Startup" },
      { id: uuid(), text: "DPIA for an eCommerce Fidelity Program" },
      { id: uuid(), text: "Data Sharing for a Pharma Company" },
    ],
  },
  {
    id: uuid(),
    text: "Resources",
    children: [
      { id: uuid(), text: "News" },
      { id: uuid(), text: "Project Updates" },
      { id: uuid(), text: "White Papers" },
      { id: uuid(), text: "Insights" },
    ],
  },
];

export const footer = [
  {
    id: uuid(),
    text: "EU Projects",
    children: [
      { id: uuid(), text: "Core Concepts" },
      { id: uuid(), text: "Areas of Expertise" },
      { id: uuid(), text: "Project Portfolio" },
      { id: uuid(), text: "R&I Brouchure" },
    ],
  },
  {
    id: uuid(),
    text: "EU Funding",
    children: [
      { id: uuid(), text: "Proposal Drafting" },
      { id: uuid(), text: "Consortium Building" },
      { id: uuid(), text: "Budgeting" },
      { id: uuid(), text: "Evaluation" },
    ],
  },
  {
    id: uuid(),
    text: "Compliance",
    children: [
      { id: uuid(), text: "GDPR Consulting" },
      { id: uuid(), text: "DPO On Demnand" },
      { id: uuid(), text: "Risk Management" },
      { id: uuid(), text: "Privacy Training" },
    ],
  },
  {
    id: uuid(),
    text: "Resources",
    children: [
      { id: uuid(), text: "News" },
      { id: uuid(), text: "Project Updates" },
      { id: uuid(), text: "White Papers" },
      { id: uuid(), text: "Insights" },
    ],
  },
  {
    id: uuid(),
    text: "About Us",
    children: [
      { id: uuid(), text: "Team" },
      { id: uuid(), text: "Network" },
      { id: uuid(), text: "Careers" },
      { id: uuid(), text: "Privacy Policy" },
    ],
  },
  {
    id: uuid(),
    text: "Contact",
    children: [
      { id: uuid(), text: "contact[at]privanova.com" },
      { id: uuid(), text: "34, avenue des Champs-Elysees 75008 Paris, France" },
    ],
  },
];
