"use client";
import Divider from "@/components/ui/divider";
import GText from "@/components/ui/gradientText";
import GWrapper from "@/components/ui/gradientWrapper";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import { BadgeInfo } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="bg-custom/5 flex min-h-screen w-full select-none flex-col items-center justify-start "
    >
      <Divider />
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="relative flex w-full flex-1  items-center justify-center p-5 md:p-10 lg:p-20"
      >
        <div className="flex w-full max-w-[1000px] flex-col items-center justify-center gap-10">
          <GWrapper hover={false} className="group/aboutMeTag gap-1.5">
            <BadgeInfo className="h-5 stroke-blue-300 transition-all duration-300 group-hover/aboutMeTag:stroke-sky-200 sm:h-6" />
            <GText opacity="text-opacity-80">Some Information About Me</GText>
          </GWrapper>
          <div className="group/aboutCard z-[2] flex w-full flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/[12%]">
            <div className="relative flex w-full flex-col items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-tl from-black/50 to-sky-500/5 transition-all duration-300 group-hover/aboutCard:border-white/25">
              <div className="flex w-full flex-col items-start justify-center gap-2.5 border-b border-b-white/20 p-5 transition-all duration-300 group-hover/aboutCard:border-b-white/25 md:p-10">
                <motion.span
                  className="text-white text-opacity-75"
                  variants={childrenVar("vertical", "spring")}
                >
                  Hi, my name is
                </motion.span>
                <motion.span
                  className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-center text-4xl font-semibold text-transparent md:text-5xl lg:text-7xl"
                  variants={childrenVar("vertical", "spring")}
                >
                  Alex Farkas.
                </motion.span>
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-5 p-5 md:p-10">
                <motion.span
                  className="text-white text-opacity-75"
                  variants={childrenVar("vertical", "spring")}
                >
                  I have knowledge in:
                </motion.span>
                <div className="flex flex-col items-start justify-center gap-2.5 pl-2.5 text-sm md:pl-0 md:text-base">
                  <motion.li variants={childrenVar("vertical", "spring")}>
                    HTML, CSS, Tailwind, JavaScript, TypeScript
                  </motion.li>
                  <motion.li variants={childrenVar("vertical", "spring")}>
                    NextJS, React, Redux, Framer Motion
                  </motion.li>
                  <motion.li variants={childrenVar("vertical", "spring")}>
                    Rest APIs, MySQL, TRPC, Prisma, Clerk, Firebase
                  </motion.li>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TEST */}
        <div className="animate-testANIMATION absolute left-0 top-0 -z-[1] aspect-square w-[250px] rounded-full bg-[radial-gradient(ellipse,_rgba(var(--radialGlowColor),1)_0%,_rgba(0,0,0,0)_100%)] blur-3xl transition-all lg:w-[500px]" />
        <div className="animate-testANIMATION absolute bottom-0 right-0 -z-[1] aspect-square w-[250px] rounded-full bg-[radial-gradient(ellipse,_rgba(var(--radialGlowColor),1)_0%,_rgba(0,0,0,0)_100%)] blur-3xl transition-all lg:w-[500px]" />
      </motion.div>
    </section>
  );
}

export default About;
