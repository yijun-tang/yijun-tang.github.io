import { italicParagraphFont } from "./common/fonts";

export default function Quote() {
  return (
    <div
      className={`${italicParagraphFont.className} text-base sm:text-lg leading-snug text-[#534f4f] text-center w-full`}
    >
      The Power of Simplicity
    </div>
  );
}
