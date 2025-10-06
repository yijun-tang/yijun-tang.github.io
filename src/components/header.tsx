import Image from "next/image";
import { Encode_Sans_SC, Epilogue } from "next/font/google";

const heading1Font = Encode_Sans_SC({
  subsets: ["latin"],
  weight: "700",
});

const heading2Font = Epilogue({
  subsets: ["latin"],
  weight: "400",
});

function Heading1() {
  return (
    <div
      className={`${heading1Font.className} text-[36px] leading-[normal]`}
      data-name="Heading 1"
    >
      Yijun Tang
    </div>
  );
}

function Heading2() {
  return (
    <div
      className={`${heading2Font.className} text-[20px] leading-[normal]`}
      data-name="Heading 2"
    >
      Indie Hacker / Software Engineer / Designer
    </div>
  );
}

function Name() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[448px]"
      data-name="Name"
    >
      <Heading1 />
      <Heading2 />
    </div>
  );
}

function Avatar() {
  return <Image alt="" height={100} src="/avatar.svg" width={100} />;
}

export default function Header() {
  return (
    <div
      className="content-stretch flex items-start justify-between max-w-[600px] relative shrink-0 w-full"
      data-name="Header"
    >
      <Name />
      <Avatar />
    </div>
  );
}
