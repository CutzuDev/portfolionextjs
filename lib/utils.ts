import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const gradientTextClass =
  "bg-gradient-to-l from-orange-700 via-orange-500 to-orange-300 bg-clip-text text-white";

export function parentVariant(delay: number, stagger: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };
}

export function childrenVar(
  direction: "vertical" | "horizontal",
  animationType: "spring" | "tween",
) {
  if (direction === "vertical") {
    return {
      hidden: { y: "-30px", opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: animationType,
        },
      },
    };
  } else if (direction === "horizontal") {
    return {
      hidden: { x: "-30px", opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: animationType,
        },
      },
    };
  }
}

/* 
Usage

<parent
	variants={parentVariant(0.5, 0.25)}
    whileInView="visible"
    viewport={{ once: true }}
    initial="hidden"
>
<children variants={childrenVar("vertical", "spring")} />
</parent>

*/
