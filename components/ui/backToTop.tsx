"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";

function sendTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function BackToTop() {
  const { scrollY } = useScroll();

  const [buttonState, setbuttonState] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setbuttonState(true);
    } else {
      setbuttonState(false);
    }
  });

  return (
    <AnimatePresence>
      {buttonState && (
        <Link href={"/"} scroll={false}>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            onClick={() => sendTop()}
            className="h-divider border-sky-400/30 bg-sky-400/10 fixed bottom-5 right-5 z-[999] h-14 w-14 rounded-md border p-2.5 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="h-full w-full stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          </motion.button>
        </Link>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
