import { linkFont } from "./common/fonts";
import SectionHeader from "./common/section-header";

export default function Projects() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
    >
      <SectionHeader title="Projects" />
      <a
        className="box-border content-stretch cursor-pointer flex flex-col items-start max-w-[600px] overflow-visible p-0 relative shrink-0"
        href="https://github.com/yijun-tang/rudis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={`${linkFont.className} text-[18px] leading-[22px]`}>
          rudis: Redis Re-implemention in Rust for Learning Purpose
        </p>
        <div className="bg-black h-[1.5px] shrink-0 w-full" />
      </a>
    </div>
  );
}
