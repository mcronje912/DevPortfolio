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
                {/* Career Transition Story */}
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    From Business Operations to Software Development
                  </h2>
                  <p className="text-lg mb-4">
                    After 13+ years managing print production operations, I
                    discovered my passion for software development through{" "}
                    <strong>
                      automating business processes that others found
                      frustrating
                    </strong>
                    . This unique journey from business management to full-stack
                    development gives me a practical perspective—I build
                    software that solves real problems because I&apos;ve lived
                    with those problems.
                  </p>

                  <p className="mb-4">
                    Today, I create comprehensive software solutions across web,
                    mobile, and IoT platforms, always with an eye toward{" "}
                    <strong>delivering immediate business value</strong>. My
                    background in operations helps me understand not just how to
                    build software, but why it needs to be built and how users
                    will actually interact with it.
                  </p>

                  <p className="mb-6">
                    I&apos;m comfortable working throughout the entire
                    development stack—from crafting intuitive user interfaces to
                    implementing efficient backend systems and database
                    architectures. This versatility allows me to approach
                    projects holistically and select the right technologies for
                    each specific challenge.
                  </p>
                </div>

                {/* Business Background - moved up and reframed */}
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Business Operations Foundation
                </h2>
                <p className="mb-4">
                  My 13+ years in graphic design, print production management,
                  and digital marketing at Joint Ventures Electronic Services
                  provided invaluable real-world experience in{" "}
                  <strong>
                    identifying operational inefficiencies and implementing
                    solutions
                  </strong>
                  . I managed the company&apos;s digital printing department,
                  developed automated workflows that significantly improved
                  production efficiency, and executed digital marketing
                  strategies that drove measurable business growth.
                </p>
                <p className="mb-6">
                  This business foundation gives me a unique advantage as a
                  developer—I understand the difference between features that
                  look good on paper and solutions that actually improve daily
                  operations. I know how to gather requirements from
                  stakeholders, design user-friendly interfaces, and build
                  systems that people will actually want to use.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Key Achievements
                </h2>
                <p className="mb-4">
                  At Joint Ventures Electronic Services, I identified a critical
                  opportunity when our team was struggling with a legacy
                  application. Taking initiative, I{" "}
                  <strong>
                    designed and developed a complete IoT ecosystem
                  </strong>{" "}
                  including a cross-platform Flutter mobile application,
                  React-based admin dashboard, cloud database architecture, and
                  real-time synchronization services—all integrated with
                  proprietary hardware through secure BLE communications.
                </p>

                <p className="mb-6">
                  The solution was so effective that management decided to
                  replace their original B4A app with my comprehensive
                  implementation—
                  <strong>
                    improving user experience while eliminating external
                    development costs
                  </strong>
                  . This end-to-end system design showcased my ability to
                  architect complete solutions that bridge software and hardware
                  seamlessly. You can see more details in my{" "}
                  <Link color="primary" href="/projects/etamax">
                    Etamax Solar Monitoring System
                  </Link>{" "}
                  project.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Technical Capabilities
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
                    <strong>IoT Integration</strong>: Connecting software
                    systems with hardware devices through secure communication
                    protocols like BLE and MQTT
                  </li>
                  <li>
                    <strong>API Development</strong>: Creating robust interfaces
                    between systems, including RESTful services and real-time
                    communication protocols
                  </li>
                  <li>
                    <strong>System Architecture</strong>: Designing complete
                    software ecosystems that integrate multiple platforms and
                    services
                  </li>
                </ul>

                {/* Simplified Development Philosophy */}
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Development Approach
                </h2>
                <p className="mb-4">
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
                      Understanding business challenges before developing
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
                      End-to-End Solutions
                    </h3>
                    <p className="text-sm">
                      Designing complete ecosystems that integrate seamlessly
                    </p>
                  </div>
                  <div className="bg-cerulean-50 dark:bg-cerulean-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-1 text-cerulean-200">
                      Business Impact Focus
                    </h3>
                    <p className="text-sm">
                      Building software that delivers measurable business value
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Technical Versatility
                </h2>
                <p className="mb-4">
                  My projects span multiple domains—from IoT systems and mobile
                  applications to data science implementations and business
                  process automation. This versatility allows me to approach
                  problems holistically and select the most appropriate
                  technologies for each specific challenge.
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
