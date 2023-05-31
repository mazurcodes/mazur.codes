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
  title: string;
  description: string;
  img: string;
};
