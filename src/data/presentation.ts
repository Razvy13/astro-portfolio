type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "razvan.dimulescu@gmail.com",
  title: "Hi, I’m Raz 👋",
  description:
    "My name is *Razvan Dimulescu* and I'm a *Frontend Developer*. I'm from Romania, living in Italy and currently working with *Angular* and *TaigaUI* at Aton Spa. Outside of work you can find me on *mountain* snowboarding, hiking or climbing.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/razvan_dim",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/razvan-titus-dimulescu/",
    },
    {
      label: "Github",
      link: "https://github.com/Razvy13",
    },
  ],
};

export default presentation;
