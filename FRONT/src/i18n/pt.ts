import { xp } from "@/data/xp";

export const pt = {
  startSection: {
    hello: "Olá!",
    name: "Me chamo Clara.",
    role: "Webdeveloper",
    bio: "Sou desenvolvedora full stack com foco em frontend web e mobile, apaixonada por criar interfaces intuitivas e performáticas. Tenho experiência com React, Next.js, TypeScript, Flutter e Xamarin, além de backend com Ruby on Rails, Python (FastAPI) e ASP.NET Core. Trabalho com bancos de dados como PostgreSQL, SQL Server e MongoDB. Já atuei na migração de apps, otimização de sistemas e apoiei estagiárias no aprendizado técnico e integração com o time. Também desenvolvi projetos do zero — desde o levantamento de requisitos até o deploy — e estou sempre em busca de novos aprendizados e desafios. Se você busca alguém comprometida, com visão de produto e foco em qualidade, vamos conversar!",
    contactBtn: "Fale Comigo",
    resumeBtn: "Currículo",
  },
  skillsSection: {
    title: "Skills",
    beginner: "iniciante",
    intermediate: "intermediário",
    advanced: "avançado",
    expert: "expert",
  },
  projectsSection: {
    title: "Projetos",
    projects: [
      {
        name: "Nome do projeto 1",
        skills: "skill 1, skill 2, skill 3",
        description:
          "Description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget sem et ante dapibus gravida facilisis ac felis. Donec euismod tellus ac sem iaculis, in maximus ex semper. Maecenas dignissim arcu sapien, ac egestas dolor semper eget. Proin non tortor id metus viverra semper a eget orci. Ut est magna, tristique id tincidunt vel, mattis nec turpis. Nulla cursus magna non sem fringilla, et pulvinar orci tincidunt. Praesent eget ornare odio.",
        imageUrl: "placeholderimg.jpg",
      },
    ],
  },
  workXpSection: {
    title: "Experiência",
    xp: xp,
  },
  contactMeSection: {
    title: "Contato",
    text: "Quer conversar sobre projetos interessantes ou colaborar em novas ideias? Estou sempre aberta a novas oportunidades e adoraria ouvir de você! Não hesite em me contatar através do formulário de contato abaixo ou através das minhas redes sociais.",
    location: {
      title: "Localização",
      city: "Recife",
      state: "PE",
      country: "BR",
    },
    form: {
      nameLabel: "Seu Nome",
      emailLabel: "Seu Email",
      phoneLabel: "Seu Telefone",
      messageLabel: "Sua Mensagem",
      button: "Enviar",
      buttonSuccess: "Enviado",
      errorMsg: {
        empty: "Campo obrigatório",
        max1000: "Máx. 1000 caracteres",
        invalidEmail: "Esse email não é válido",
        max20: "Máx. 20 caracteres",
      },
    },
  },
  buttons: {
    showMore: "Ver Mais",
    showLess: "Ver Menos",
    moreInfo: "info",
  },
};
