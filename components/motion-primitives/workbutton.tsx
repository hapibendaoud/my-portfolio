
export default function WorkButton({ text }: { text: string }) {
  return (
    <button className="group relative flex items-center justify-center overflow-hidden rounded-full w-1/3 h-13 border border-[#D0FF71] text-sm py-3 lg:text-lg transition-all">
      
      <span
        className="absolute bottom-0 left-0 h-40 w-full origin-bottom
        translate-y-full transform overflow-hidden
        rounded-full bg-[#D0FF71]
        transition-all duration-300 ease-out
        group-hover:translate-y-14 z-10"
      ></span>

      <span className="relative z-20 font-semibold text-[#D0FF71] group-hover:text-black">
        {text}
      </span>

    </button>
  );
}

