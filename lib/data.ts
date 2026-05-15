import classPilot from "@/public/classpilot.png"
import socShield from "@/public/socshield.png"
import vibeDiligence from "@/public/vibedilligence.png"
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
    title: "Class Pilot",
    description:
      "An AI-driven educational platform designed to streamline classroom management and enhance student engagement through intelligent automation and real-time collaboration.",
    tags: ["Next.js", "OpenAI", "Supabase", "Tailwind", "TypeScript"],
    imageUrl: classPilot,
  },
  {
    title: "SOC Shield",
    description:
      "A comprehensive security operations center dashboard for real-time threat monitoring, incident response, and vulnerability management, featuring advanced data visualization.",
    tags: ["Next.js", "Supabase", "TypeScript", "Framer Motion", "shadcn/ui"],
    imageUrl: socShield,
  },
  {
    title: "Vibe Dilligence",
    description:
      "An advanced GitHub repository audit tool tailored for vibe-coded startups and technical due diligence, providing deep insights into code quality, contributor patterns, and architectural health.",
    tags: ["Next.js", "TypeScript", "AI Integration", "Framer Motion", "GitHub API"],
    imageUrl: vibeDiligence,
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
  "OpenAI API",
  "AI Integration",
  "Redux",
] as const;
