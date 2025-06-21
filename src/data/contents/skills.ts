export interface Skill {
  title: string;
  content: string; // HTML string
  logoPath: string;
}

export const skills: Skill[] = [
  {
    title: "Programming language",
    content: "<p>JavaScript, TypeScript, Python, C++, Java</p>",
    logoPath: "/images/cpp.png"
  },
  {
    title: "Frontend development",
    content: "<p>HTML, CSS, Vue.js, Nuxt.js, React, Next.js, Node.js</p>",
    logoPath: "/images/frontend.png"
  },
  {
    title: "Product design",
    content: "<p>Figma</p>",
    logoPath: "/images/figma.png"
  },
  {
    title: "Backend development",
    content: "<p>Express.js, Django, Spring Boot</p>",
    logoPath: "/images/backend.png"
  },
  {
    title: "CI / CD",
    content: "<p>Github, Gitlab, Azure DevOps</p>",
    logoPath: "/images/git.png"
  },
  {
    title: "Testing",
    content: "<p>Jest, Vitest, Playwright, Cypress.js, Selenium</p>",
    logoPath: "/images/test.png"
  },
  {
    title: "Cloud Services / DevOps",
    content: "<p>Azure</p>",
    logoPath: "/images/cloud-computing.png"
  },
  {
    title: "Database",
    content: "<p>SQL, SPARQL</p>",
    logoPath: "/images/database.png"
  },
  {
    title: "Buisiness / Data Analytics",
    content: "<p>Pandas, Numpy, Selenium, bs4, Salesforce.com</p>",
    logoPath: "/images/data.png"
  }
];
