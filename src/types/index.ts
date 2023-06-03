import type { TechStack } from './constants';

export type Project = {
  id: number;
  slug: string;
  title: {
    text: string;
    color: string;
    articleHeader: string;
    articleUnderline: string;
  };
  github: {
    text?: string;
    link?: string;
  };
  share: {
    twitter: string;
    linkedIn: string;
    facebook: string;
    whatsapp: string;
  };
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
  acknowledgements?: { text: string; links: { name: string; link: string }[] };
  license: string;

  images: {
    tile: { alt: string; path: string };
    article: { alt: string; path: string }[];
    agile: { alt: string; path: string };
    design: { alt: string; path: string };
    views: { id: string; alt: string; path: string }[];
  };
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
