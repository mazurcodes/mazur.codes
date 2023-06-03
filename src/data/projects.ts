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
    github: {
      link: 'https://github.com/mazurcodes/gifter-next13',
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

    images: {
      tile: {
        alt: 'gifter app on mobile, tablet and desktop screens',
        path: '/assets/GifterImageSide.png',
      },
      article: [
        {
          alt: 'gifter app main page',
          path: '/assets/img-gifter-main-800.png',
        },
        {
          alt: 'gifter app list screen',
          path: '/assets/img-gifter-list-800.png',
        },
      ],
      agile: {
        alt: 'trello board with gifter app tasks',
        path: '/assets/img-gifter-trello-small-800.png',
      },
      design: {
        alt: 'figma with gifter design',
        path: '/assets/img-gifter-figma-800.png',
      },
      views: [
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
          alt: 'gifter app dashboard reset password mobile screen',
          path: '/assets/img-gifter-dashboard-mobile-password-800.png',
        },
        {
          id: '14d',
          alt: 'gifter app dashboard delete mobile screen',
          path: '/assets/img-gifter-dashboard-mobile-delete-800.png',
        },
        {
          id: '15d',
          alt: 'gifter app dashboard delete screen',
          path: '/assets/img-gifter-dashboard-delete-800.png',
        },
      ],
    },
  },
  commenteer: {
    id: 1,
    slug: 'commenteer',
    title: {
      text: 'Commenteer',
      color: '#E44F26',
      articleHeader: 'Create engagement',
      articleUnderline: 'Powerful tool for media creators',
    },
    share: {
      twitter: 'https://twitter.com/',
      linkedIn: 'https://twitter.com/',
      facebook: 'https://www.facebook.com/',
      whatsapp: 'https://www.whatsapp.com/',
    },
    description: {
      text: 'Commenteer is an application specifically designed for media creators to simplify the process of generating multiple comments for their content. It leverages the power of Next.js, TypeScript, and Firebase to provide a seamless user experience. With Commenteer, creators can easily create custom sets of comments to enhance engagement and interaction with their audience. The application allows users to specify the project name, comment type (positive, negative, neutral, or questions), and the desired quantity of comments.',
      features: [
        'Easy Comment Generation: Commenteer streamlines the process of creating a large number of comments. With just a few simple inputs, YouTube creators can generate a customizable set of comments to be used in their videos.',
        'Random Comment Generation: Commenteer ensures that the generated comments are randomized, providing a diverse and natural-sounding set of comments for YouTube creators.',
        'Firebase Authentication: Commenteer utilizes Firebase Authentication to enable secure user registration and login. This ensures that only authorized creators have access to the application.',
        'Firestore Database: Commenteer leverages Firebase Firestore as its database solution. This allows for efficient storage and retrieval of comment data, ensuring optimal performance.',
      ],
    },
    github: {
      link: 'https://github.com/mazurcodes/commenteer',
    },
    demo: {
      text: 'Commenteer is currently in version 0.1 and under development:',
      link: 'https://commenteer.vercel.app/',
    },
    agile: {
      text: 'Check my Trello agile board that I use for managing tasks and track progression.',
      link: 'https://trello.com/b/E2uFBZuT/commenteer',
    },
    design: {
      text: 'Check my design at Figma',
      link: 'https://www.figma.com/file/5vCILEMuIg2ClBWIQST7iZ/Commenteer?type=design&node-id=0%3A1&t=se4e7He5aaKJMJzz-1',
    },
    technologies: {
      beforeText:
        'Technologies that ensure Commenteer delivers a performant, secure, and user-friendly experience for media creators:',
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
        "By leveraging these tools, I've managed to ensure the reliability and quality of this application.",
    },

    license: 'This project is licensed under the MIT License.',

    images: {
      tile: {
        alt: 'commenteer app on mobile, tablet and desktop screens',
        path: '/assets/CommenteerImageSide.png',
      },
      article: [
        {
          alt: 'commenteer app main page',
          path: '/assets/CommenteerImageSide.png',
        },
        {
          alt: 'gifter app list screen',
          path: '/assets/img-commenteer-main-desk-800.png',
        },
      ],
      agile: {
        alt: 'trello board with commenteer app tasks',
        path: '/assets/img-commenteer-trello-small-800.png',
      },
      design: {
        alt: 'figma with commenteer design',
        path: '/assets/img-commenteer-figma-small-800.png',
      },
      views: [
        {
          id: '6d',
          alt: 'commenteer app tablet screen',
          path: '/assets/img-commenteer-tablet-800.png',
        },
        {
          id: '7d',
          alt: 'commenteer menu close',
          path: '/assets/img-commenteer-menu-close-small-800.png',
        },
        {
          id: '8d',
          alt: 'commenteer menu half open',
          path: '/assets/img-commenteer-menu-halfopen-small-800.png',
        },
        {
          id: '9d',
          alt: 'commenteer full menu',
          path: '/assets/img-commenteer-menu-small-800.png',
        },
        {
          id: '10d',
          alt: 'commenteer app mobile screens',
          path: '/assets/img-commenteer-mobile-800.png',
        },
        {
          id: '11d',
          alt: 'commenteer app authorization welcome screen',
          path: '/assets/img-commenteer-auth-small-800.png',
        },
        {
          id: '12d',
          alt: 'commenteer app authorization signup screen',
          path: '/assets/img-commenteer-auth-signup-small-800.png',
        },
        {
          id: '13d',
          alt: 'commenteer app authorization login screen',
          path: '/assets/img-commenteer-auth-login-small-800.png',
        },
      ],
    },
  },
  backnotes: {
    id: 1,
    slug: 'backnotes',
    title: {
      text: 'BackNotes',
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
      text: '',
      features: [
        'Non-registered users can search for wishlists by email',
        'User registration and login with email',
        'Adding gifts to the wishlist with details such as status, priority, category, occasion, price, and links',
        'Managing and updating the wishlist',
      ],
    },
    github: {
      link: 'https://github.com/mazurcodes/gifter-next13',
    },
    demo: {
      text: 'BackNotes is currently in version 0.9:',
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

    images: {
      tile: {
        alt: 'gifter app on mobile, tablet and desktop screens',
        path: '/assets/GifterImageSide.png',
      },
      article: [
        {
          alt: 'gifter app main page',
          path: '/assets/img-gifter-main-800.png',
        },
        {
          alt: 'gifter app list screen',
          path: '/assets/img-gifter-list-800.png',
        },
      ],
      agile: {
        alt: 'trello board with gifter app tasks',
        path: '/assets/img-gifter-trello-small-800.png',
      },
      design: {
        alt: 'figma with gifter design',
        path: '/assets/img-gifter-figma-800.png',
      },
      views: [
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
          alt: 'gifter app dashboard reset password mobile screen',
          path: '/assets/img-gifter-dashboard-mobile-password-800.png',
        },
        {
          id: '14d',
          alt: 'gifter app dashboard delete mobile screen',
          path: '/assets/img-gifter-dashboard-mobile-delete-800.png',
        },
        {
          id: '15d',
          alt: 'gifter app dashboard delete screen',
          path: '/assets/img-gifter-dashboard-delete-800.png',
        },
      ],
    },
  },
  backnotesapi: {
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
    github: {
      link: 'https://github.com/mazurcodes/gifter-next13',
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

    images: {
      tile: {
        alt: 'gifter app on mobile, tablet and desktop screens',
        path: '/assets/GifterImageSide.png',
      },
      article: [
        {
          alt: 'gifter app main page',
          path: '/assets/img-gifter-main-800.png',
        },
        {
          alt: 'gifter app list screen',
          path: '/assets/img-gifter-list-800.png',
        },
      ],
      agile: {
        alt: 'trello board with gifter app tasks',
        path: '/assets/img-gifter-trello-small-800.png',
      },
      design: {
        alt: 'figma with gifter design',
        path: '/assets/img-gifter-figma-800.png',
      },
      views: [
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
          alt: 'gifter app dashboard reset password mobile screen',
          path: '/assets/img-gifter-dashboard-mobile-password-800.png',
        },
        {
          id: '14d',
          alt: 'gifter app dashboard delete mobile screen',
          path: '/assets/img-gifter-dashboard-mobile-delete-800.png',
        },
        {
          id: '15d',
          alt: 'gifter app dashboard delete screen',
          path: '/assets/img-gifter-dashboard-delete-800.png',
        },
      ],
    },
  },
};
