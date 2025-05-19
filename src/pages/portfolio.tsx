// src/pages/portfolio.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { CardBody } from "@heroui/card";

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
                  This portfolio website serves as a showcase for my development
                  projects and skills. Built using React and HeroUI components,
                  it provides a clean, interactive way to present my work with
                  detailed project pages.
                </p>
                <p className="mb-4">
                  The portfolio includes responsive design elements that work
                  across devices while maintaining a consistent look and feel.
                  Features like the dark/light mode toggle and interactive
                  project showcases demonstrate practical implementation of
                  modern web development techniques.
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
                  <p>2024</p>
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

          {/* Technical Implementation section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Implementation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    React & HeroUI Framework
                  </h3>
                  <p className="text-default-700">
                    I chose React paired with HeroUI components to create a
                    clean, modern interface. HeroUI provides ready-to-use
                    components that are responsive across devices while
                    maintaining consistent styling. This combination allowed for
                    rapid development while ensuring a professional appearance.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Deployment & Hosting
                  </h3>
                  <p className="text-default-700">
                    The portfolio is deployed through Vercel&apos;s platform,
                    which connects directly to the GitHub repository for
                    automated deployments. This creates a seamless workflow
                    where changes to the main branch are automatically built and
                    deployed without manual intervention.
                  </p>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Features section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Project Showcases
                  </h3>
                  <p className="text-default-700">
                    Each project has a dedicated page with interactive elements
                    like image carousels and modal lightboxes to effectively
                    showcase the work. Project details include technologies
                    used, key features, and development challenges.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Dark/Light Mode Toggle
                  </h3>
                  <p className="text-default-700">
                    The site implements theme switching functionality, allowing
                    visitors to select their preferred viewing mode. This
                    feature demonstrates the use of React&apos;s context API for
                    across the application.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Device Mockups
                  </h3>
                  <p className="text-default-700">
                    Custom mockup components display screenshots of mobile and
                    web projects within realistic device frames, enhancing the
                    visual presentation while providing context for how
                    applications appear on different devices.
                  </p>
                </CardBody>
              </GlassCard>
            </div>
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
