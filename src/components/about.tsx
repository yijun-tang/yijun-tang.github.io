import { paragraphFont } from "./common/fonts";
import SectionHeader from "./common/section-header";

export default function About() {
  return (
    <div
      className="content-stretch flex flex-col gap-3 sm:gap-4 items-start relative w-full"
    >
      <SectionHeader title="About" />
      <div
        className={`${paragraphFont.className} text-base sm:text-lg leading-relaxed sm:leading-7`}
      >
        Yijun (or pronounced as Eugene) is a software engineer and designer based
        in Shenzhen with a passion for building virtual products he interests. He
        has experience across Online Travel Agency, E-commerce, Online Accounting,
        Database, and AI robot industries. When not online, he loves working out
        in fitness room or drinking with friends. Currently, he is working on his
        first AI product...
      </div>
    </div>
  );
}
