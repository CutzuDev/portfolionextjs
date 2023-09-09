import GText from "@/components/ui/gradientText";
import GWrapper from "@/components/ui/gradientWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[200vh] flex-col items-center justify-center gap-10">
      <GWrapper>
        <GText opacity="text-opacity-75" className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </GText>
      </GWrapper>
      <GWrapper wrapper className="flex items-center justify-center gap-5">
        <GText opacity="text-opacity-75" className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </GText>
        <Link href={"https://www.alexfarkas.me/"}>
          <img
            className="rounded-lg"
            src="https://cdn.discordapp.com/avatars/525330274784116746/3d4a0e0e69a0e0281efae3658791386c.png"
          ></img>
        </Link>
      </GWrapper>
      {/*  */}
    </main>
  );
}
