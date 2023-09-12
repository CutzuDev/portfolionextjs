import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Projects from "./Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
