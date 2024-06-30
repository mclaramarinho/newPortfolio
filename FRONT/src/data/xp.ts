function getMonthDifference(
  startDate: Date,
  endDate: Date,
  locale: "en" | "pt"
): string {
  const diff = (endDate as any) - (startDate as any);
  const diffInMonths = Math.round(diff / 1000 / 60 / 60 / 24 / 30);

  let units = {
    m: {
      en: "month",
      pt: "mês",
    },
    M: {
      en: "months",
      pt: "meses",
    },
    y: {
      en: "year",
      pt: "ano",
    },
    Y: {
      en: "years",
      pt: "anos",
    },
  };

  if (diffInMonths < 12) {
    if (diffInMonths === 1) return `1 ${units.m[locale]}`;
    return `${diffInMonths} ${units.M[locale]}`;
  } else {
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    if (years === 1 && months === 0) return `1 ${units.y[locale]}`;
    if (years === 1 && months === 1)
      return `1 ${units.y[locale]} 1 ${units.m[locale]}`;
    if (years === 1 && months > 1)
      return `1 ${units.y[locale]} ${months} ${units.M[locale]}`;
    if (years > 1 && months === 0) return `${years} ${units.Y[locale]}`;
  }

  return "";
}

export default class XP {
  company: string;
  companyEn: string;
  role: string;
  roleEn: string;
  desc: string;
  descEn: string;
  startYear: string;
  endYear: string;
  duration: string;
  durationEn: string;

  constructor(
    company: string,
    companyEn: string,
    role: string,
    roleEn: string,
    desc: string,
    descEn: string,
    startDate: Date,
    endDate: Date,
    duration: string,
    durationEn: string
  ) {
    this.company = company;
    this.companyEn = companyEn;
    this.role = role;
    this.roleEn = roleEn;
    this.desc = desc;
    this.descEn = descEn;
    this.startYear = startDate.getFullYear().toString();
    this.endYear = endDate.getFullYear().toString();
    this.duration = getMonthDifference(startDate, endDate, "pt");
    this.durationEn = getMonthDifference(startDate, endDate, "en");
  }
}

export const xp = [
  new XP(
    "Programa Onboard - Porto Digital",
    "Onboard Program - Porto Digital",
    "Residente",
    "Resident",
    "Desenvolvi projetos do zero, desde o levantamento de requisitos, design de UI, até codar o do produto final. Minha equipe e eu fomos finalistas no Demoday do 1º período (com o projeto Feel Fine) e fomos novamente para o Demoday no 2º periodo (com um projeto desenvolvido para a rede de supermercados Arcomix).",
    "Developed projects from scratch, from requirements gathering, UI design, to coding the final product. My team and I were finalists at the Demoday of the 1st period (with the Feel Fine project) and were again at the Demoday in the 2nd period (with a project developed for the Arcomix supermarket chain).",
    new Date(2023, 0, 1),
    new Date(2024, 0, 1),
    "1 ano",
    "1 year"
  ),

  new XP(
    "Faculdade Alpha",
    "Alpha College",
    "Prof. de Engenharia de Software",
    "Software Engineering Instructor",
    "Ensinei o módulo de Engenharia de Software para os alunos do curso de Técnico em Informática. Fui responsável pela elaboração das aulas e por ministrá-las. Além de realizar a avaliação dos alunos baseada em projetos.",
    "Taught the Software Engineering module to students of the Computer Technician course. Responsible for lesson planning and delivery, as well as student assessment based on projects.",
    new Date(2023, 10, 14),
    new Date(2023, 11, 14),
    "1 mês",
    "1 month"
  ),

  new XP(
    "Mundiale",
    "Mundiale",
    "Estagiária de Desenvolvimento de Chatbots",
    "Chatbot Developer Intern",
    "Responsável pelo desenvolvimento e manutenção de chatbots na plataforma Blip, utilizando a UI e Javascript. Também desenvolvi habilidades de design de chatbots e aprimorei minhas habilidades em JS. Contrato encerrado devido ao surgimento de outra oportunidade.",
    "Responsible for developing and maintaining chatbots on the Blip platform, using UI and Javascript. Also developed chatbot design skills and enhanced my JS skills. Contract ended due to another opportunity.",
    new Date(2024, 0, 1),
    new Date(2024, 1, 23),
    "2 meses",
    "2 months"
  ),

  new XP(
    "Avanade",
    "Avanade",
    "Estagiária de Desenvolvimento Fullstack",
    "Assoc. Fullstack Dev. Intern",
    "Admitida pelo programa Decola Tech 2024, um bootcamp, no qual eu aprendi um pouco de C# e .NET. Fui uma das 100 selecionadas no Brasil inteiro para trabalhar em uma grande empresa de tecnologia.",
    "Admitted by the Decola Tech 2024 program, a bootcamp, through which I learned C# and .NET. I was one of the 100 selected nationwide to work in a major technology company.",
    new Date(2024, 3, 1),
    new Date(),
    "0 meses",
    "0 months"
  ),

  new XP(
    "Voluntário - Verr Med",
    "Volunteer - Verr Med",
    "Desenvolvedora Fullstack",
    "Fullstack Dev",
    "O projeto está passando por uma refatoração e estou responsável, primariamente, pelo desenvolvimento do backend e gerenciamento do projeto. Desenvolvimento em Python, MongoDB, FastAPI, OpenAI API e GCP Cloud Functions e Workflows.",
    "The project is undergoing refactoring and I am primarily responsible for backend development and project management. Development in Python, MongoDB, FastAPI, OpenAI API, and GCP Cloud Functions and Workflows.",
    new Date(2024, 2, 1),
    new Date(),
    "1 mês",
    "1 month"
  ),
];

export const xpEN = [
  {
    company: "Onboard Program - Porto Digital",
    role: "Resident",
    desc: "Developed projects from scratch, from requirements gathering, UI design, to coding the final product. My team and I were finalists at the Demoday of the 1st period (with the Feel Fine project) and were again at the Demoday in the 2nd period (with a project developed for the Arcomix supermarket chain).",
    startYear: "2023",
    endYear: "2024",
    duration: "1 year",
  },
  {
    company: "Alpha College",
    role: "Software Engineering Instructor",
    desc: "Taught the Software Engineering module to students of the Computer Technician course. Responsible for lesson planning and delivery, as well as student assessment based on projects.",
    startYear: "2023",
    endYear: "2023",
    duration: "1 month",
  },
  {
    company: "Mundiale",
    role: "Chatbot Developer Intern",
    desc: "Responsible for developing and maintaining chatbots on the Blip platform, using UI and Javascript. Also developed chatbot design skills and enhanced my JS skills. Contract ended due to another opportunity.",
    startYear: "2024",
    endYear: "2024",
    duration: "2 months",
  },
  {
    company: "Avanade",
    role: "Assoc. Fullstack Dev. Intern",
    desc: "Admitted by the Decola Tech 2024 program, a bootcamp, through which I learned C# and .NET. I was one of the 100 selected nationwide to work in a major technology company.",
    startYear: "2024",
    endYear: "present",
    duration: "0 months",
  },
  {
    company: "Volunteer - Verr Med",
    role: "Fullstack Dev",
    desc: "The project is undergoing refactoring and I am primarily responsible for backend development and project management. Development in Python, MongoDB, FastAPI, OpenAI API, and GCP Cloud Functions and Workflows.",
    startYear: "2024",
    endYear: "present",
    duration: "1 month",
  },
];
