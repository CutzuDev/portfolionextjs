"use client";
import Divider from "@/components/ui/divider";
import GText from "@/components/ui/gradientText";
import GWrapper from "@/components/ui/gradientWrapper";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import { FolderClosed, Github, Link as LinkIconTest } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  type: "client" | "self";
};

const ProjectA: ProjectT[] = [
  {
    title: "Nalo Visuals",
    demoLink: "https://www.nalovisuals.com/",
    description:
      "Portfolio website suited for a editor's needs, includes skills display, projects display, client testimonials, etc.",
    photo: "/assets/projects/nalovisuals.webp",
    technologies: [
      "NextJS",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Redux",
    ],
    type: "client",
  },
  {
    title: "Twitter Clone",
    demoLink: "https://cutzutwitterclone.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/twitterclone",
    description:
      "A Twitter Clone website that replicates Twitter's features with responsive UI, real-time data sync, and secure authentication.",
    photo: "/assets/projects/twitterclone.webp",
    technologies: ["Tailwind", "JavaScript", "NextJS", "Firebase", "Redux"],
    type: "self",
  },
  {
    title: "Virtual Internship",
    demoLink: "https://nft-v-internship.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/cutzu-internship",
    description:
      "This project was a Virtual Internship mockup where I had to create all the functionability using the data provided via an API.",
    photo: "/assets/projects/nftinternship.webp",
    technologies: ["HTML", "CSS", "JavaScript", "React", "External API"],
    type: "self",
  },
  {
    title: "Google Clone",
    demoLink: "https://googleclone-three.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/GoogleClone",
    description:
      "Google Search Clone built using the Google API to retrieve Indexed data from all the available websites.",
    photo: "/assets/projects/googleclone.webp",
    technologies: ["CSS", "JavaScript", "React", "External API"],
    type: "self",
  },
  {
    title: "Gmail Clone",
    demoLink: "https://gmailclone-liart.vercel.app/",
    repositoryLink: "https://github.com/CutzuDev/GoogleClone",
    description:
      "ECommerce application which displays available books, has search and sorting capabilities also having a loading state and add to cart functionability.",
    photo: "/assets/projects/gmailclone.webp",
    technologies: ["CSS", "JavaScript", "React", "Firebase", "Redux"],
    type: "self",
  },
];

function Projects() {
  const [projectType, setProjectType] = useState<"client" | "self" | "all">(
    "all",
  );

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full select-none flex-col items-center justify-start "
    >
      <Divider />
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full flex-1 items-start justify-center p-5 md:p-10 lg:p-20"
      >
        <div className="flex w-full max-w-[1500px] flex-col items-center justify-start gap-10 lg:items-start lg:gap-5 ">
          <div className="flex items-center justify-center gap-2.5 rounded-full border border-sky-200/30 bg-sky-200/10 px-6 py-3 text-sm md:text-base">
            <button
              className="transition-transform active:scale-105"
              onClick={() => setProjectType("client")}
            >
              Client Work
            </button>
            /
            <button
              className="transition-transform active:scale-105"
              onClick={() => setProjectType("self")}
            >
              Self Projects
            </button>
            /
            <button
              className="transition-transform active:scale-105"
              onClick={() => setProjectType("all")}
            >
              All Projects
            </button>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-5">
            <GWrapper hover={false} className="group/projectsTag gap-1.5">
              <FolderClosed className="h-5 stroke-blue-300 transition-all duration-300 group-hover/projectsTag:stroke-sky-200 sm:h-6" />
              <GText opacity="text-opacity-80">Projects I've Worked On</GText>
            </GWrapper>
            <div className="flex w-full flex-wrap items-start justify-center gap-10">
              {ProjectA.filter((item) => {
                if (projectType === "all") {
                  return item;
                } else if (item.type === projectType) {
                  return item;
                }
              }).map((item, index) => (
                <ProjectC {...item} key={index} />
              ))}
            </div>
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
          <span className="w-full bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-lg font-bold text-transparent md:text-xl">
            {props.title}
          </span>
          <div className="flex items-center justify-between gap-5">
            {props.demoLink && (
              <Link target="_blank" href={props.demoLink}>
                <LinkIconTest className="h-4 stroke-blue-300 transition-all duration-300 hover:stroke-sky-200 sm:h-5" />
              </Link>
            )}
            {props.repositoryLink && (
              <Link target="_blank" href={props.repositoryLink}>
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
