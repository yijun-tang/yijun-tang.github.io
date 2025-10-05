import About from "./about";
import Contacts from "./contacts";
import Copyright from "./copyright";
import Header from "./header";
import Projects from "./projects";
import Quote from "./quote";

export default function Homepage() {
  return (
    <div className="mx-auto pt-[132px] pb-[132px]" style={{ width: "600px" }}>
      <Header />
      <About />
      <Quote />
      <Projects />
      <Contacts />
      <Copyright />
    </div>
  );
}
