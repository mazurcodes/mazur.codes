import { TechStack } from "src/types/constants";
import type { ProjectListType } from "../types";

export const projectsData: ProjectListType = [
  {
    id: 1,
    slug: "gifter",
    title: "Gifter",
    description:
      "Gifter is a web application designed to simplify the process of gift-giving. It allows users to create a personalized gift wishlist and share it with friends and family. Whether it's for a birthday, wedding, holiday, or any other special occasion, Gifter makes it easy for both gift recipients and gift-givers to connect and exchange meaningful presents.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a?",
    technology: [
      TechStack.REACT,
      TechStack.NEXTJS,
      TechStack.HTML,
      TechStack.SCSS,
      TechStack.TYPESCRIPT,
      TechStack.CYPRESS,
      TechStack.PLAYWRIGHT,
    ],
    userFlow: ["main", "search"],
    colors: ["#422400", "#d2d2d2", "#ffd11aff"],
    typography: {
      font: "Merriweather",
      weights: [400, 700, 900],
    },
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 2,
    slug: "commenteer",
    title: "Commenteer",
    description:
      "Commenteer is an application specifically designed for media creators to simplify the process of generating multiple comments for their content. It leverages the power of Next.js, TypeScript, and Firebase to provide a seamless user experience.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a?",
    technology: [TechStack.REACT, TechStack.NEXTJS],
    userFlow: ["main", "search"],
    colors: ["#422400", "#d2d2d2", "#ffd11aff"],
    typography: {
      font: "Arial",
      weights: [400, 700, 900],
    },
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 3,
    slug: "backnotes",
    title: "BackNotes",
    description:
      "Your favorite markdown editor... Well, at the beginning of the programming jurney the urge to remember everything is huge. Then you realise that not everything need to be remembered...",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a? Dolore aliquam iste, totam, quibusdam praesentium culpa expedita ducimus a accusamus perferendis cumque ipsum pariatur ullam mollitia aliquid repellat provident officiis maxime commodi quasi odio dolores neque blanditiis? Doloremque quibusdam.",
    technology: [
      TechStack.REACT,
      TechStack.HTML,
      TechStack.JAVASCRIPT,
      TechStack.STYLED_COMPONENTS,
      TechStack.MARKDOWN_IT,
    ],
    userFlow: ["main", "search"],
    colors: ["#422400", "#d2d2d2", "#ffd11aff"],
    typography: {
      font: "Arial",
      weights: [400, 700, 900],
    },
    screenPaths: ["@assets/gifter-01.png"],
  },
  {
    id: 4,
    slug: "backnotesapi",
    title: "BackNotesAPI",
    description:
      "... and then you need a friend that will run in the background preparing your ‘knowledge’ to be served.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a? Dolore aliquam iste, totam, quibusdam praesentium culpa expedita.",
    technology: [TechStack.JAVASCRIPT, TechStack.EXPRESSJS],
    userFlow: ["main", "search"],
    colors: ["#422400", "#d2d2d2", "#ffd11aff"],
    typography: {
      font: "Arial",
      weights: [400, 700, 900],
    },
    screenPaths: ["@assets/gifter-01.png"],
  },
  // {
  //   id: 5,
  //   slug: "weatherapp",
  //   title: "Weather App",
  //   description:
  //     "Sole purpose of this app was to become my virtual testing pig... for a react-testing-library.",
  //   overview:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consequatur, facilis tempore quisquam, voluptates odit eos corrupti, quae labore praesentium voluptate velit aspernatur magni amet delectus dolores necessitatibus officiis porro qui laborum quod dicta voluptatem. Quod iure earum error facilis dicta asperiores at cum possimus corrupti sunt nobis, accusamus, exercitationem voluptate, rerum nihil laborum vel harum maiores nostrum a? Dolore aliquam iste, totam, quibusdam praesentium culpa.",
  //   technology: [
  //     TechStack.REACT,
  //     TechStack.REDUX,
  //     TechStack.TYPESCRIPT,
  //     TechStack.SCSS,
  //   ],
  //   userFlow: ["main", "search"],
  //   colors: ["#422400", "#d2d2d2", "#ffd11aff"],
  //   typography: {
  //     font: "Arial",
  //     weights: [400, 700, 900],
  //   },
  //   screenPaths: ["@assets/gifter-01.png"],
  // },
];
