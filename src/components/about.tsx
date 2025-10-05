function Section() {
  return (
    <div
      className="content-stretch flex flex-col h-[28px] items-start relative shrink-0"
      data-name="Section"
    >
      <p
        className="font-['Encode_Sans_SC:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-black w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        About
      </p>
      <div className="bg-black h-[3px] shrink-0 w-full" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[154px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Epilogue:Regular',_sans-serif] font-normal inset-0 leading-[22px] text-[18px] text-black">
        Yijun (or pronounced as Eugene) is a software engineer and designer
        based in Shenzhen with a passion for building virtual product he
        interests. He has an experience across Online Travel Agency, E-commerce,
        Online Accounting, Database, and AI robots industries. When not online,
        he loves workout in fitness room or drinking with friends. Currently, he
        is working on his first AI product...
      </p>
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
