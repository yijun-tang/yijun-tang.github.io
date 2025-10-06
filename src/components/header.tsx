import Image from "next/image";
import imgAvatar from "../../public/avatar.svg";

function Heading1() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Heading 1">
      <p
        className="absolute font-['Encode_Sans_SC:Bold',_sans-serif] font-bold inset-0 leading-[normal] text-[36px] text-black"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Yijun Tang
      </p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Epilogue:Regular',_sans-serif] font-normal inset-0 leading-[normal] text-[20px] text-black">
        Indie Hacker / Software Engineer / Designer
      </p>
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
  return (
    <Image
      alt=""
      className="block max-w-none size-full"
      height={100}
      src={imgAvatar}
      width={100}
      priority
    />
  );
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
