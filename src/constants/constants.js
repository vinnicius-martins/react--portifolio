export const projects = [
  {
    title: 'Portfolio',
    description: "This portfolio developed in React.js",
      image: '/images/projects/portfolio.png',
      tags: ['React.js', 'Styled-Components', 'JavaScript'],
    source: 'https://github.com/vinnicius-martins/react--portifolio',
    visit: 'vinnicius-martins-portfolio.vercel.app',
    id: 0,
  },
  {
    title: 'Basic Calculator',
    description: "A calculator developed in React.js",
      image: '/images/projects/calculator.png',
      tags: ['React.js', 'CSS3', 'JavaScript'],
    source: 'https://github.com/vinnicius-martins/react-calculator',
    visit: 'https://vinnicius-martins-calculator.netlify.app/',
    id: 1,
  },
  {
    title: 'Zip Code Finder',
    description: "A Brazilian postal code finder",
      image: '/images/projects/zipcode.png',
      tags: ['React.js', 'API', 'TypeScript', 'Chakra UI'],
    source: 'https://github.com/vinnicius-martins/react--consulta-cep',
    visit: 'https://vinnicius-martins-consulta-cep.vercel.app/',
    id: 2,
  },
];

export const TimeLineData = [
  { year: 2016, text: 'Started my journey in IT technical education, where I learned my first language, Java', },
  { year: 2020, text: 'Started computer science course in college', },
  { year: 2021, text: 'Worked as a developer at Domingues e Pinho Contadores', },
  { year: 2022, text: 'Started to develop in parallel projects', },
];

export const AcomplishmentsData = [
  { number: new Date().getFullYear() - 2016, text: 'Years Coding', },
  { number: projects.length, text: 'Projects in portfolio. Warning: Should increase soon...'},
];