import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

export type NavLinkT = {
  name: string;
  link: string;
};

const NavLinkA: NavLinkT[] = [
  {
    link: "/#about",
    name: "about",
  },
  {
    link: "/#projects",
    name: "projects",
  },
  {
    link: "/#contact",
    name: "contact",
  },
];

function Navbar() {
  return (
    <div className="fixed flex w-full  items-center justify-center py-[15px] backdrop-blur-sm">
      <div className="relative flex w-full max-w-[1200px] items-center justify-between">
        <Link href={"/"} scroll={false}>
          <Image alt="" width={50} height={50} src={"/assets/logo.svg"} />
        </Link>
      </div>
      <ul className="flex items-center justify-center gap-5 rounded-full border border-sky-200/10 bg-sky-900/[7%] px-5 py-2.5">
        {NavLinkA.map((item, index) => {
          return <NavLink key={index} {...item} />;
        })}
      </ul>
      <div className="absolute bottom-0 left-1/2 h-[1px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-200/10 to-transparent" />
    </div>
  );
}

export default Navbar;

// function NavLinkC(props: NavLinkT) {
//   // "use client" ?
//   return (
//     <motion.li whileTap={{ scale: 1.1 }}>
//       <Link
//         href={props.link}
//         scroll={false}
//         className="cursor-pointer select-none text-sm capitalize transition-all duration-200 hover:text-white/60"
//       >
//         {props.name}
//       </Link>
//     </motion.li>
//   );
// }
