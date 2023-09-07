import DButton from "@/components/ui/decorativeButton";
import { cn, gradientText } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <DButton>
        <span className={cn("text-opacity-80", gradientText)}>
          Do you like my text
        </span>
      </DButton>
      <DButton className="rounded-md after:rounded-md">
        {/* <span className={cn("text-opacity-80", gradientText)}>
          Do you like my text
        </span> */}
        <Link href={"https://www.alexfarkas.me/"}>
          <img
            className=""
            src="https://cdn.discordapp.com/avatars/525330274784116746/3d4a0e0e69a0e0281efae3658791386c.png"
          ></img>
        </Link>
      </DButton>
      {/*  */}
    </main>
  );
}
