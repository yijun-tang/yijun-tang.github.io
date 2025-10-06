import { Encode_Sans_SC, Epilogue } from "next/font/google";

const sectionFont = Encode_Sans_SC({
  subsets: ["latin"],
  weight: "700",
});

const paragraphFont = Epilogue({
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
        About
      </p>
      <div className="bg-black h-[3px] shrink-0 w-full" />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className={`${paragraphFont.className} text-[18px] leading-[22px]`}
      data-name="Paragraph"
    >
      Yijun (or pronounced as Eugene) is a software engineer and designer based
      in Shenzhen with a passion for building virtual products he interests. He
      has experience across Online Travel Agency, E-commerce, Online Accounting,
      Database, and AI robot industries. When not online, he loves working out
      in fitness room or drinking with friends. Currently, he is working on his
      first AI product...
    </div>
  );
}

export default function About() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
      data-name="About"
    >
      <Section />
      <Paragraph />
    </div>
  );
}
