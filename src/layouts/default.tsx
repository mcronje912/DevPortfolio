import { Link } from "@heroui/link";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-rich-black text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">Marco Cronje</h3>
              <p className="text-ash-gray-500 mb-4">
                Full Stack Developer & IoT Systems Engineer
              </p>
              <p className="text-ash-gray-500">
                Johannesburg, South Africa
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-ash-gray-500 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-ash-gray-500 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="text-ash-gray-500 hover:text-white">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-ash-gray-500 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-ash-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-ash-gray-500">
              © {new Date().getFullYear()} Marco Cronje. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://github.com/mcronje912" isExternal className="text-ash-gray-500 hover:text-white">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/marco-cronje/" isExternal className="text-ash-gray-500 hover:text-white">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}