import About from "./about";
import Contacts from "./contacts";
import Copyright from "./copyright";
import Header from "./header";
import Projects from "./projects";
import Quote from "./quote";

export default function Homepage() {
  return (
    <div
      className="mx-auto w-full max-w-screen-sm grid gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32"
    >
      <Header />
      <About />
      <Quote />
      <Projects />
      <Contacts />
      <Copyright />
    </div>
  );
}
