export default class Skill {
  name: string;
  level: number;

  constructor(name: string, level: 1 | 2 | 3 | 4) {
    this.name = name;
    this.level = level;
  }
}

export const skills = [
  new Skill("Vue.js", 2),
  new Skill("React.js", 2),
  
  new Skill("Flutter", 1),
  new Skill("Xamarin", 2),
  
  new Skill("REST APIs", 1),
  
  new Skill("Flask", 1),
  new Skill("FastAPI", 1),
  new Skill("Python", 2),

  new Skill("C#", 2),
  new Skill("Entity Framework", 1),
  new Skill("Identity Framework", 1),
  new Skill("ASP.NET MVC", 1),
  new Skill("ASP.NET Core", 1),
  new Skill(".NET", 2),

  new Skill("OpenAI API", 1),
  
  new Skill("Chatbot Design", 2),
  new Skill("Blip", 1),
  new Skill("Telebot.py API", 2),
  
  new Skill("Firebase Auth", 1),
  new Skill("Firebase RTDB", 2),
  
  new Skill("Tailwind CSS", 1),
  new Skill("CSS", 2),
  new Skill("Bootstrap", 2),
  
  new Skill("Typescript", 2),
  new Skill("Javascript", 3),
  new Skill("JQuery", 1),
  new Skill("NPM", 1),
  
  new Skill("Figma (Software)", 1),
  new Skill("UX", 2),
  
  new Skill("GCP Cloud Functions", 1),
  new Skill("GCP Cloud Workflows", 1),
  
  new Skill("Jest", 1),
  
  new Skill("PostgreSQL", 2),
  new Skill("SQL Server", 1),
  new Skill("MongoDB", 1),
  
  new Skill("Redlock", 1),
  new Skill("Docker", 1),
];
