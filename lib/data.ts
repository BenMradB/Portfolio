import {
  ResumeDataTye,
  RouteType,
  ServiceType,
  SkillType,
  SocialMediaType,
  WorkType,
} from "@/types/types";

export const routes: RouteType[] = [
  { label: "About Me", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/work" },
  { label: "Hire Me", href: "/hire-me" },
];

export const socialMedia: SocialMediaType[] = [
  {
    icon: "/icons/github.svg",
    href: "https://github.com/BenMradB",
  },
  {
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/benmrad-bilel/",
  },
  {
    icon: "/icons/youtube.svg",
    href: "https://www.youtube.com/channel/UC578BNFWa7U1-NnZIfS2_BQ",
  },
  {
    icon: "/icons/udemy.svg",
    href: "https://www.udemy.com/user/benmrad-bilel-2/",
  },
];

export const services: ServiceType[] = [
  {
    title: "Frontend Development",
    description:
      "I can build a beautiful and responsive website using modern technologies like React.js, Next.js, and Tailwind CSS.",
    icons: [
      {
        label: "React.js",
        icon: "/icons/react.svg",
      },
      {
        label: "Next.js",
        icon: "/icons/nextjs.svg",
      },
      {
        label: "Tailwind CSS",
        icon: "/icons/tailwindcss.svg",
      },
      {
        label: "Framer Motion",
        icon: "/icons/framermotion.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "I can build a scalable and secure backend using Node.js, Express.js, and MongoDB.",
    icons: [
      {
        label: "Node.js",
        icon: "/icons/nodejs.svg",
      },
      {
        label: "Express.js",
        icon: "/icons/expressjs.svg",
      },
      {
        label: "MongoDB",
        icon: "/icons/mongodb.svg",
      },
      {
        label: "Nest.js",
        icon: "/icons/nest.svg",
      },
    ],
  },
  {
    title: "Fullstack Development",
    description:
      "I can build a fullstack application using MERN stack (MongoDB, Express.js, React.js, Node.js).",
    icons: [
      {
        label: "MongoDB",
        icon: "/icons/mongodb.svg",
      },
      {
        label: "Express.js",
        icon: "/icons/expressjs.svg",
      },
      {
        label: "React.js",
        icon: "/icons/react.svg",
      },
      {
        label: "Next.js",
        icon: "/icons/nextjs.svg",
      },

      {
        label: "Node.js",
        icon: "/icons/nodejs.svg",
      },
      {
        label: "Framer Motion",
        icon: "/icons/framermotion.svg",
      },
      {
        label: "Nest.js",
        icon: "/icons/nest.svg",
      },
    ],
  },
  {
    title: "Mobile Development",
    description:
      "I can build a mobile application using React Native and Expo and deploy it to the App Store and Google Play Store.",
    icons: [
      {
        label: "React Native",
        icon: "/icons/react.svg",
      },
      {
        label: "Expo",
        icon: "/icons/expo.svg",
      },
    ],
  },
];

export const experiences: ResumeDataTye[] = [
  {
    title: "Frontend Developer",
    startDate: "January 2022",
    endDate: "February 2022",
    company: "Tunisie Telecom",
  },
  {
    title: "FullStack Developer",

    startDate: "January 2023",
    endDate: "February 2023",
    company: "Fofusa engineering",
  },
  {
    title: "Fullstack Developer",

    startDate: "January 2024",
    endDate: "July 2024",
    company: "Diool",
  },
];

export const educations: ResumeDataTye[] = [
  {
    title: "Bachelor's Degree in Informatics Science",

    startDate: "2021",
    endDate: "2021",
    company: "Lycee 07 Avril 1943",
  },
  {
    title: "License's Degree in IT",

    startDate: "2022",
    endDate: "2024",
    company: "Iset Nabeul",
  },
];

export const skills: SkillType[] = [
  {
    label: "HTML",
    icon: "/icons/html.svg",
  },
  {
    label: "CSS",
    icon: "/icons/css.svg",
  },
  {
    label: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
  },
  {
    label: "JavaScript",
    icon: "/icons/js.svg",
  },
  {
    label: "TypeScript",
    icon: "/icons/ts.svg",
  },
  {
    label: "React.js",
    icon: "/icons/react.svg",
  },
  {
    label: "Next.js",
    icon: "/icons/nextjs.svg",
  },
  {
    label: "Angular",
    icon: "/icons/angular.svg",
  },
  {
    label: "Spring Boot.js",
    icon: "/icons/springboot.svg",
  },
  {
    label: "Node.js",
    icon: "/icons/nodejs.svg",
  },
  {
    label: "Express.js",
    icon: "/icons/expressjs.svg",
  },
  {
    label: "MongoDB",
    icon: "/icons/mongodb.svg",
  },
  {
    label: "Prisma",
    icon: "/icons/prisma.svg",
  },
  {
    label: "Figma",
    icon: "/icons/figma.svg",
  },

  {
    label: "Framer Motion",
    icon: "/icons/framermotion.svg",
  },
  {
    label: "Nest.js",
    icon: "/icons/nest.svg",
  },
  {
    label: "React Native",
    icon: "/icons/react.svg",
  },
  {
    label: "Expo",
    icon: "/icons/expo.svg",
  },
];

export const work: WorkType[] = [
  {
    title: "Welearn - E-Learning Platform",
    description:
      "Welearn is a platform that allows students to learn and teachers to teach online. It is a platform that is built with the latest technologies and is designed to be user-friendly. Also it is powered by Artificial Intelligence and Machine Learning.",
    badges: [
      "/icons/react.svg",
      "/icons/nextjs.svg",
      "/icons/tailwindcss.svg",
      "/icons/framermotion.svg",
      "/icons/stripe.svg",
    ],
    image: "/images/welearn.png",
    features: [
      "User-friendly",
      "Powered by AI and ML",
      "Secure Payment",
      "Responsive Design",
    ],
  },
  {
    title: "Welearn - E-Learning Platform",
    description:
      "Welearn is a platform that allows students to learn and teachers to teach online. It is a platform that is built with the latest technologies and is designed to be user-friendly. Also it is powered by Artificial Intelligence and Machine Learning.",
    badges: [
      "/icons/react.svg",
      "/icons/nextjs.svg",
      "/icons/tailwindcss.svg",
      "/icons/framermotion.svg",
      "/icons/stripe.svg",
      "/icons/pusher.svg",
    ],
    image: "/images/welearn.png",
    features: [
      "User-friendly",
      "Powered by AI and ML",
      "Secure Payment",
      "Responsive Design",
      "Realtime Chat",
    ],
  },
  {
    title: "ZOOM Clone - Video Conferencing App",
    description:
      "ZOOM Clone is a video conferencing app that allows users to connect with each other through video calls. It is a platform that is built with the latest technologies and is designed to be user-friendly. Also it is powered by WebRTC and Socket.io.",
    badges: [
      "/icons/react.svg",
      "/icons/nextjs.svg",
      "/icons/tailwindcss.svg",
      "/icons/framermotion.svg",
      "/icons/stream.svg",
    ],
    image: "/images/zoom.png",
    features: [
      "User-friendly",
      "Powered by WebRTC and Socket.io",
      "Secure Connection",
      "Responsive Design",
    ],
  },
];
