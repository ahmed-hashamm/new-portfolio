import devCom from "@/public/dev-com.png"
import lifeDrops from "@/public/life-drops.png"
import colg from "@/public/colg.png"
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
    title: "Medical College Website",
    description:
      "Developed the official website for Sukaina College of Nursing, creating a responsive and user-friendly platform.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    imageUrl: colg,
  },
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
  "Express",
  "WordPress",
  "PHP",
  "C++",
] as const;
