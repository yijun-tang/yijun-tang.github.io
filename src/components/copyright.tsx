import { Inter } from "next/font/google";

const copyrightFont = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function Copyright() {
  return (
    <div
      className={`${copyrightFont.className} text-[14px] text-center leading-[normal]`}
      data-name="Copyright"
    >
      © 2025 Yijun Tang. All Rights Reserved.
    </div>
  );
}
