"use client";
import Divider from "@/components/ui/divider";
import GText from "@/components/ui/gradientText";
import GWrapper from "@/components/ui/gradientWrapper";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import { FolderClosed, Github, Link as LinkIconTest } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    repositoryLink: "https://github.com/CutzuDev/twitterclone",
    description:
      "A Twitter Clone website that replicates Twitter's features with responsive UI, real-time data sync, and secure authentication.",
    photo: "/assets/twitterclone.webp",
    technologies: ["Tailwind", "Javascript", "NextJS", "Firebase", "Redux"],
  },
  {
    title: "Twitter Clone",
    demoLink: "https://cutzutwitterclone.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/twitterclone",
    description:
      "A Twitter Clone website that replicates Twitter's features with responsive UI, real-time data sync, and secure authentication.",
    photo: "/assets/twitterclone.webp",
    technologies: ["Tailwind", "Javascript", "NextJS", "Firebase", "Redux"],
  },
  {
    title: "Twitter Clone",
    demoLink: "https://cutzutwitterclone.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/twitterclone",
    description:
      "A Twitter Clone website that replicates Twitter's features with responsive UI, real-time data sync, and secure authentication.",
    photo: "/assets/twitterclone.webp",
    technologies: ["Tailwind", "Javascript", "NextJS", "Firebase", "Redux"],
  },
  {
    title: "Twitter Clone",
    demoLink: "https://cutzutwitterclone.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/twitterclone",
    description:
      "A Twitter Clone website that replicates Twitter's features with responsive UI, real-time data sync, and secure authentication.",
    photo: "/assets/twitterclone.webp",
    technologies: ["Tailwind", "Javascript", "NextJS", "Firebase", "Redux"],
  },
  {
    title: "Twitter Clone",
    demoLink: "https://cutzutwitterclone.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/twitterclone",
    description:
      "A Twitter Clone website that replicates Twitter's features with responsive UI, real-time data sync, and secure authentication.",
    photo: "/assets/twitterclone.webp",
    technologies: ["Tailwind", "Javascript", "NextJS", "Firebase", "Redux"],
  },
  {
    title: "Twitter Clone",
    demoLink: "https://cutzutwitterclone.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/twitterclone",
    description:
      "A Twitter Clone website that replicates Twitter's features with responsive UI, real-time data sync, and secure authentication.",
    photo: "/assets/twitterclone.webp",
    technologies: ["Tailwind", "Javascript", "NextJS", "Firebase", "Redux"],
  },
  {
    title: "Twitter Clone",
    demoLink: "https://cutzutwitterclone.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/twitterclone",
    description:
      "A Twitter Clone website that replicates Twitter's features with responsive UI, real-time data sync, and secure authentication.",
    photo: "/assets/twitterclone.webp",
    technologies: ["Tailwind", "Javascript", "NextJS", "Firebase", "Redux"],
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
          <GWrapper hover={false} className="group/projectsTag gap-1.5">
            <FolderClosed className="h-5 stroke-blue-300 transition-all duration-300 group-hover/projectsTag:stroke-sky-200 sm:h-6" />
            <GText opacity="text-opacity-80">Projects I've Worked On</GText>
          </GWrapper>
          <div className="flex w-full max-w-[1500px] flex-wrap items-center justify-center gap-10">
            {ProjectA.map((item, index) => (
              <motion.div
                key={index}
                variants={childrenVar("vertical", "spring")}
              >
                <ProjectC {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectC(props: ProjectT) {
  return (
    <div className="flex items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-2.5">
      <div className="flex max-w-[302px] flex-col items-start justify-center rounded-2xl border border-white/20 bg-black/50">
        <div className="relative aspect-video w-[300px] overflow-hidden rounded-t-2xl border-b border-b-white/20">
          <Image src={props.photo} fill alt="" />
        </div>
        <div className="flex w-full items-center justify-between border-b border-b-white/20 p-2.5">
          <span className="w-full bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-lg font-bold text-transparent md:text-xl lg:text-2xl">
            {props.title}
          </span>
          <div className="flex items-center justify-between gap-5">
            {props.demoLink && (
              <Link href={"/123"}>
                <LinkIconTest className="h-4 stroke-blue-300 transition-all duration-300 hover:stroke-sky-200 sm:h-5" />
              </Link>
            )}
            {props.repositoryLink && (
              <Link href={props.repositoryLink}>
                <Github className="h-4 stroke-blue-300 transition-all duration-300 hover:stroke-sky-200 sm:h-5" />
              </Link>
            )}
          </div>
        </div>
        <p className="max-w-[300px] border-b border-b-white/20 p-2.5 text-sm text-white text-opacity-50">
          {props.description}
        </p>
        <div className="flex flex-col items-start justify-center gap-2.5 p-2.5">
          <span className=" bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-transparent">
            Technologies:
          </span>
          <div className="flex w-full flex-wrap items-center justify-start gap-2.5 ">
            {props.technologies.map((item, index) => (
              <div
                key={index}
                className="rounded-md border border-sky-200/30 bg-sky-200/10 px-2 py-1 text-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
