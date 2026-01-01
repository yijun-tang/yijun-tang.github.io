import { linkFont } from "./common/fonts";
import SectionHeader from "./common/section-header";

export default function Projects() {
  return (
    <div className="content-stretch flex flex-col gap-3 sm:gap-4 items-start relative w-full">
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-1 gap-1 w-full">
        <a
          className="block"
          href="https://selectedai.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p
            className={`${linkFont.className} text-[18px] leading-snug hover:underline underline-offset-2 decoration-1`}
          >
            Selected: AI Writing Assistant for Productivity
          </p>
        </a>
        <a
          className="block"
          href="https://github.com/yijun-tang/rudis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p
            className={`${linkFont.className} text-[18px] leading-snug hover:underline underline-offset-2 decoration-1`}
          >
            rudis: Redis Re-implemention in Rust for Learning Purpose
          </p>
        </a>
      </div>
    </div>
  );
}
