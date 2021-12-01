export default {
  nav: {
    // logo: 'CC',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img: '/assets/jahid-bg.png',
    text: ['Hi!', "I'm jahidul islam.", 'A '],
    typical: [
      'web designer.',
      2000,
      'Web developer.',
      2000,
      'Mobile Developer',
      2000,
    ],
    btnText: 'Discover More',
  },
  work: {
    title: 'My Latest Projects',
    img: process.env.PUBLIC_URL + '/assets/project.gif',

    projectName: 'Time Tracer',
    desc:
      `This is a website about selling all kind of wrist watches. The website promotes most of the well known watch brands like Rolex, Omega. Casio, Seiko and many other.It's a Demo Project. 
      This is a full-stack project and the technologies used in this are React, React Router, React Private Route, React Hook, Admin Panel, MongoDB, NodeJS, ExpressJS, Firebase Auth, Firebase Hosting.`,
  },
  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
    ],
    desc: `I have skill on HTML5, CSS3, Bootstrap, Tailwindcss, Metarializecss, Nodejs, React, Express, MOngodb, Photoshop, Illustrator, Gimp, Inkscape, affinity photo & Designer, Adobe Xd, MS Office and Figma`,
  },
  contact: {
    title: 'Ping Me!',
    desc:
      "If you have any questions about me or my projects, or (politely) argue about the best albums of the 2010s, I'm your guy! I'm available to grab a coffee and chat! Drop a comment, question, concern, or Any discussion, and thanks for stopping by!",

    img: process.env.PUBLIC_URL + '/assets/jahid-bg.png',

  },
};
