import Link from "next/link"

function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About</h2>
            <p className="mb-4">
              I Made My PortFolio Using Next.js, TypeScript, Tailwind CSS and Aceternity UI.
            </p>
          </div>
          <div className="ml-5">
            <h2 className="text-white text-lg font-semibold mb-4">Connect With Me</h2>
            <ul>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-50">
            <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
            <p>328, Sector 21A</p>
            <p>Chandigarh, 160022.</p>
            <p>Email:srivastavasiddharth2003@gmail.com</p>
            <p>Phone: +91 9636955346</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Siddharth-PortFolio. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer