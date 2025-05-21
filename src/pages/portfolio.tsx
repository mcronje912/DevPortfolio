// src/pages/portfolio.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { CardBody } from "@heroui/card";
import { motion } from "framer-motion";

import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { GlassCard } from "@/components/GlassCard";

export default function PortfolioProjectPage() {
  return (
    <DefaultLayout>
      <div className="py-10">
        <div className="container px-4 mx-auto">
          {/* Header section */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center mb-4">
              <Link
                className="flex items-center hover:opacity-80 transition-opacity mr-4"
                color="primary"
                href="/projects"
              >
                <span className="text-lg">←</span>
                <span className="ml-1">Projects</span>
              </Link>
            </div>

            <h1 className={title({ size: "lg", class: "mb-4" })}>
              Developer Portfolio Website
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                Web App
              </Chip>
              <Chip color="primary" variant="flat">
                Portfolio
              </Chip>
              <Chip color="primary" variant="flat">
                React
              </Chip>
            </div>
          </div>

          {/* Overview section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  This portfolio website serves as a showcase for my development projects and skills. Built using
                  React, TypeScript, and HeroUI components with Tailwind CSS, it features a responsive design,
                  interactive project displays, and accessibility enhancements.
                </p>
                <p className="mb-4">
                  The portfolio includes responsive design elements that work across devices while maintaining
                  a consistent look and feel. Features like the dark/light mode toggle and interactive
                  project showcases demonstrate practical implementation of modern web development techniques.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="secondary" variant="flat">
                      React
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      TypeScript
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      HeroUI
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Tailwind CSS
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Vite
                    </Chip>
                  </div>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Completed
                  </h3>
                  <p>2025</p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    GitHub Repository
                  </h3>
                  <Link
                    isExternal
                    className="flex items-center gap-2 text-cerulean hover:underline"
                    href="https://github.com/mcronje912/DevPortfolio"
                  >
                    <GithubIcon className="h-5 w-5" />
                    View Source Code
                  </Link>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Key FTechnical Imeatures section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Device Mockups
                  </h3>
                  <p className="text-default-700">
                    Custom device mockup components display project screenshots within realistic phone, tablet, and laptop
                    frames, providing context for how applications appear on different devices.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Dark/Light Mode Toggle
                  </h3>
                  <p className="text-default-700">
                    The site implements theme switching functionality, allowing visitors to select their preferred viewing mode.
                    feature demonstrates the use of React&apos;s context API for
                    state management across the application.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Image Optimization
                  </h3>
                  <p className="text-default-700">
                    Implements WebP image format conversion, responsive image sizing, and lazy loading to ensure
                    fast page loads and optimal performance across all devices and network conditions.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Accessibility Features
                  </h3>
                  <p className="text-default-700">
                    ARIA attributes, keyboard navigation, proper focus indicators, and semantic HTML ensure
                    the portfolio is usable by everyone, including those using assistive technologies.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Automated Testing
                  </h3>
                  <p className="text-default-700">
                    Unit and integration tests validate component behavior and key user flows,
                    ensuring reliability and preventing regressions during development.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Analytics Integration
                  </h3>
                  <p className="text-default-700">
                    Custom event tracking provides insights into user behavior and engagement,
                    helping to identify popular content and potential improvements.
                  </p>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Development Approach section with motion */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Development Approach
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose max-w-none text-default-700"
            >
              <p className="mb-4">
                This portfolio was developed with a focus on code quality, performance, and user experience.
                Key aspects of the development approach include:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Component-Based Architecture:</strong> Modular, reusable components that encapsulate
                  their own logic and styling for maintainability and consistency.
                </li>
                <li>
                  <strong>Progressive Enhancement:</strong> Core functionality works without JavaScript, with
                  enhanced interactions layered on top for modern browsers.
                </li>
                <li>
                  <strong>Performance First:</strong> Optimized assets, code splitting, and lazy loading to
                  ensure fast load times and smooth interactions.
                </li>
                <li>
                  <strong>Test-Driven Development:</strong> Writing tests alongside components to ensure
                  reliability and catch issues early in the development process.
                </li>
                <li>
                  <strong>Accessibility Integration:</strong> Considering accessibility from the start rather
                  than as an afterthought, with regular audits during development.
                </li>
              </ul>
              
              <p>
                The development workflow leveraged modern tools like Vite for fast builds and hot module replacement,
                ESLint for code quality, and Git for version control with structured commits.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <div className="flex justify-center mt-12">
            <Button
              isExternal
              as={Link}
              className="px-8 mr-4"
              color="primary"
              href="https://github.com/mcronje912/DevPortfolio"
              startContent={<GithubIcon />}
              variant="shadow"
            >
              View Source on GitHub
            </Button>
            <Button
              as={Link}
              className="px-8"
              href="/contact"
              variant="bordered"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}