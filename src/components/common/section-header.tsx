import { Encode_Sans_SC } from "next/font/google";

const sectionFont = Encode_Sans_SC({
  subsets: ["latin"],
  weight: "700",
});

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div
      className="content-stretch flex flex-col h-[28px] items-start relative shrink-0"
    >
      <p className={`${sectionFont.className} text-[20px] leading-[normal]`}>
        {title}
      </p>
      <div className="bg-black h-[3px] shrink-0 w-full" />
    </div>
  );
}