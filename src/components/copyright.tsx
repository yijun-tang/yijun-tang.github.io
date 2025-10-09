import { copyrightFont } from "./common/fonts";

export default function Copyright() {
  return (
    <div
      className={`${copyrightFont.className} text-[14px] text-center leading-[normal]`}
    >
      © {new Date().getFullYear()} Yijun Tang. All Rights Reserved.
    </div>
  );
}
