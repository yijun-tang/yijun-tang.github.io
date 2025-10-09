import Image from "next/image";
import { heading1Font, heading2Font } from "./common/fonts";

export default function Header() {
  return (
    <div
      className="content-stretch flex items-start justify-between max-w-[600px] relative shrink-0 w-full"
    >
      <div
        className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[448px]"
      >
        <div
          className={`${heading1Font.className} text-[36px] leading-[normal]`}
        >
          Yijun Tang
        </div>
        <div
          className={`${heading2Font.className} text-[20px] leading-[normal]`}
        >
          Indie Hacker / Software Engineer / Designer
        </div>
      </div>
      <Image alt="Yijun Tang" height={100} src="/avatar.svg" width={100} />
    </div>
  );
}
