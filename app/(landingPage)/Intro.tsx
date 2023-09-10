"use client";
import Divider from "@/components/ui/divider";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import GText from "@/components/ui/gradientText";
import GWrapper from "@/components/ui/gradientWrapper";
import { Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        className="relative flex w-full flex-1 flex-col items-center justify-center p-5 md:p-10 lg:p-20"
      >
        <div className="group/introCard z-[2] flex flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/[12%]">
          <div className="relative flex flex-col items-center justify-center rounded-2xl border border-white/20  bg-black/50 transition-colors group-hover/introCard:border-white/25">
            <div className="flex flex-col items-center justify-center gap-5 border-b border-b-white/20 p-5 pt-10 transition-colors group-hover/introCard:border-b-white/25 md:p-10 md:pt-20">
              <motion.h1
                className="bg-gradient-to-t from-neutral-500 to-white bg-clip-text text-center text-5xl font-semibold text-transparent sm:text-6xl md:text-7xl"
                variants={childrenVar("vertical", "spring")}
              >
                Innovative Web Solutions
              </motion.h1>
              <motion.div variants={childrenVar("vertical", "spring")}>
                <GWrapper
                  hover={false}
                  className="group/wizardy flex items-center justify-center gap-1.5 pr-2.5"
                >
                  <Sparkles
                    strokeWidth={1.5}
                    className="h-5 stroke-blue-300 transition-all duration-300 group-hover/wizardy:stroke-sky-200 sm:h-6"
                  />
                  <GText opacity="text-opacity-80" className="">
                    Performing Code Wizardry in Every Project
                  </GText>
                </GWrapper>
              </motion.div>
            </div>
            <motion.div
              className="p-5 md:p-10"
              variants={childrenVar("vertical", "spring")}
            >
              <Link
                href={`mailto:alexfarkasbusiness@gmail.com`}
                className="group/contact"
              >
                <GWrapper className="pr-4.5 gap-2.5 px-5 py-1.5 hover:scale-110">
                  <Mail
                    strokeWidth={1.5}
                    className="stroke-blue-300 transition-all duration-300 group-hover/contact:stroke-blue-100"
                  />
                  <span className="text-2xl font-bold">Contact Now</span>
                </GWrapper>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <video
        preload="false"
        muted
        playsInline
        loop
        autoPlay
        className="absolute left-1/2 top-1/2  aspect-video w-full -translate-x-1/2 -translate-y-1/2 lg:-translate-y-[64.9%] mix-blend-lighten -hue-rotate-[60deg]"
        src={"/assets/blackhole.webm"}
      />
      <div className="absolute left-1/2 top-0 -z-[1] aspect-square h-[1500px] w-[4500px] -translate-x-1/2 -translate-y-[60%] bg-[radial-gradient(ellipse,_rgba(var(--radialGlowColor),0.15)_0%,_rgba(0,0,0,0)_50%)]"></div>
    </section>
  );
}

export default Intro;
