import type { TechList } from '@types';
import { TechStack } from 'src/types/constants';

export const technologiesData: TechList = {
  react: {
    id: 1,
    slug: TechStack.REACT,
    titleLine1: 'React',
    titleLine2: 'UI Library',
    description:
      'Building user interfaces with its component-based architecture, allowing for the creation of reusable and modular UI components.',
    img: 'react-tech-icon-100.svg',
  },
  astro: {
    id: 2,
    slug: TechStack.ASTRO,
    titleLine1: 'Astro',
    titleLine2: 'UI Library',
    description:
      'Astro is a web framework designed for speed where we can use our favorite UI components and libraries.',
    img: 'astro-tech-ico.svg',
  },
  html: {
    id: 3,
    slug: TechStack.HTML,
    titleLine1: 'HTML',
    titleLine2: 'Second Line',
    description:
      'The HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
    img: 'html-tech-ico.svg',
  },
  scss: {
    id: 4,
    slug: TechStack.SCSS,
    titleLine1: 'SCSS',
    titleLine2: 'Second Line',
    description:
      'Sassy Cascading Style Sheets or SCSS is a superset of the CSS language that allows web designers more freedom and control when designing web designs by adding new features to CSS.',
    img: 'scss-tech-ico.svg',
  },
  typescript: {
    id: 5,
    slug: TechStack.TYPESCRIPT,
    titleLine1: 'TypeScript',
    titleLine2: 'Javscript',
    description:
      'TypeScript is a free and open source high-level programming language. It is a strict syntactical superset of JavaScript',
    img: 'tsjs-tech-icon.svg',
  },
  javascript: {
    id: 6,
    slug: TechStack.JAVASCRIPT,
    titleLine1: 'JavaScript',
    titleLine2: 'Second Line',
    description:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web,',
    img: 'javascript-tech-ico.svg',
  },
  expressjs: {
    id: 7,
    slug: TechStack.EXPRESSJS,
    titleLine1: 'ExpressJS',
    titleLine2: 'Backend framework',
    description:
      'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    img: 'express-tech-icon-100.svg',
  },
  cypress: {
    id: 8,
    slug: TechStack.CYPRESS,
    titleLine1: 'Cypress',
    titleLine2: 'Second Line',
    description:
      'Cypress is a next generation front end testing tool built for the modern web.',
    img: 'cypress-tech-ico.svg',
  },
  playwright: {
    id: 9,
    slug: TechStack.PLAYWRIGHT,
    titleLine1: 'Playwright',
    titleLine2: 'Second Line',
    description:
      'Playwright enables reliable end-to-end testing for modern web apps.',
    img: 'playwright-tech-icon.svg',
  },
  nextjs: {
    id: 10,
    slug: TechStack.NEXTJS,
    titleLine1: 'NextJS',
    titleLine2: 'Second Line',
    description:
      'React metaframework used to build web applications. It provides benefits such as improved performance, automatic code splitting, and simplified routing',
    img: 'nextjs-tech-icon-100.svg',
  },
  styledcomponents: {
    id: 11,
    slug: TechStack.STYLED_COMPONENTS,
    titleLine1: 'Styled Components',
    titleLine2: 'React Styles',
    description:
      'Styled-Components is a React-specific CSS-in-JS styling solution to write actual CSS code to style React components, as well as in React Native',
    img: 'styledcomponents-tech-ico.svg',
  },
  markdownit: {
    id: 12,
    slug: TechStack.MARKDOWN_IT,
    titleLine1: 'Markdown-It',
    titleLine2: 'Markdown parser',
    description: 'Markdown parser done right. Fast and easy to extend',
    img: 'markdown-tech-ico.svg',
  },
  redux: {
    id: 13,
    slug: TechStack.REDUX,
    titleLine1: 'Redux',
    titleLine2: 'App state',
    description:
      'Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test.',
    img: 'redux-tech-ico.svg',
  },
  vitest: {
    id: 14,
    slug: TechStack.VITEST,
    titleLine1: 'Vitest',
    titleLine2: 'Unit testing',
    description:
      'Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test.',
    img: 'vitest-tech-icon.svg',
  },
};
