"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import SectionDivider from "./section-divider";
import { easeIn, motion } from "framer-motion";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section ref={ref} id="contact" className="scroll-mt-28 mb-28">
      <SectionHeading>Contact Me!</SectionHeading>
      <div className="flex flex-col justify-center items-center">
        <p className="text-center">
          Contact me directly at{" "}
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=ahmedhasham90012@gmail.com'  target="_blank" className="underline  font-medium"> ahmedhasham90012@gmail.com </a>
        </p>
        <SectionDivider />
        <motion.div
          className="flex items-center justify-center mt-4  gap-4 px-4 text-lg font-medium"
          initial={{ scale: 0.1 }}
          // animate={{ scale: 1 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: { easeIn },
            delay: 0
          }}
        >
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:ring-[1px] dark:ring-gray-600 dark:text-white/60"
            href="https://www.linkedin.com/in/hasham-ahmed-dev"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:ring-[1px] dark:ring-gray-600 "
            href="https://github.com/ahmed-hashamm"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:ring-[1px] dark:ring-gray-600 "
            href="https://twitter.com/Hasham_ahme"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:ring-[1px] dark:ring-gray-600 "
            href="https://www.fiverr.com/s/Y32YLK"
            target="_blank"
          >
            <TbBrandFiverr />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
