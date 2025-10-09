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
      className="content-stretch flex flex-col items-start relative w-fit"
    >
      <p className={`${sectionFont.className} text-lg sm:text-xl leading-tight`}>
        {title}
      </p>
      <div className="bg-black h-[2px] sm:h-[3px] w-full" />
    </div>
  );
}