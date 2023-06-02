import type { TechList } from '@types';
import { TechStack } from 'src/types/constants';

export const technologiesData: TechList = {
  react: {
    id: 1,
    slug: TechStack.REACT,
    titleLine1: 'React',
    titleLine2: 'UI Library',
    description:
      'Widely-used JavaScript library for building user interfaces, offering modular components, efficient UI updates, and seamless integration with other tools and frameworks.',
    img: 'react-tech-icon-100.svg',
  },
  astro: {
    id: 2,
    slug: TechStack.ASTRO,
    titleLine1: 'Astro',
    titleLine2: 'UI Library',
    description:
      'Modern static site generator that combines the best of static and dynamic approaches, allowing you to build fast, interactive websites using your preferred JavaScript frameworks.',
    img: 'astro-tech-ico.svg',
  },
  html: {
    id: 3,
    slug: TechStack.HTML,
    titleLine1: 'HTML',
    titleLine2: 'Second Line',
    description:
      'The essential markup language for structuring and presenting content on the web, defining the building blocks of web pages and applications.',
    img: 'html-tech-icon.svg',
  },
  scss: {
    id: 4,
    slug: TechStack.SCSS,
    titleLine1: 'SCSS',
    titleLine2: 'Second Line',
    description:
      'Sassy Cascading Style Sheets or SCSS is a superset of the CSS language that allows web designers more freedom and control when designing web designs by adding new features to CSS.',
    img: 'scss-tech-icon.svg',
  },
  typescript: {
    id: 5,
    slug: TechStack.TYPESCRIPT,
    titleLine1: 'TypeScript',
    titleLine2: 'Javscript',
    description:
      'Typed superset of JavaScript that enhances code quality, improves developer productivity, and enables seamless integration with existing JavaScript projects.',
    img: 'tsjs-tech-icon.svg',
  },
  javascript: {
    id: 6,
    slug: TechStack.JAVASCRIPT,
    titleLine1: 'JavaScript',
    titleLine2: 'Second Line',
    description:
      'The foundational language of the web, enabling interactive and dynamic functionality, and powering a wide range of applications on multiple platforms.',
    img: 'javascript-tech-ico.svg',
  },
  expressjs: {
    id: 7,
    slug: TechStack.EXPRESSJS,
    titleLine1: 'ExpressJS',
    titleLine2: 'Backend framework',
    description:
      'Lightweight and flexible Node.js framework for building web applications and APIs, providing a simple yet powerful foundation for server-side development.',
    img: 'express-tech-icon-100.svg',
  },
  cypress: {
    id: 8,
    slug: TechStack.CYPRESS,
    titleLine1: 'Cypress',
    titleLine2: 'Second Line',
    description:
      'E2E testing framework for modern web applications, enabling fast and reliable testing with an intuitive API and comprehensive browser automation capabilities.',
    img: 'cypress-tech-icon.svg',
  },
  playwright: {
    id: 9,
    slug: TechStack.PLAYWRIGHT,
    titleLine1: 'Playwright',
    titleLine2: 'Second Line',
    description:
      'Versatile Node.js library for automating web browsers, offering cross-platform browser automation, UI testing, and headless operation for efficient web development and testing workflows.',
    img: 'playwright-tech-icon.svg',
  },
  nextjs: {
    id: 10,
    slug: TechStack.NEXTJS,
    titleLine1: 'NextJS',
    titleLine2: 'Metaframework',
    description:
      'A powerful React metaframework providing server-side rendering, static site generation, and dynamic capabilities for creating scalable and performant web applications.',
    img: 'nextjs-tech-icon-100.svg',
  },
  styledcomponents: {
    id: 11,
    slug: TechStack.STYLED_COMPONENTS,
    titleLine1: 'Styled Components',
    titleLine2: 'React Styles',
    description:
      'Styled-Components is a CSS-in-JS library that empowers component-based styling in JavaScript, allowing easy and encapsulated styling solutions with dynamic and reusable styles.',
    img: 'styledcomponents-tech-ico.svg',
  },
  markdownit: {
    id: 12,
    slug: TechStack.MARKDOWN_IT,
    titleLine1: 'Markdown-It',
    titleLine2: 'Markdown parser',
    description:
      'Fast and feature-rich Markdown parser and compiler, simplifying the creation of structured content for documentation, blogging, and other text-based applications.',
    img: 'markdown-tech-ico.svg',
  },
  redux: {
    id: 13,
    slug: TechStack.REDUX,
    titleLine1: 'Redux',
    titleLine2: 'App state',
    description:
      'Redux is a predictable state container for JavaScript apps, enabling efficient management of application state and facilitating consistent behavior across various environments and components.',
    img: 'redux-tech-ico.svg',
  },
  vitest: {
    id: 14,
    slug: TechStack.VITEST,
    titleLine1: 'Vitest',
    titleLine2: 'Unit testing',
    description:
      'Comprehensive testing framework for web applications, offering a rich set of testing utilities and integration with popular testing libraries to ensure reliable and high-quality code.',
    img: 'vitest-tech-icon.svg',
  },
};
