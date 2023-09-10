import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <Intro />
      <About />
      <Contact />
    </main>
  );
}
