"use client";
import Divider from "@/components/ui/divider";
import GText from "@/components/ui/gradientText";
import GWrapper from "@/components/ui/gradientWrapper";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import { FolderClosed } from "lucide-react";

{
  /* <motion.div variants={childrenVar("vertical", "spring")}></motion.div> */
}

type ProjectT = {
  title: string;
  description: string;
  photo: string;
  technologies: string[];
  demoLink: string;
  repositoryLink?: string;
};

const ProjectA: ProjectT[] = [
  {
    title: "Twitter Clone",
    demoLink: "https://cutzutwitterclone.vercel.app/",
    description:
      "A Twitter Clone website that replicates Twitter's features with responsive UI, real-time data sync, and secure authentication.",
    photo: "/assets/twitterclone.webp",
    technologies: ["123", "123"],
  },
];

function Projects() {
  return (
    <section className="flex min-h-screen w-full select-none flex-col items-center justify-start ">
      <Divider />
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full flex-1 items-center justify-center p-5 md:p-10 lg:p-20"
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <GWrapper hover={false} className="group/aboutMeTag gap-1.5">
            <FolderClosed className="h-5 stroke-blue-300 transition-all duration-300 group-hover/aboutMeTag:stroke-sky-200 sm:h-6" />
            <GText opacity="text-opacity-80">Projects I've Worked On</GText>
          </GWrapper>
          <div></div>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectC(props: ProjectT) {
  return (
    <div>
      <div></div>
    </div>
  );
}

export default Projects;
