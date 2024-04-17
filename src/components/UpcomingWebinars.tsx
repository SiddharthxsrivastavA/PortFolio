'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Languages',
      description:
        'C++, Python, JavaScript, SQL , HTML, CSS.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'Frameworks & Libraries',
      description:
        'React.js, Express.js, Next.js, Tailwind CSS,Bootstrap, Flex.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Miscellaneous',
      description:
        'MongoDB, Node.js, Prisma, Postgres, Git/GitHub, Docker.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 text-5xl font-semibold tracking-wide uppercase">SKILLS</h2>
        </div>

        <div className="mt-6">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>
  
      </div>
    </div>
  )
}

export default UpcomingWebinars

/*         // Added 3 more skills
    {
      title: 'CS Fundamentals',
      description:
        'Data Structures, Algorithms, OOPS, DBMS, OS, CN.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Soft Skills',
      description:
        'Critical Thinking, Adaptability, Collaboration, Leadership.',
      slug: 'live-performance-techniques',
      isFeatured: false,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: false,
    },   */