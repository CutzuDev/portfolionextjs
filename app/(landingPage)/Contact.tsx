"use client";

import Divider from "@/components/ui/divider";
import GText from "@/components/ui/gradientText";
import GWrapper from "@/components/ui/gradientWrapper";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mail, MessagesSquare } from "lucide-react";
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
      className="bg-custom/5 flex min-h-screen w-full select-none flex-col items-center justify-start "
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
          <div className="group/contactCard z-[2] flex w-full flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/[12%]">
            <div className="relative flex w-full flex-col items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-tr from-black/50 to-sky-500/5 transition-all duration-300 group-hover/contactCard:border-white/25">
              <div className="flex w-full flex-col items-start justify-center gap-2.5 border-b border-b-white/20 p-5 transition-all duration-300 group-hover/contactCard:border-b-white/25 ">
                <span className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent">
                  Title
                </span>
                <input
                  className="w-full rounded-md border border-white/20 bg-white/5 p-2.5 outline-none"
                  value={emailTitle}
                  maxLength={100}
                  onChange={(e) => setemailTitle(e.target.value)}
                />
                <span className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent">
                  Message
                </span>
                <textarea
                  className="aspect-video w-full resize-none rounded-md border border-white/20 bg-white/5 p-2.5 outline-none"
                  value={emailBody}
                  maxLength={500}
                  onChange={(e) => setemailBody(e.target.value)}
                ></textarea>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 p-5">
                <div onClick={() => sendMail()}>
                  <GWrapper className="gap-2.5 px-6 pl-4">
                    <Mail
                      strokeWidth={1.5}
                      className="stroke-blue-300 transition-all duration-300 group-hover/contact:stroke-blue-100"
                    />
                    <span className="text-xl font-bold">Send now!</span>
                  </GWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
