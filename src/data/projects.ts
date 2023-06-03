import type { ProjectList } from '@types';
import { TechStack } from 'src/types/constants';

export const projectsData: ProjectList = {
  gifter: {
    id: 1,
    slug: 'gifter',
    title: { 
      text: 'Gifter', 
      color: '#E44F26',
      articleHeader: 'Elevate the Joy of Giving',
      articleUnderline: 'A Game-Changing Wishlist Sharing Platform',
     },
    share: {
      twitter: 'https://twitter.com/',
      linkedIn: 'https://twitter.com/',
      facebook: 'https://www.facebook.com/',
      whatsapp: 'https://www.whatsapp.com/',
    },
    description: {
      text: "Gifter is a web application designed to simplify the process of gift-giving. It allows users to create a personalized gift wishlist and share it with friends and family. Whether it's for a birthday, wedding, holiday, or any other special occasion, Gifter makes it easy for both gift recipients and gift-givers to connect and exchange meaningful presents.",
      features: [
        'Non-registered users can search for wishlists by email',
        'User registration and login with email',
        'Adding gifts to the wishlist with details such as status, priority, category, occasion, price, and links',
        'Managing and updating the wishlist',
      ],
    },
    demo: {
      text: 'Gifter is currently in version 0.9:',
      link: 'https://gifter-next13.vercel.app/',
    },
    agile: {
      text: 'Check my Trello agile board that I use for managing tasks and track progression.',
      link: 'https://trello.com/b/9Cu5EkjO/gifter-app',
    },
    design: {
      text: 'Check my design at Figma',
      link: 'https://www.figma.com',
    },
    technologies: {
      beforeText:
        'Gifter incorporates a variety of technologies and testing libraries to provide a dynamic and efficient gift-sharing platform. The key technologies and testing libraries used in this project include:',
      tech: [
        TechStack.REACT,
        TechStack.NEXTJS,
        TechStack.TYPESCRIPT,
        TechStack.HTML,
        TechStack.SCSS,
        TechStack.CYPRESS,
        TechStack.PLAYWRIGHT,
      ],
      afterText:
        "These technologies, along with the testing libraries, collectively contribute to Gifter's functionality, security, real-time updates, and user-friendly interface. By leveraging these tools, I've managed to ensure the reliability and quality of this application.",
    },
    acknowledgements: {
      text: 'Special thanks to Przemek Majewski for his valuable contributions to the development of Gifter. His assistance in identifying and resolving bugs was instrumental in improving the overall appearance and functionality of the application.',
      links: [{ name: 'Przemek Majewski', link: 'https://github.com/emeczku' }],
    },

    license: 'This project is licensed under the MIT License.',

    images: [
      {
        id: '1d',
        alt: 'gifter app on mobile, tablet and desktop screens',
        path: '/assets/GifterImageSide.png',
      },
      {
        id: '2d',
        alt: 'gifter app main page',
        path: '/assets/img-gifter-main-800.png',
      },
      {
        id: '3d',
        alt: 'gifter app list screen',
        path: '/assets/img-gifter-list-800.png',
      },
      {
        id: '4d',
        alt: 'trello board with gifter app tasks',
        path: '/assets/img-gifter-trello-small-800.png',
      },
      {
        id: '5d',
        alt: 'figma with gifter design',
        path: '/assets/img-gifter-figma-800.png',
      },
      {
        id: '6d',
        alt: 'gifter app main page menu screen',
        path: '/assets/img-gifter-main-menu-800.png',
      },
      {
        id: '7d',
        alt: 'gifter app signup screen',
        path: '/assets/img-gifter-auth-signup-800.png',
      },
      {
        id: '8d',
        alt: 'gifter app login screen',
        path: '/assets/img-gifter-auth-login-800.png',
      },
      {
        id: '9d',
        alt: 'gifter app reset password screen',
        path: '/assets/img-gifter-auth-reset-800.png',
      },
      {
        id: '10d',
        alt: 'gifter app dashboard screen',
        path: '/assets/img-gifter-dashboard-800.png',
      },
      {
        id: '11d',
        alt: 'gifter app dashboard general mobile screen',
        path: '/assets/img-gifter-dashboard-mobile-general-800.png',
      },
      {
        id: '12d',
        alt: 'gifter app dashboard email mobile screen',
        path: '/assets/img-gifter-dashboard-mobile-email-800.png',
      },
      {
        id: '13d',
        alt: 'gifter app dashboard delete mobile screen',
        path: '/assets/img-gifter-dashboard-mobile-delete-800.png',
      },
      {
        id: '14d',
        alt: 'gifter app dashboard delete screen',
        path: '/assets/img-gifter-dashboard-delete-800.png',
      },
    ],
  },
  commenteer: {
    id: 1,
    slug: 'gifter',
    title: { text: 'Gifter', color: '#E44F26' },
    articleHeader: 'Elevate the Joy of Giving',
    articleUnderline: 'A Game-Changing Wishlist Sharing Platform',
    share: {
      twitter: 'https://twitter.com/',
      linkedIn: 'https://twitter.com/',
      facebook: 'https://www.facebook.com/',
      whatsapp: 'https://www.whatsapp.com/',
    },
    description: {
      text: "Gifter is a web application designed to simplify the process of gift-giving. It allows users to create a personalized gift wishlist and share it with friends and family. Whether it's for a birthday, wedding, holiday, or any other special occasion, Gifter makes it easy for both gift recipients and gift-givers to connect and exchange meaningful presents.",
      features: [
        'Non-registered users can search for wishlists by email',
        'User registration and login with email',
        'Adding gifts to the wishlist with details such as status, priority, category, occasion, price, and links',
        'Managing and updating the wishlist',
      ],
    },
    demo: {
      text: 'Gifter is currently in version 0.9:',
      link: 'https://gifter-next13.vercel.app/',
    },
    agile: {
      text: 'Check my Trello agile board that I use for managing tasks and track progression.',
      link: 'https://trello.com/b/9Cu5EkjO/gifter-app',
    },
    design: {
      text: 'Check my design at Figma',
      link: 'https://www.figma.com',
    },
    technologies: {
      beforeText:
        'Gifter incorporates a variety of technologies and testing libraries to provide a dynamic and efficient gift-sharing platform. The key technologies and testing libraries used in this project include:',
      tech: [
        TechStack.REACT,
        TechStack.NEXTJS,
        TechStack.TYPESCRIPT,
        TechStack.HTML,
        TechStack.SCSS,
        TechStack.CYPRESS,
        TechStack.PLAYWRIGHT,
      ],
      afterText:
        "These technologies, along with the testing libraries, collectively contribute to Gifter's functionality, security, real-time updates, and user-friendly interface. By leveraging these tools, I've managed to ensure the reliability and quality of this application.",
    },
    acknowledgements: {
      text: 'Special thanks to Przemek Majewski for his valuable contributions to the development of Gifter. His assistance in identifying and resolving bugs was instrumental in improving the overall appearance and functionality of the application.',
      links: [{ name: 'Przemek Majewski', link: 'https://github.com/emeczku' }],
    },

    license: 'This project is licensed under the MIT License.',

    screenPaths: ['@assets/gifter-01.png'],
  },
  backnotes: {
    id: 1,
    slug: 'gifter',
    title: { text: 'Gifter', color: '#E44F26' },
    articleHeader: 'Elevate the Joy of Giving',
    articleUnderline: 'A Game-Changing Wishlist Sharing Platform',
    share: {
      twitter: 'https://twitter.com/',
      linkedIn: 'https://twitter.com/',
      facebook: 'https://www.facebook.com/',
      whatsapp: 'https://www.whatsapp.com/',
    },
    description: {
      text: "Gifter is a web application designed to simplify the process of gift-giving. It allows users to create a personalized gift wishlist and share it with friends and family. Whether it's for a birthday, wedding, holiday, or any other special occasion, Gifter makes it easy for both gift recipients and gift-givers to connect and exchange meaningful presents.",
      features: [
        'Non-registered users can search for wishlists by email',
        'User registration and login with email',
        'Adding gifts to the wishlist with details such as status, priority, category, occasion, price, and links',
        'Managing and updating the wishlist',
      ],
    },
    demo: {
      text: 'Gifter is currently in version 0.9:',
      link: 'https://gifter-next13.vercel.app/',
    },
    agile: {
      text: 'Check my Trello agile board that I use for managing tasks and track progression.',
      link: 'https://trello.com/b/9Cu5EkjO/gifter-app',
    },
    design: {
      text: 'Check my design at Figma',
      link: 'https://www.figma.com',
    },
    technologies: {
      beforeText:
        'Gifter incorporates a variety of technologies and testing libraries to provide a dynamic and efficient gift-sharing platform. The key technologies and testing libraries used in this project include:',
      tech: [
        TechStack.REACT,
        TechStack.NEXTJS,
        TechStack.TYPESCRIPT,
        TechStack.HTML,
        TechStack.SCSS,
        TechStack.CYPRESS,
        TechStack.PLAYWRIGHT,
      ],
      afterText:
        "These technologies, along with the testing libraries, collectively contribute to Gifter's functionality, security, real-time updates, and user-friendly interface. By leveraging these tools, I've managed to ensure the reliability and quality of this application.",
    },
    acknowledgements: {
      text: 'Special thanks to Przemek Majewski for his valuable contributions to the development of Gifter. His assistance in identifying and resolving bugs was instrumental in improving the overall appearance and functionality of the application.',
      links: [{ name: 'Przemek Majewski', link: 'https://github.com/emeczku' }],
    },

    license: 'This project is licensed under the MIT License.',

    screenPaths: ['@assets/gifter-01.png'],
  },
  backnotesapi: {
    id: 1,
    slug: 'gifter',
    title: { text: 'Gifter', color: '#E44F26' },
    articleHeader: 'Elevate the Joy of Giving',
    articleUnderline: 'A Game-Changing Wishlist Sharing Platform',
    share: {
      twitter: 'https://twitter.com/',
      linkedIn: 'https://twitter.com/',
      facebook: 'https://www.facebook.com/',
      whatsapp: 'https://www.whatsapp.com/',
    },
    description: {
      text: "Gifter is a web application designed to simplify the process of gift-giving. It allows users to create a personalized gift wishlist and share it with friends and family. Whether it's for a birthday, wedding, holiday, or any other special occasion, Gifter makes it easy for both gift recipients and gift-givers to connect and exchange meaningful presents.",
      features: [
        'Non-registered users can search for wishlists by email',
        'User registration and login with email',
        'Adding gifts to the wishlist with details such as status, priority, category, occasion, price, and links',
        'Managing and updating the wishlist',
      ],
    },
    demo: {
      text: 'Gifter is currently in version 0.9:',
      link: 'https://gifter-next13.vercel.app/',
    },
    agile: {
      text: 'Check my Trello agile board that I use for managing tasks and track progression.',
      link: 'https://trello.com/b/9Cu5EkjO/gifter-app',
    },
    design: {
      text: 'Check my design at Figma',
      link: 'https://www.figma.com',
    },
    technologies: {
      beforeText:
        'Gifter incorporates a variety of technologies and testing libraries to provide a dynamic and efficient gift-sharing platform. The key technologies and testing libraries used in this project include:',
      tech: [
        TechStack.REACT,
        TechStack.NEXTJS,
        TechStack.TYPESCRIPT,
        TechStack.HTML,
        TechStack.SCSS,
        TechStack.CYPRESS,
        TechStack.PLAYWRIGHT,
      ],
      afterText:
        "These technologies, along with the testing libraries, collectively contribute to Gifter's functionality, security, real-time updates, and user-friendly interface. By leveraging these tools, I've managed to ensure the reliability and quality of this application.",
    },
    acknowledgements: {
      text: 'Special thanks to Przemek Majewski for his valuable contributions to the development of Gifter. His assistance in identifying and resolving bugs was instrumental in improving the overall appearance and functionality of the application.',
      links: [{ name: 'Przemek Majewski', link: 'https://github.com/emeczku' }],
    },

    license: 'This project is licensed under the MIT License.',

    screenPaths: ['@assets/gifter-01.png'],
  },
};
