import { Encode_Sans_SC, Epilogue } from "next/font/google";

const sectionFont = Encode_Sans_SC({
  subsets: ["latin"],
  weight: "700",
});

const linkFont = Epilogue({
  subsets: ["latin"],
  weight: "400",
});

function Section() {
  return (
    <div
      className="content-stretch flex flex-col h-[28px] items-start relative shrink-0"
      data-name="Section"
    >
      <p className={`${sectionFont.className} text-[20px] leading-[normal]`}>
        Projects
      </p>
      <div className="bg-black h-[3px] shrink-0 w-full" />
    </div>
  );
}

function ProjectLink() {
  return (
    <a
      className="box-border content-stretch cursor-pointer flex flex-col items-start max-w-[600px] overflow-visible p-0 relative shrink-0"
      data-name="Project Link"
      href="https://github.com/yijun-tang/rudis"
    >
      <p className={`${linkFont.className} text-[18px] leading-[22px]`}>
        rudis: Redis Re-implemention in Rust for Learning Purpose
      </p>
      <div className="bg-black h-[1.5px] shrink-0 w-full" />
    </a>
  );
}

export default function Projects() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[600px]"
      data-name="Projects"
    >
      <Section />
      <ProjectLink />
    </div>
  );
}
