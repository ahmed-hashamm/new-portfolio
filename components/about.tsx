"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className=" max-w-[45rem] text-center leading-8  scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Computer Science student</span> and a{" "}
        <span className="font-medium">Self-Taught Full-Stack Developer</span>. My journey in technology is driven by a deep curiosity for solving complex problems and a commitment to continuous growth. I have honed my skills through building real-world applications and collaborating with industry mentors.
      </p>

      <p className="mb-3">
        My technical expertise includes <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>, with a strong focus on <span className="font-medium">TypeScript</span> and <span className="font-medium">AI integrations</span>. I take pride in transforming intricate requirements into clean, efficient, and user-centric digital solutions.
      </p>

      <p>
        I am currently contributing to various technical projects and am actively seeking a{" "}
        <span className="font-medium">Software Developer role</span> where I can leverage my skills to build impactful products and grow within a professional engineering team.
      </p>

    </motion.section>
  );
}
