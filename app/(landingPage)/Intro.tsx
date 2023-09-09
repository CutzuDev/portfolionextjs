"use client";
import Divider from "@/components/ui/divider";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import GText from "@/components/ui/gradientText";
import GWrapper from "@/components/ui/gradientWrapper";
import { Sparkles } from "lucide-react";

// icon props
// size={20}
// strokeWidth={1.5}
// className="fill-neutral-900 stroke-blue-300"

function Intro() {
  return (
    <section className="relative flex min-h-screen w-full select-none flex-col items-center justify-start overflow-hidden ">
      <Divider />
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full flex-1 items-center justify-center pb-10 "
      >
        <div className="group flex flex-col items-center justify-center gap-10">
          <motion.div variants={childrenVar("vertical", "spring")}>
            <GWrapper className="flex items-center justify-center gap-1.5 pr-2.5">
              <Sparkles
                strokeWidth={1.5}
                className=" stroke-blue-300 h-5 sm:h-6 transition-all duration-300 group-hover:stroke-blue-200"
              />
              <GText opacity="text-opacity-75" className="">
                I'm Alex, I like creating high quality Web Apps.
              </GText>
            </GWrapper>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute left-1/2 top-0 -z-[1] aspect-square h-[1500px] w-[4500px] -translate-x-1/2 -translate-y-[60%] bg-[radial-gradient(ellipse,_rgba(var(--radialGlowColor),0.1)_0%,_rgba(0,0,0,0)_50%)]"></div>
    </section>
  );
}

export default Intro;
