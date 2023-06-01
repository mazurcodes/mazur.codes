import type { TechStack } from './constants';

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: { text: string; features: string[] };
  demo: {
    text: string;
    link: string;
  };
  agile: {
    text: string;
    link: string;
  };
  design: {
    text: string;
    link: string;
  };
  technologies: {
    beforeText?: string;
    tech: TechStack[];
    afterText?: string;
  };
  acknowledgements: string;
  license: string;

  screenPaths: string[];
};

export type ProjectList = {
  [key: string]: Project;
};

export type Technology = {
  id: number;
  slug: TechStack;
  titleLine1: string;
  titleLine2: string;
  description: string;
  img: string;
};

export type TechList = {
  [TechStack.ASTRO]: Technology;
  [TechStack.CYPRESS]: Technology;
  [TechStack.EXPRESSJS]: Technology;
  [TechStack.HTML]: Technology;
  [TechStack.JAVASCRIPT]: Technology;
  [TechStack.MARKDOWN_IT]: Technology;
  [TechStack.NEXTJS]: Technology;
  [TechStack.PLAYWRIGHT]: Technology;
  [TechStack.REACT]: Technology;
  [TechStack.REDUX]: Technology;
  [TechStack.SCSS]: Technology;
  [TechStack.STYLED_COMPONENTS]: Technology;
  [TechStack.TYPESCRIPT]: Technology;
  [TechStack.VITEST]: Technology;
};
