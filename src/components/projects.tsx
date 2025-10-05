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
        Projects
      </p>
      <div className="bg-black h-[3px] shrink-0 w-full" />
    </div>
  );
}

function ProjectLink() {
  return (
    <a
      className="box-border content-stretch cursor-pointer flex flex-col items-start max-w-[600px] overflow-visible p-0 relative shrink-0"
      data-name="Project Link"
      href="https://github.com/yijun-tang/rudis"
    >
      <p className="font-['Epilogue:Regular',_sans-serif] font-normal leading-[22px] max-w-[600px] relative shrink-0 text-[18px] text-black w-full">
        rudis: Redis Re-implemention in Rust for Learning Purpose
      </p>
      <div className="bg-black h-[1.5px] shrink-0 w-full" />
    </a>
  );
}

export default function Projects() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[603px]"
      data-name="Projects"
    >
      <Section />
      <ProjectLink />
    </div>
  );
}
