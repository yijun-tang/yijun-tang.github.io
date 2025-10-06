import { Epilogue } from "next/font/google";

const paragraphFont = Epilogue({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export default function Quote() {
  return (
    <div
      className={`${paragraphFont.className} text-[18px] leading-[normal] text-[#534f4f] text-center w-full`}
      data-name="Quote"
    >
      The Power of Simplicity
    </div>
  );
}
