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

function DButton({
  children,
  className,
  link,
}: {
  children: any;
  className?: string;
  link?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={cn(
        "maskingClass after:-z-[1] relative isolate flex items-center justify-center overflow-hidden rounded-full px-4 py-1.5 text-sm shadow-[inset_0_-10px_10px_rgba(var(--insetGlowColor),0.2)] backdrop-blur-sm transition-shadow duration-500 after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-l after:from-orange-700 after:via-orange-500 after:to-orange-300 after:p-[1px] hover:shadow-[inset_0_-10px_15px_rgba(var(--insetGlowColor),0.35)]",
        link && "hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export default DButton;
