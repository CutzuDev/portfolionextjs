"use client";
import CopyButton from "@/components/ui/copyButton";
import Divider from "@/components/ui/divider";
import { childrenVar, parentVariant } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [valueRon, setvalueRon] = useState<any>();
  const [valueEur, setvalueEur] = useState<any>();
  const [calculatedRon, setcalculatedRon] = useState<any>(0);
  const [calculatedEur, setcalculatedEur] = useState<any>(0);

  const [randomNumber, setrandomNumber] = useState<string>();
  useEffect(() => {
    const number = Math.floor(Math.random() * 1e15);
    setrandomNumber(`0${number.toFixed(0)}`);
  }, []);

  useEffect(() => {
    if (!Number.isNaN(+valueRon) && +valueRon !== 0) {
      if (+valueEur > 100) {
        setcalculatedEur((+valueEur * 10) / 100);
      } else if (+valueEur > 50) {
        setcalculatedEur((+valueEur * 15) / 100);
      } else {
        setcalculatedEur((+valueEur * 30) / 100);
      }
    } else if (Number.isNaN(+valueRon)) {
      setvalueRon(0);
    }
    if (!Number.isNaN(+valueEur) && +valueEur !== 0) {
      if (+valueEur > 20) {
        setcalculatedEur((+valueEur * 10) / 100);
      } else if (+valueEur > 10) {
        setcalculatedEur((+valueEur * 15) / 100);
      } else {
        setcalculatedEur((+valueEur * 30) / 100);
      }
    } else if (Number.isNaN(+valueEur)) {
      setvalueEur(0);
    }
  }, [valueRon, valueEur]);

  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <motion.div
        variants={parentVariant(0.05, 0.05)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex min-h-screen flex-col items-center justify-center gap-10 p-2.5 "
      >
        <Divider />
        <div className="flex  flex-col items-start justify-center gap-2.5">
          <div className="mb-5 flex w-full flex-col items-start justify-center gap-2.5">
            <motion.h1
              className="mb-5 w-full bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl"
              variants={childrenVar("vertical", "spring")}
            >
              INFO EXCHANGE
            </motion.h1>
            <motion.span
              className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-xl font-semibold text-transparent"
              variants={childrenVar("vertical", "spring")}
            >
              Taxa:
            </motion.span>
            <div className="flex flex-wrap items-center justify-start gap-2.5">
              <motion.span
                className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
                variants={childrenVar("vertical", "spring")}
              >
                {`Sub 10€ -> 30%`}
              </motion.span>
              <motion.span
                className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
                variants={childrenVar("vertical", "spring")}
              >
                {`Peste 10€ -> 15%`}
              </motion.span>
              <motion.span
                className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
                variants={childrenVar("vertical", "spring")}
              >
                {`Peste 20€ -> 10%`}
              </motion.span>
            </div>
            <motion.span
              className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-xl font-semibold text-transparent"
              variants={childrenVar("vertical", "spring")}
            >
              Pasi Exchange:
            </motion.span>
            <motion.ul
              className="flex flex-col items-start justify-center"
              variants={childrenVar("vertical", "spring")}
            >
              <motion.li className="flex flex-col items-start justify-center">
                <span className="bg-gradient-to-t  from-neutral-400 to-white bg-clip-text font-semibold text-transparent">
                  1. Sub formatul:
                </span>
                <div className="my-2.5 flex flex-col items-start justify-center gap-1 rounded-md border-2 border-[#383A40] bg-[#313338] px-5 py-2.5">
                  <span>emailultau123@gmail.com</span>
                  <span>{randomNumber}</span>
                </div>
              </motion.li>

              <motion.li className="flex flex-col items-start justify-center gap-0 md:flex-row md:items-center md:gap-2.5">
                <span className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent">
                  2. Trimite Email Paypal
                </span>
                <span className="font-normal text-red-500">
                  (NU nume paypal / paypal.me)
                </span>
              </motion.li>
              <motion.li className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent">
                3. Trimite Cod Paysafe
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div className=" flex w-full items-center justify-center md:gap-10">
          <div className="flex w-full flex-col items-start justify-center gap-2.5">
            <motion.span
              variants={childrenVar("vertical", "spring")}
              className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
            >
              RON
            </motion.span>
            <div className="flex flex-col items-start justify-center gap-5 md:flex-row md:items-end md:gap-7">
              <div className="flex flex-col items-start justify-center gap-2.5">
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
                >
                  Input
                </motion.span>
                <motion.input
                  variants={childrenVar("vertical", "spring")}
                  className=" w-20 rounded-md border border-white/20 bg-white/5 p-2.5 outline-none md:w-32"
                  value={valueRon}
                  maxLength={100}
                  type="number"
                  onChange={(e) => setvalueRon(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2.5">
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
                >
                  Output
                </motion.span>
                <motion.div
                  variants={childrenVar("vertical", "spring")}
                  className=" w-20 rounded-md border border-white/20 bg-white/5 p-2.5 outline-none md:w-32"
                >
                  {valueRon ? (+valueRon - +calculatedRon).toFixed(1) : 0}
                </motion.div>
              </div>
              <motion.div variants={childrenVar("vertical", "spring")}>
                <CopyButton
                  stringText={`${(+valueRon - +calculatedRon).toFixed(0)}`}
                />
              </motion.div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-2.5">
            <motion.span
              variants={childrenVar("vertical", "spring")}
              className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
            >
              EUR
            </motion.span>
            <div className="flex flex-col items-start justify-center gap-5 md:flex-row md:items-end md:gap-7">
              <div className="flex flex-col items-start justify-center gap-2.5">
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
                >
                  Input
                </motion.span>
                <motion.input
                  variants={childrenVar("vertical", "spring")}
                  className=" w-20 rounded-md border border-white/20 bg-white/5 p-2.5 outline-none md:w-32"
                  value={valueEur}
                  maxLength={100}
                  type="number"
                  onChange={(e) => setvalueEur(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2.5">
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-semibold text-transparent"
                >
                  Output
                </motion.span>
                <motion.div
                  variants={childrenVar("vertical", "spring")}
                  className=" w-20 rounded-md border border-white/20 bg-white/5 p-2.5 outline-none md:w-32"
                >
                  {valueEur ? (+valueEur - +calculatedEur).toFixed(1) : 0}
                </motion.div>
              </div>
              <motion.div variants={childrenVar("vertical", "spring")}>
                <CopyButton
                  stringText={`${(+valueEur - +calculatedEur).toFixed(0)}`}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
