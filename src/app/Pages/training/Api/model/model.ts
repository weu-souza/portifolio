export class TrainingClass {
  Title: string | undefined;
  Course: CourseClass[] | undefined;
}

export class CourseClass {
  name: string | undefined;
  Link: string | undefined;
  date: number | undefined;
}

export const TrainingObj: TrainingClass[] = [
  {
    Title: 'Javascript',
    Course: [
      {
        name: 'JavaScript do básico ao avançado (c/ Node.js e projetos)',
        Link: 'https://ude.my/UC-227b36b5-878b-4655-b037-42abd2cd4604',
        date: 2024,
      },
      {
        name: 'Curso Desenvolvimento Web + Projetos Reais',
        Link: 'https://www.udemy.com/certificate/UC-8dfec783-b9bd-4e0a-8454-edfb62b4d341/',
        date: 2024,
      },
      {
        name: 'Aprenda JAVASCRIPT em 7 dias + Projetos Reais',
        Link: 'https://www.udemy.com/certificate/UC-1043bb32-d264-45f5-9cb4-8493f3b0b1fb/',
        date: 2024,
      },
    ],
  },
  {
    Title: 'Typescript',
    Course: [
      {
        name: 'Aprenda TYPESCRIPT em 7 dias + Projetos Reais',
        Link: 'https://www.udemy.com/certificate/UC-819dc7de-4187-43b2-8869-a29a1b8b43f4/',
        date: 2024,
      },
    ],
  },
  {
    Title: 'Css',
    Course: [
      {
        name: 'Tailwind CSS do básico ao avançado + Projetos',
        Link: 'https://www.udemy.com/certificate/UC-d2fbbc5f-0eac-4e2e-958e-2175b8549723/',
        date: 2024,
      },
      {
        name: 'CSS Flexbox - Flexible Box Layout',
        Link: 'https://www.udemy.com/certificate/UC-e24bc5b6-faa2-4f67-9767-e4bdee6e4e10/',
        date: 2024,
      },
      {
        name: 'CSS Flexbox',
        Link: 'https://www.origamid.com/certificate/1674b15d',
        date: 2023,
      },
      {
        name: 'CSS Grid Layout ',
        Link: 'https://www.origamid.com/certificate/efc2e5c5',
        date: 2023,
      },
    ],
  },
  {
    Title: 'React',
    Course: [
      {
        name: '20+ Projetos em React JS aprenda Redux, Bootstrap, APIs',
        Link: 'https://www.udemy.com/certificate/UC-1e0b57d3-ae0b-4dae-9a1b-dea6e807fd13/',
        date: 2024,
      },
      {
        name: 'React Testing Library and Jest: The Complete Guide',
        Link: 'https://www.udemy.com/certificate/UC-52efe2c3-7303-4c86-993e-7dc8a858303b/',
        date: 2024,
      },
      {
        name: 'React JS com TypeScript Direto ao Ponto c/ projetos',
        Link: 'https://www.udemy.com/certificate/UC-68516ac3-b237-4a0b-a9e5-83ec2880de2a/',
        date: 2024,
      },
    ],
  },
  {
    Title: 'Git Github',
    Course: [
      {
        name: 'Aprenda Git e GitHub em 3 dias + Projetos reais',
        Link: 'https://www.udemy.com/certificate/UC-118038cb-bf12-4558-b14a-2a426fe33b49/',
        date: 2024,
      },
      {
        name: 'Git & GitHub - The Practical Guide',
        Link: 'https://www.udemy.com/certificate/UC-85b8d885-3a20-4cc5-b89f-5a893a76e6b5/',
        date: 2024,
      },
    ],
  },
  {
    Title: 'Ux/Ui - html',
    Course: [
      {
        name: 'Front End & UX/UI Design',
        Link: 'https://www.origamid.com/certificate/31e13cdd',
        date: 2024,
      },
      {
        name: 'HTML e CSS para Iniciantes',
        Link: 'https://www.origamid.com/certificate/11ef1f3d',
        date: 2022,
      },
      {
        name: 'UI Design para Iniciantes',
        Link: 'https://www.origamid.com/certificate/85ce6815',
        date: 2023,
      },
    ],
  },
  {
    Title: 'Aws',
    Course: [
      {
        name: 'AWS Certified Cloud Practitioner - certificação',
        Link: 'https://drive.google.com/file/d/1ffSXwA7m75oFY7bGbwyXTNSs4jl6hzhi/view?usp=sharing',
        date: 2024,
      },
      {
        name: 'AWS Certified Cloud Practitioner - badge',
        Link: 'https://www.credly.com/badges/517f3234-45b1-4456-afac-54436df0fb6a/',
        date: 2024,
      },
      {
        name: 'AWS Cloud Quest: Cloud Practitioner',
        Link: 'https://www.credly.com/badges/1a16a25a-7638-4d83-a0a5-f11e016cc0c8/',
        date: 2024,
      },
    ],
  },
];
