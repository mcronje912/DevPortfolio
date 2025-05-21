// src/components/Footer.tsx
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { ExternalLink } from "@/components/ExternalLink";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rich-black-500 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Brief Description */}
          <div className="col-span-1">
            <Link
              className="font-heading font-bold text-2xl text-cerulean mb-4 inline-block"
              href="/"
            >
              MC
            </Link>
            <p className="text-ash-gray-400 mt-2">
              Full Stack Developer & IoT Systems Engineer based in Johannesburg.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-ash-gray-400 hover:text-cerulean transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <ExternalLink
                  className="text-ash-gray-400 hover:text-cerulean transition-colors flex items-center gap-2"
                  href={siteConfig.links.github}
                  trackingName="GitHub_Footer"
                >
                  <GithubIcon className="h-5 w-5" />
                  GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  className="text-ash-gray-400 hover:text-cerulean transition-colors"
                  href={siteConfig.links.email}
                  trackingName="Email_Footer"
                >
                  Email
                </ExternalLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="text-ash-gray-400 not-italic">
              Johannesburg, South Africa
              <br />
              <Link
                className="text-ash-gray-400 hover:text-cerulean transition-colors"
                href={siteConfig.links.email}
              >
                marcocronje@gmail.com
              </Link>
            </address>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-rich-black-400 mt-8 pt-6 text-center text-ash-gray-500">
          <p>&copy; {currentYear} Marco Cronje. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
