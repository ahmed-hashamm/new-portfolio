import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import devCom from "@/public/dev-com.png"
import lifeDrops from "@/public/life-drops.png"
import backdoor from "@/public/backdoor.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Services",
  //   hash: "#services",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



// export const experiencesData = [
//   {
//     title: "Frontend Development",
//     description:
//       "Professional landing pages  or converting from figma design.",
//     icon: React.createElement(LuGraduationCap),
//   },
//   {
//     title: "Full Stack Development",
//     description:
//       "Full stack websites with next js and mern magic.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Life Drops",
    description:
      "I worked as a full-stack developer on this blood donation website project for my university's blood donation campaign.",
    tags: ["React","Next js", "MongoDB", "Tailwind", "Javascript","Kinde Authentication"],
    imageUrl: lifeDrops,
  },
  {
    title: "Dev Com",
    description:
      "A full stack project where developers can post tech blogs and project ideas and also read latest news of the tech world.",
    tags: ["React", "Firebase", "Tailwind", "Redux"],
    imageUrl: devCom,
  },
  {
    title: "Backdoor",
    description:
      "I worked as a front end developer on this project and converted the figma design into pixel perfect next js code.",
    tags: ["React", "Next.js", "Locomotive", "Tailwind", "Framer"],
    imageUrl: backdoor,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Mongoose",
  "Framer Motion",
  "Redux",
  "Express",
  "C++",
] as const;
