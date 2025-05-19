// src/pages/about.tsx
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ProfileImage } from "@/components/ProfileImage";

export default function AboutPage() {
  const certificates = [
    "IBM - Full Stack Developer (in progress)",
    "IBM - iOS and Android Mobile App Developer",
    "IBM - Data Science",
    "Google - Digital Marketing & E-Commerce",
    "Autodesk - 3D Model Creation with Fusion 360",
  ];

  return (
    <DefaultLayout>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left column - details cards */}
            <div className="w-full md:w-1/3">
              {/* Profile image without any card */}
              <div className="flex justify-center mb-6">
                <ProfileImage
                  effectVariant="subtle"
                  shape="rounded"
                  size="sm"
                />
              </div>

              {/* Education & Certifications Card */}
              <Card className="mb-6 overflow-hidden">
                <CardBody className="p-5">
                  <h2 className="font-heading font-bold text-xl mb-4">
                    Education & Certifications
                  </h2>
                  <p className="mb-2 text-default-700">
                    Certificate in Media Design Technology, Damelin (2003-2004)
                  </p>
                  <div className="mt-4">
                    <h3 className="font-medium mb-3">
                      Professional Certifications:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {certificates.map((cert, index) => (
                        <Chip
                          key={index}
                          color="primary"
                          size="sm"
                          variant="flat"
                        >
                          {cert}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Languages Card with improved styling */}
              <Card className="overflow-hidden">
                <CardBody className="p-5">
                  <h2 className="font-heading font-bold text-xl mb-4">
                    Languages
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Fluent:</span>
                      <div className="flex gap-2">
                        <Chip color="primary" size="sm" variant="flat">
                          English
                        </Chip>
                        <Chip color="primary" size="sm" variant="flat">
                          Afrikaans
                        </Chip>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Beginner:</span>
                      <Chip color="default" size="sm" variant="flat">
                        Italian
                      </Chip>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Right column - About content */}
            <div className="w-full md:w-2/3">
              <h1 className={title({ size: "lg", class: "mb-6" })}>About Me</h1>

              <div className="prose max-w-none mb-8">
                {/* Professional Overview without image */}
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    Professional Overview
                  </h2>
                  <p className="text-lg mb-4">
                    As a <strong>Full Stack Developer</strong>, I create
                    comprehensive software solutions that solve real business
                    challenges across web, mobile, and cloud platforms. My
                    passion lies in building systems that handle real-time data
                    effectively, creating responsive applications that deliver
                    immediate value to users.
                  </p>

                  <p className="mb-4">
                    I&apos;m comfortable working throughout the entire
                    development stack—from crafting intuitive user interfaces to
                    implementing efficient backend systems and database
                    architectures. This versatility allows me to approach
                    projects holistically and select the right technologies for
                    each specific challenge.
                  </p>
                </div>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Key Achievements
                </h2>
                <p className="mb-4">
                  At Joint Ventures Electronic Services, I identified a critical
                  opportunity when our team was struggling with a legacy
                  application. Taking initiative, I developed a comprehensive{" "}
                  <strong>
                    cross-platform mobile application using Flutter
                  </strong>{" "}
                  that integrated with proprietary hardware through BLE
                  communications.
                </p>

                <p className="mb-6">
                  The solution was so effective that management decided to
                  replace their original B4A app with my implementation—
                  <strong>
                    improving user experience while eliminating external
                    development costs
                  </strong>
                  . This transformation showcased my ability to recognize
                  opportunities and execute solutions that exceed expectations.
                  You can see more details in my{" "}
                  <Link color="primary" href="/projects/etamax">
                    Etamax Solar Monitoring System
                  </Link>{" "}
                  project.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Technical Expertise
                </h2>
                <p className="mb-2">My technical skills encompass:</p>
                <ul className="mb-6 list-disc pl-5 space-y-1">
                  <li>
                    <strong>Mobile & Web Development</strong>: Building
                    cross-platform applications with Flutter and responsive web
                    interfaces with React and TypeScript
                  </li>
                  <li>
                    <strong>Database & Cloud Systems</strong>: Designing
                    efficient data architectures and implementing real-time
                    synchronization using Firebase, Supabase, and similar
                    technologies
                  </li>
                  <li>
                    <strong>Serverless Functions</strong>: Developing cloud
                    functions for automated business processes, data
                    transformations, and system integrations without requiring
                    dedicated server infrastructure
                  </li>
                  <li>
                    <strong>API Development</strong>: Creating robust interfaces
                    between systems, including RESTful services and real-time
                    communication protocols
                  </li>
                  <li>
                    <strong>Integration Solutions</strong>: Connecting software
                    systems with various platforms, devices, and third-party
                    services to create cohesive solutions
                  </li>
                </ul>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Professional Background
                </h2>
                <p className="mb-4">
                  Since 2010, I&apos;ve built valuable experience in graphic
                  design, print production management, and digital marketing
                  while managing my company&apos;s digital printing department.
                  This background has developed my eye for visual design,
                  attention to detail, and understanding of business operations.
                </p>
                <p className="mb-6">
                  My experience includes developing automated workflows that
                  increased production efficiency, implementing technical
                  systems for tracking production status, and executing digital
                  marketing strategies including website optimization and
                  targeted campaigns. These skills have proven highly
                  transferable to software development, particularly in
                  understanding user requirements and designing intuitive
                  interfaces.
                </p>

                {/* Development Philosophy - condensed but retained */}
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Development Philosophy
                </h2>
                <p className="mb-2">
                  My approach centers on creating practical solutions for real
                  business problems, leveraging modern tools and
                  technologies—including AI assistants for rapid prototyping and
                  troubleshooting—to deliver high-quality results efficiently.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-cerulean-50 dark:bg-cerulean-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-1 text-cerulean-200">
                      Problem-First Thinking
                    </h3>
                    <p className="text-sm">
                      Understanding challenges thoroughly before developing
                      solutions
                    </p>
                  </div>
                  <div className="bg-cerulean-50 dark:bg-cerulean-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-1 text-cerulean-200">
                      User-Centered Design
                    </h3>
                    <p className="text-sm">
                      Creating systems that prioritize intuitive user
                      experiences
                    </p>
                  </div>
                  <div className="bg-cerulean-50 dark:bg-cerulean-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-1 text-cerulean-200">
                      Clean, Maintainable Code
                    </h3>
                    <p className="text-sm">
                      Building well-organized architectures with clear
                      documentation
                    </p>
                  </div>
                  <div className="bg-cerulean-50 dark:bg-cerulean-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-1 text-cerulean-200">
                      Practical, Solution-Driven Approach
                    </h3>
                    <p className="text-sm">
                      Creating systems that directly address business needs and
                      deliver tangible improvements
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Technical Versatility
                </h2>
                <p className="mb-4">
                  My projects span multiple domains—from IoT systems and mobile
                  applications to data science implementations. This versatility
                  allows me to approach problems holistically and select the
                  most appropriate technologies for each specific challenge.
                </p>
                <p className="mb-6">
                  While primarily focused on full-stack development with
                  Flutter, React, and cloud databases, I also work with Python
                  for specialized integrations and custom business tools. I
                  enhance my productivity by incorporating AI-assisted
                  development practices, which helps me rapidly explore solution
                  options and optimize implementations.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Beyond Code
                </h2>
                <p className="mb-4">
                  When not developing software or integrating IoT devices, I
                  enjoy exploring emerging technologies and expanding my skill
                  set through continuous learning. I&apos;m also passionate
                  about 3D modeling with Fusion 360, which complements my IoT
                  work by allowing me to visualize hardware components and their
                  interactions with software systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
