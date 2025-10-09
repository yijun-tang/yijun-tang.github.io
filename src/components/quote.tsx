import { italicParagraphFont } from "./common/fonts";

export default function Quote() {
  return (
    <div
      className={`${italicParagraphFont.className} text-[18px] leading-[normal] text-[#534f4f] text-center w-full`}
    >
      The Power of Simplicity
    </div>
  );
}
