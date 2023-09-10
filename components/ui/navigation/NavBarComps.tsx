"use client";

import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type NavLinkT = {
  name: string;
  link: string;
};

const NavLinkA: NavLinkT[] = [
  {
    link: "/#about",
    name: "about",
  },
  {
    link: "/#projects",
    name: "projects",
  },
  {
    link: "/#contact",
    name: "contact",
  },
];

export function NavLinks() {
  return (
    <motion.div
      variants={parentVariant(0.5, 0.25)}
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
    >
      <motion.div variants={childrenVar("horizontal", "spring")}>
        <motion.ul
          variants={parentVariant(0.5, 0.25)}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          className="flex items-center justify-center gap-5 rounded-full border border-sky-200/10 bg-sky-900/[7%] px-5 py-2.5"
        >
          {NavLinkA.map((item, index) => {
            return <NavLink key={index} {...item} />;
          })}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export function NavImage() {
  return (
    <motion.div
      variants={parentVariant(0.5, 0.25)}
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
    >
      <motion.div variants={childrenVar("horizontal", "spring")}>
        <Link href={"/"} scroll={false}>
          <Image alt="" width={50} height={50} src={"/assets/logo.svg"} />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function NavLink(props: NavLinkT) {
  return (
    <motion.li
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      variants={childrenVar("horizontal", "spring")}
    >
      <Link
        href={props.link}
        // scroll={false}
        className="cursor-pointer select-none text-sm capitalize transition-all duration-200 hover:text-white/60"
      >
        {props.name}
      </Link>
    </motion.li>
  );
}
