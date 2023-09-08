"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NavLinkT } from "./Navbar";

function NavLink(props: NavLinkT) {
  return (
    <motion.li
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link
        href={props.link}
        scroll={false}
        className="cursor-pointer select-none text-sm capitalize transition-all duration-200 hover:text-white/60"
      >
        {props.name}
      </Link>
    </motion.li>
  );
}

export default NavLink;
