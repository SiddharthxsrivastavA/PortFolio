//use this for showcasing skillsss for PORTFOLIO try 1/2

"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
//import Image from "next/image";

const musicSchoolContent = [
    {
      title: 'Languages',
      description:
        'C++, Java, Python, JavaScript, HTML, CSS , SQL.',
    },
    {
      title: 'Frameworks & Libraries',
      description:
        'React.js, Express.js, Next.js, Tailwind CSS,Bootstrap, Flex.',
    },
    {
      title: 'CS Fundamentals',
      description:
        'Data Structures, Algorithms, OOPS, DBMS, OS, CN.',
    },
    {
      title: 'Miscellaneous',
      description:
        'MongoDB, Node.js, Prisma, Postgres, Git/GitHub, Docker.',
    },
    {
      title: 'Soft Skills',
      description:
        'Critical Thinking, Adaptability, Collaboration, Leadership.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
