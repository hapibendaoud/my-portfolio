import Image from "next/image";

export default function Home() {
  return (
      <main >
        <div className="h-full  grid lg:grid-cols-3 grid-cols-1 pt-20 dark:bg-[#303030]">
          <div className=" h-full w-full flex flex-col lg:items-end max-sm:items-center justify-center max-lg:pt-30 max-lg:pl-20">
            <h3 className="font-bebas text-4xl lg:text-lg sm:text-sm tracking-[-0.03em] 
            scale-y-210 font-extrabold lg:pb-3 pb-5 text-[#303030] dark:text-white"
            >SAID AIT BENDAOUD</h3>
            <h1 className="font-bebas text-4xl lg:text-6xl sm:text-5xl tracking-[-0.03em] 
            scale-y-210 font-extrabold max-md:text-6xl text-[#303030] dark:text-white"
            >FRONTEND</h1>
          </div>
          
            <div className="h-full w-full flex items-center justify-center max-lg:pt-20 max-lg:px-3 relative">
              <Image src={"./MAINSAID.PNG"} alt="said" width={500} height={500} 
              className="lg:w-[85%] lg:h-[90%] max-lg:h-[90%] rounded-2xl"
              ></Image>
            <div className="w-30 h-30 absolute bottom-0 left-0 bggreen rounded-[50%] 
            flex justify-center items-center text-4xl text-[#303030]">Hi</div>
            </div>
          <div className=" h-full w-full flex lg:flex-wrap items-center lg:justify-start max-lg:justify-end 
          max-lg:pr-10 max-lg:pt-20 justify-center lg:items-center">
            <h1 className="font-bebas text-4xl lg:text-6xl md:text-5xl tracking-[-0.03em] scale-y-210 
            font-extrabold max-lg:text-5xl text-[#303030] dark:text-white lg:pt-4">DEVELOPER</h1>
          </div>
        </div>
        <div className="h-100">
          
        </div>
      </main>
  );
}
