export default {
  nav: {
    // logo: 'CC',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img: '/assets/portrait1x1.png',
    imgPlaceholder: '/assets/blur.png',
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
    img: process.env.PUBLIC_URL + '/assets/radiant.gif',

    projectName: 'Radiant Academy',
    desc:
      `This is a Team project where i was the Team Leader and I led a team of seven members and altogether built this production ready web app. Technologies used in this project are Next.Js, Tailwind Css, MongoDB, Vercel, Firebase, PayPal, Firebase Auth, Redux and many more.`,
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
    desc: `I have skills on HTML5, CSS3, Bootstrap, Tailwindcss, Metarializecss, SASS, React.js, Next.js, Redux, Node.js, Express.js, Jira, Trello, Socket.io, WebRTC, Adobe XD, and Figma`,
  },
  contact: {
    title: 'Ping Me!',
    desc:
      "If you have any questions about me or my projects, or (politely) argue about the best albums of the 2010s, I'm your guy! I'm available to grab a coffee and chat! Drop a comment, question, concern, or Any discussion, and thanks for stopping by!",

    img: process.env.PUBLIC_URL + '/assets/jahid-bg.png',

  },
  git:{
    title: 'More Projects',
    desc: 'For more projects, please visit my github profile',
    link: '',
    img: process.env.PUBLIC_URL + '/assets/more.png',
  }
};
