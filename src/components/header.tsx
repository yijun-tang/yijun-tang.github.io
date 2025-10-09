import Image from "next/image";
import { heading1Font, heading2Font } from "./common/fonts";

export default function Header() {
  return (
    <div className="content-stretch flex items-start justify-between gap-4 relative w-full">
      <div className="content-stretch flex flex-col gap-2 items-start relative w-auto max-w-[75%] sm:max-w-none">
        <div
          className={`${heading1Font.className} text-2xl sm:text-3xl md:text-4xl leading-tight`}
        >
          Yijun Tang
        </div>
        <div
          className={`${heading2Font.className} text-[20px] leading-[normal]`}
        >
          Indie Hacker / Software Engineer / Designer
        </div>
      </div>
      <div className="shrink-0">
        <Image
          alt="Yijun Tang"
          src="/avatar.svg"
          width={80}
          height={80}
          className="sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] w-[72px] h-[72px]"
        />
      </div>
    </div>
  );
}
