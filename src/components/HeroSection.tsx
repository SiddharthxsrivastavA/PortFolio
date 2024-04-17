import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
    <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"fill="white"/>
      <div className="p-4 relative z-10 w-full text-center">
      <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Hi, I'm SIDDHARTH SRIVASTAVA</h1>
      <p className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
      A Full-Stack Web Developer currently pursuing Electrical Engineering at PEC, Chandigarh, my passion for coding and algorithms drives my dedication as a tech enthusiast. I'm eagerly seeking real-world industry exposure to complement my studies.
      </p>
      <div className="mt-8">
        <Link href={"/"}>
            <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                PROJECTS
            </Button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default HeroSection
