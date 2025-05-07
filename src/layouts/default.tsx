import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-rich-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">
                Marco Cronje
              </h3>
              <p className="text-ash-gray-500 mb-4">
                Full Stack Developer & IoT Systems Engineer
              </p>
              <p className="text-ash-gray-500">Johannesburg, South Africa</p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-ash-gray-500 hover:text-white" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-ash-gray-500 hover:text-white"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-ash-gray-500 hover:text-white"
                    href="/skills"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-ash-gray-500 hover:text-white"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-ash-gray-500">
                  Email:{" "}
                  <Link
                    className="hover:text-white"
                    href="mailto:marcocronje@gmail.com"
                  >
                    marcocronje@gmail.com
                  </Link>
                </li>
                <li className="text-ash-gray-500">Phone: +27 83 442 3567</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-ash-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-ash-gray-500">
              © {new Date().getFullYear()} Marco Cronje. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                isExternal
                className="text-ash-gray-500 hover:text-white"
                href={siteConfig.links.github}
              >
                GitHub
              </Link>
              <Link
                isExternal
                className="text-ash-gray-500 hover:text-white"
                href={siteConfig.links.linkedin}
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
