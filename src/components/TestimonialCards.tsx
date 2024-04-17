//use this for showcasing skillsss for PORTFOLIO try 2/2

'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
        'Solved 300+ DSA problems on LeetCode, GFG, CodeStudio combined. Recieved Certificate for completion of training in: ',
      name: 'Data Structures & Algorithms, from',
      title: 'NextLeap',
    },
    {
      quote:
        "Became a Full-Stack Web Developer by following this course. Learned HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps. Completed from: ",
      name: 'Udemy, by',
      title: 'Angela Yu',
    },
  ];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">CERTIFICATES AND ACHIEVEMENTS</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials
