"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * Pass any component between the tags to wrap them
 *
 * ### Available props:
 * - link: **boolean**
 * - ^ Enables cursor pointer on hover
 * - className: **string**
 * - ^ Allows additional styling to be merged
 *
 * ### To change colors:
 * - after:from-[color] after:via-[color] after:to-[color]
 *
 * @interface
 */

function GWrapper({
  children,
  className,
  link,
  wrapper,
  hover,
}: {
  children: any;
  className?: string;
  link?: boolean;
  wrapper?: boolean;
  hover?: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          "maskingClass tran relative isolate flex select-none items-center justify-center overflow-hidden rounded-full px-4 py-1.5 text-sm shadow-[inset_0_-10px_15px_rgba(var(--insetGlowColor),0.20),inset_0_0px_20px_rgba(var(--insetGlowColor),0.25)] backdrop-blur-sm  transition-all after:absolute after:inset-0 after:-z-[1] after:rounded-full after:bg-gradient-to-l after:from-teal-400/50 after:via-cyan-400/50 after:to-sky-400/50 after:p-[1px] hover:shadow-[inset_0_-10px_15px_rgba(var(--insetGlowColor),0.3),inset_0_0px_20px_rgba(var(--insetGlowColor),0.4)]",
          hover && "hover:scale-105",
          link && "hover:cursor-pointer",
          wrapper && "rounded-2xl p-2.5 after:rounded-2xl",
          wrapper &&
            "shadow-[inset_0_0px_20px_rgba(var(--insetGlowColor),0.25)] hover:shadow-[inset_0_0px_25px_rgba(var(--insetGlowColor),0.3)]",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}

export default GWrapper;
