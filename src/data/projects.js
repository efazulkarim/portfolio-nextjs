const projects = [
  {
    title: 'Airbnb-Clone',
    description: "This project is full-stack, with server-side rendering and routing. It has a huge set of features: browsing houses, logging in, booking a house, having the logic to determine if dates are already booked, paying the stay using Stripe, and then becoming hosts, adding our own houses with all the details, and selling them!",
    image: '/images/Airbnb.png',
    tags: ['NextJS', 'ExpressJS', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/dark-archer1717/nextbnb',
    url: 'https://github.com/dark-archer1717/nextbnb',
    repoType: "public",
    icon: "/logo/nextjs.webp",
    id: 0,
  },
  {
    title: 'Marketing Website',
    description: "This web-app was built using Next.js 13. For the design I used tailwind-css.This was built for a local company to promote their brand which is also SEO optimized. It is also mobile-friendly designed. ",
    image: '/images/5.png',
    tags: ['Next.js', 'React', 'JavaScript', 'Tailwind-CSS'],
    url: 'https://www.sohagnetbd.com/',
    repoType: "private",
    icon: "/logo/nextjs.webp",
    id: 1,
  },
  {
    title: 'News App',
    description: "This is a news app built using ReactJs and NewsAPI. The purpose of the project is to develop an application which will display news articles and user can browse news articles",
    image: '/images/3.PNG',
    tags: ['React', 'Bootstrap', 'NewsAPI'],
    source: 'https://github.com/dark-archer1717/NewsToday',
    url: 'https://github.com/dark-archer1717/NewsToday',
    icon: "/logo/reactjs.webp",
    id: 2,
    repoType: "public",
  },
  {
    title: "Social Media API",
    description:
      "An RESTful API developed using Node.js, Express.js and MongoDB to integrate backend and frontend with ease.",
    icon: "/logo/nodejs.webp",
    sceenshots: [],
    githubUrl: "https://github.com/nixrajput/social-media-api-nodejs",
    repoType: "private",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
  {
    title: "E-commerce API",
    description:
      "An RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/logo/nodejs.webp",
    sceenshots: [],
    githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
    repoType: "public",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
];

export default projects;
