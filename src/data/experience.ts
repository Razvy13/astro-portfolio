export type Experience = {
  company: string;
  startDate: string;
  endDate: string;
  role: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: "Aton Spa Società Benefit",
    startDate: "Jan 2020",
    endDate: "Present",
    role: "Frontend Developer",
    description:
      "I'm using Angular and TaigaUI to develop, manage and maintain e-commerce B2B, Backoffice and tracking web application for food and retail companies.",
  },
  {
    company: "Progetto EDP",
    startDate: "Oct 2017",
    endDate: "Dec 2019",
    role: "Software developer",
    description:
      "Analysis and development of new features for the Zucchetti's management software, AdHoc.",
  },
];

export default experiences;
