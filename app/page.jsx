import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/motion-primitives/accordion';
import { ChevronUp } from 'lucide-react';


export default function Home() {
  return (
      <main >
        <div className="h-screen max-lg:h-fit grid lg:grid-cols-3 grid-cols-1 pt-20 dark:bg-[#303030]">
          <div className="toleft h-full w-full flex flex-col lg:items-end max-sm:items-center justify-center max-lg:pt-30 max-lg:pl-20">
            <h3 className="font-bebas text-4xl lg:text-lg sm:text-sm tracking-[-0.03em] 
            scale-y-210 font-extrabold lg:pb-3 pb-5 text-[#303030] dark:text-white"
            >SAID AIT BENDAOUD</h3>
            <h1 className="font-bebas text-4xl lg:text-6xl sm:text-5xl tracking-[-0.03em] 
            scale-y-210 font-extrabold max-md:text-6xl text-[#303030] dark:text-white"
            >FRONTEND</h1>
          </div>
          
            <div className="h-full w-full flex items-center justify-center max-lg:pt-20 max-lg:px-3 relative scene z-10">
              <Image src={"/MAINSAID.PNG"} alt="said" width={500} height={500} 
              className="photointer image lg:w-[85%] lg:h-[90%] max-lg:h-[90%] rounded-2xl"
              ></Image>
            <div className="image w-30 h-30 absolute bottom-0 left-0 max-lg:left-40 bggreen rounded-[50%] 
            flex justify-center items-center text-4xl text-[#303030]">Hi</div>
            </div>
          <div className=" h-full w-full flex flex-col justify-center max-lg:items-end max-lg:justify-end 
          max-lg:pr-10 max-lg:py-20 gap-15 ">
            <h1 className="toright font-bebas text-4xl lg:text-6xl md:text-5xl tracking-[-0.03em] scale-y-210 
            font-extrabold max-lg:text-5xl text-[#303030] dark:text-white lg:pt-18  ">DEVELOPER</h1>
            <p className="toright w-[87%] h-fit flex lg:justify-end max-lg:justify-end text-right text-[#303030] dark:text-white">
              I'm a UI / UX front-end web developer, <br></br>Interface web design
            </p>
          </div>
        </div>
        <div className="h-screen w-full">
          <div className="flex max-lg:flex-col h-fit max-lg:pb-20 w-full py-40 px-25 ">
            <div className="flex flex-col w-full lg:w-[50%] gap-10 border-b border-gray-700">
              <h1 className="text-3xl font-extrabold uppercase tracking-[0.03em] scale-y-219">what I can do for you</h1>
              <p className="">
                As a web developer, I transform ideas into modern, scalable, and high-performance websites that deliver real impact.
              </p>
              <Accordion
                className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700 gap-6'
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <AccordionItem  onItem value='getting-started' className='py-2'>
                  <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
                    <div className='flex items-center justify-between'>
                      <div className="text-lg font-bold uppercase tracking-widest scale-y-219 hover:text-[#5E67E6] dark:hover:text-[#D0FF71] focus:text-[#D0FF71] active:text-[#D0FF71]">1. UI/UX developer</div>
                      <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className='text-zinc-500 dark:text-zinc-400 py-4 gap-3 flex flex-col'>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/> Wireframing and prototyping</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>User Interface for web site and web apps</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Usability testing and user feedback analysis</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Interaction design and micro-animations</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='animation-properties' className='py-2'>
                  <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
                    <div className='flex items-center justify-between'>
                      <div className="text-lg font-bold uppercase tracking-widest scale-y-219 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]">2. Graphic builder</div>
                      <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className='text-zinc-500 dark:text-zinc-400 py-4 gap-3 flex flex-col'>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Logo and brand identity design</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Social media graphics and ad creatives</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Custom illustrations and icons</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Infographics and data visualization</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='advanced-usage' className='py-2'>
                  <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
                    <div className='flex items-center justify-between'>
                      <div className="text-lg font-bold uppercase tracking-widest scale-y-219 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]">3. Web Design</div>
                      <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className='text-zinc-500 dark:text-zinc-400 py-4 gap-3 flex flex-col'>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Responsive website design</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Landing page design and optimization</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Webflow development and customization</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Website maintenance and updates</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='community-and-support' className='py-2'>
                  <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
                    <div className='flex items-center justify-between'>
                      <div className="text-lg font-bold uppercase tracking-widest scale-y-219 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]">4. Branding</div>
                      <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className='text-zinc-500 dark:text-zinc-400 py-4 gap-3 flex flex-col'>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Brand strategy and identity development</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Visual style guide creation</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Typography and color scheme selection</li>
                      <li className="flex items-center gap-3 hover:text-[#5E67E6] dark:hover:text-[#D0FF71]"><Image src="/check.png" alt="checkmark" width={16} height={16}/>Brand storytelling and messaging</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="lg:w-[50%] w-full">
              <h1>Hi</h1>
            </div>
          </div>
          <div className="flex max-lg:flex-col h-fit pb-20 w-full px-25 ">
            <div className="flex flex-col w-full lg:w-[50%] gap-8">
              <h1 className="text-3xl font-extrabold uppercase tracking-[0.03em] scale-y-219">About me</h1>
              <p>Hi, I'm Said — a frontend web developer passionate about building modern, 
                responsive, and user-focused web experiences that bring ideas to life.</p>
              <div className="flex w-full pt-3.5">
                <div className="w-1/3  flex flex-col gap-3 ">
                  <h1 className="text-3xl font-extrabold uppercase scale-y-219 text-[#D0FF71]">3</h1>
                  <p className="font-bebas font-bold lg:pb-3 pb-5 text-[#303030] dark:text-white">Month of Experience</p>
                </div>
                <div className="w-1/3 flex flex-col gap-3 "> 
                  <h1 className="text-3xl font-extrabold uppercase scale-y-219 text-[#D0FF71]">2</h1>
                  <p className="font-bebas font-bold lg:pb-3 pb-5 text-[#303030] dark:text-white">Completed Projects</p>
                </div>
                <div className="w-1/3 flex flex-col gap-3 ">
                  <h1 className="text-3xl font-extrabold uppercase scale-y-219 text-[#D0FF71]">0+</h1>
                  <p className="font-bebas font-bold lg:pb-3 pb-5 text-[#303030] dark:text-white">Clients on Worldwide</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/3  flex flex-col ">
                  <h1 className="font-bebas font-bold text-[#303030] dark:text-white">Call Today :</h1>
                  <a href="tel:+212658259695" className="hover:text-[#D0FF71] w-fit">+212 658 259 695</a>
                </div>
                <div className="w-2/3 flex flex-col ">
                  <h1 className="font-bebas font-bold text-[#303030] dark:text-white">Email :</h1>
                  <a href="mailto:hapibendaoud@gmail.com" className="hover:text-[#D0FF71] w-fit">hapibendaoud@gmail.com</a>
                </div>
              </div>
              <div className="flex w-1/3 justify-around">
                <Link href="https://www.instagram.com/hapi_bendaoud/" target="_blink"><Image src="/instagram.png" alt="instagram" width={32} height={32} className=""/></Link>
                <Link href="https://www.facebook.com/said.ait.bendaoud.2025" target="_blink"><Image src="/facebook.png" alt="facebook" width={32} height={32} className=""/></Link>
                <Link href="https://github.com/HapiBendaoud" target="_blink"><Image src="/github.png" alt="github" width={32} height={32} className=""/></Link>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-[50%] ">

            </div>
          </div>
        </div>
      </main>
  );
}
