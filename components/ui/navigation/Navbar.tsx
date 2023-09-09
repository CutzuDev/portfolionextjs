
import { NavImage, NavLinks } from "./NavBarComps";

function Navbar() {
  return (
    <div className="fixed z-50 flex w-full items-center justify-center py-[15px] backdrop-blur-sm">
      <div className="relative flex w-full max-w-[1200px] items-center justify-between px-5">
        <NavImage />
        <NavLinks />
        <div className="absolute -bottom-2.5 left-1/2 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-200/10 to-transparent" />
      </div>
    </div>
  );
}

export default Navbar;
