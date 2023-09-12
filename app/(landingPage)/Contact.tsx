"use client";

import Divider from "@/components/ui/divider";
import GText from "@/components/ui/gradientText";
import GWrapper from "@/components/ui/gradientWrapper";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Contact() {
  const [emailTitle, setemailTitle] = useState("");
  const [emailBody, setemailBody] = useState("");
  const rotuer = useRouter();
  function sendMail() {
    window.location.href = `mailto:alexfarkasbusiness@gmail.com?subject=${emailTitle}&body=${emailBody}`;
    rotuer.refresh();
  }

  return (
    <section
      id="contact"
      className=" relative flex min-h-screen w-full select-none flex-col items-center justify-start overflow-hidden "
    >
      <Divider />
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full max-w-[600px] flex-1 items-center justify-center p-5 md:p-10 lg:p-20"
      >
        <div className="flex w-full flex-col items-center  justify-center gap-10">
          <GWrapper hover={false} className="group/aboutMeTag gap-1.5">
            <MessagesSquare className="h-5 stroke-blue-300 transition-all duration-300 group-hover/aboutMeTag:stroke-sky-200 sm:h-6" />
            <GText opacity="text-opacity-80">Let's Get In Touch!</GText>
          </GWrapper>
          <motion.div variants={childrenVar("vertical", "spring")}></motion.div>

          <div className="group/contactCard z-[2] flex w-full flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/[12%]">
            <div className="relative flex w-full flex-col items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-tr from-black/50 to-sky-500/5 transition-all duration-300 group-hover/contactCard:border-white/25">
              <div className="flex w-full flex-col items-start justify-center gap-2.5 border-b border-b-white/20 p-5 transition-all duration-300 group-hover/contactCard:border-b-white/25 ">
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
                >
                  Title
                </motion.span>
                <motion.input
                  variants={childrenVar("vertical", "spring")}
                  className="w-full rounded-md border border-white/20 bg-white/5 p-2.5 outline-none"
                  value={emailTitle}
                  maxLength={100}
                  onChange={(e) => setemailTitle(e.target.value)}
                />
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
                >
                  Message
                </motion.span>
                <motion.textarea
                  variants={childrenVar("vertical", "spring")}
                  className="aspect-video w-full resize-none rounded-md border border-white/20 bg-white/5 p-2.5 outline-none"
                  value={emailBody}
                  maxLength={500}
                  onChange={(e) => setemailBody(e.target.value)}
                ></motion.textarea>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-5">
                <motion.button
                  variants={childrenVar("vertical", "spring")}
                  onClick={() => sendMail()}
                >
                  <GWrapper className="gap-2.5 px-8 py-3 pl-7">
                    <Mail
                      strokeWidth={1.5}
                      className="stroke-blue-300 transition-all duration-300 group-hover/contact:stroke-blue-100"
                    />
                    <span className="text-xl font-bold">Send now!</span>
                  </GWrapper>
                </motion.button>
              </div>
            </div>
          </div>
          {/* ENDING */}
          <motion.div variants={childrenVar("vertical", "spring")}>
            <div className="group/socialsCard z-[2] flex items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/[12%]">
              <div className="relative flex w-full items-center justify-around gap-5 rounded-2xl border border-white/20 bg-gradient-to-tr from-black/50 to-sky-500/5 px-5 py-3  transition-all duration-300 group-hover/socialsCard:border-white/25">
                <Link
                  href={"https://github.com/CutzuDev"}
                  className="rounded-full border border-white/20 bg-white/10 p-2.5"
                >
                  <motion.div variants={childrenVar("vertical", "spring")}>
                    <Github className="aspect-square h-5 stroke-blue-300 transition-all duration-300 hover:stroke-sky-200 sm:h-6" />
                  </motion.div>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/alex-farkas-1480b6242/"}
                  className="rounded-full border border-white/20 bg-white/10 p-2.5"
                >
                  <motion.div variants={childrenVar("vertical", "spring")}>
                    <Linkedin className="aspect-square h-5 stroke-blue-300 transition-all duration-300 hover:stroke-sky-200 sm:h-6" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-1/2 -z-[1] aspect-square h-[1500px] w-[4500px] -translate-x-1/2 translate-y-[65%] bg-[radial-gradient(ellipse,_rgba(var(--radialGlowColor),0.15)_0%,_rgba(0,0,0,0)_50%)]"></div>
    </section>
  );
}

export default Contact;
