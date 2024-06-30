export default class Project {
  namePt: string;
  nameEn: string;
  descPt: string;
  descEn: string;
  skills: string[];
  imagePath: string;
  url: string;
  alignImage: string;

  constructor(
    namePt: string,
    nameEn: string,
    descPt: string,
    descEn: string,
    skills: string[],
    imagePath: string,
    url: string,
    alignImage: string = "left"
  ) {
    this.namePt = namePt;
    this.nameEn = nameEn;
    this.descPt = descPt;
    this.descEn = descEn;
    this.skills = skills;
    this.imagePath = imagePath;
    this.url = url;
    this.alignImage = alignImage;
  }
}

export const projects = [
  new Project(
    "Conexão E03",

    "Conexão E03",

    "Na época que era representante de turma, utilizava o Evernote para colocar as informações importantes para meus colegas. Até que decidi criar o Conexão E03: um website para mostrar essas informações, que conta com um painel de admin para gerenciar essas informações e usuários.",

    "Back when I was class president, I used Evernote to share important information with my classmates. Eventually, I decided to create Conexão E03: a website to display this information, featuring an admin panel to manage users and content.",

    ["Python", "MongoDB", "Vue.js"],

    "conexaoe03.png",

    "https://www.linkedin.com/posts/mclaramarinho_vuejs-python-mongodb-activity-7172949987817996288-Tmb4?utm_source=share&utm_medium=member_desktop",

    "right"
  ),

  new Project(
    "The Masker - NPM Package",

    "The Masker - NPM Package",

    "Projeto pessoal para mascarar inputs de texto. Esse pacote pode ser utilizado em qualquer projeto, vanilla ou com framework, que necessite de inputs de texto mascarados. Ele foi desenvolvido com Javascript e possui testes unitários implementados com Jest. Ele está disponível no NPM.",

    "Personal project to mask text inputs. This package can be used in any (vanilla or framework) project that requires masked text inputs. It was developed with Javascript and has unit tests implemented with Jest. It is available on NPM.",

    ["Javascript", "NPM", "Jest"],

    "theMasker.png",

    "https://www.npmjs.com/package/the-masker",

    "left"
  ),

  new Project(
    "Telegram - Utils Bot",

    "Telegram - Utils Bot",

    "Bot de utilidades para telegram com funcionalidade para encurtar URL, gerar QR Codes, remover fundo de imagens, OCR, contagem de caracteres, conversão de arquivos para PDF, e tradução e resumo de textos com o GPT 3.5 Turbo.",

    "Utility bot for Telegram with functions to shorten URLs, generate QR codes, remove image backgrounds, perform OCR, count characters, convert files to PDF, and translate and summarize text using GPT 3.5 Turbo.",

    ["Python", "Flask", "Telebot.py"],

    "telebot.png",

    "https://replit.com/@mclaramarinho/tl-bot-maintenance"
  ),

  new Project(
    "Verr Med",

    "Verr Med",

    "Verr Med é um projeto de extensão comunitária criado para ajudar pessoas com alergias a identificar alérgenos em medicamentos. Ele foi criado em 2023 para uma disciplina universitária. No entanto, somente em 2024, ele se tornou um projeto voluntário mantido e liderado por mim, Tatiana, e Yngrid, juntamente com outros membros da equipe. O produto está em manutenção. Este projeto foi divulgado no site da universidade. Portanto, está atualmente indisponível, até novo aviso.",

    "Verr Med is a community extension project created to help people with allergies identify allergens in drugs. It was created in 2023 for a university class. However, only in 2024, it became a volunteer project maintained and led by me, Tatiana, and Yngrid, alongside other team members. The product is under maintenance. This project was promoted at the university website. Therefore, it is currently unavailable, until further notice.",

    ["Python", "GCP", "MongoDB", "OpenAI API"],

    "verrmed.png",

    "",

    "center top"
  ),

  new Project(
    "Feel Fine",

    "Feel Fine",

    "Projeto desenvolvido para o programa de residência Kick Off do Porto Digital-Recife, cujo tema foi Saúde Mental. Para esse projeto desenvolvemos uma solução de ensino de inteligência socioemocional para crianças. Apresentado no dia 29/05/23 e selecionado para apresentar no DemoDay (13 melhores projetos da edição). Conquistamos, no dia 19/10/23 o 3º lugar na Arena Embarque do Rec'n'Play, com o Feel Fine.",

    "Project developed for the Kick Off residency program at Porto Digital-Recife, with a focus on Mental Health. For this project, we developed a solution for teaching socio-emotional intelligence to children. Presented on 05/29/23 and selected to present at DemoDay (13 best projects of the edition). We won 3rd place at the Rec'n'Play Embarque Arena on 10/19/23 with Feel Fine.",

    ["Front-End", "Figma"],

    "feelfine.png",

    "https://feel-fine.netlify.app/",

    "center"
  ),

  new Project(
    "FDS Control Bot",

    "FDS Control Bot",

    "Estava gastando muito dinheiro nos finais de semana, então decidi fazer um bot para me ajudar a controlar os gastos. Você pode ajustar o limite de gastos e controlar os gastos da semana. Futuros updates: criar categorias de gastos; relatório com o histórico.",

    "I was spending too much money on weekends, so I decided to create a bot to help me control expenses. You can set spending limits and track weekly expenses. Future updates: create spending categories; generate reports with historical data.",

    ["Python", "Telebot.py", "Chatbot Design"],

    "fdsControlBot.png",

    "https://t.me/fds_control_bot"
  ),
];
