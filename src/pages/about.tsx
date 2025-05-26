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
              {/* Profile image */}
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

              {/* Languages Card */}
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
                {/* Evolution Story */}
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    Technical Problem Solver with Business Operations Expertise
                  </h2>
                  <p className="text-lg mb-4">
                    My journey at Joint Ventures Electronic Services since 2010
                    has been one of{" "}
                    <strong>
                      natural evolution from business operations to hands-on
                      software development
                    </strong>
                    . What started as managing digital printing operations
                    gradually shifted toward technical challenges as I
                    identified opportunities where custom software solutions
                    could dramatically improve our business processes.
                  </p>

                  <p className="mb-4">
                    Rather than outsourcing development, I chose to learn these
                    technologies myself— first collaborating closely with our
                    electronic engineers, then developing automation tools, and
                    eventually building complete IoT ecosystems with mobile and
                    web interfaces. This hands-on approach gave me{" "}
                    <strong>
                      a unique perspective on how software integrates with real
                      business operations
                    </strong>
                    .
                  </p>

                  <p className="mb-6">
                    Today, I focus on software development and technical
                    leadership while leveraging my deep understanding of
                    business challenges to build solutions that users actually
                    want to use. My background helps me bridge the gap between
                    technical possibilities and practical business needs.
                  </p>
                </div>

                {/* Role Evolution */}
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Role Evolution at Joint Ventures Electronic Services
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2 text-cerulean-600">
                    2010-2020: Operations & Digital Systems Management
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>
                      Established and managed the digital printing department
                    </li>
                    <li>
                      Implemented production tracking and workflow systems
                    </li>
                    <li>
                      Collaborated closely with electronic engineers on
                      technical solutions
                    </li>
                    <li>
                      Identified operational inefficiencies that could be solved
                      through automation
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2 text-cerulean-600">
                    2020-Present: Software Development & Technical Leadership
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>
                      Led digital transformation initiatives and technical
                      project management
                    </li>
                    <li>
                      Developed custom business automation tools that reduced
                      manual processes
                    </li>
                    <li>
                      Built complete IoT ecosystem including mobile apps, web
                      dashboards, and cloud integration
                    </li>
                    <li>
                      Established in-house software development capabilities
                    </li>
                    <li>
                      Managed secure IoT communication protocols and real-time
                      data synchronization
                    </li>
                  </ul>
                </div>

                {/* Key Achievement */}
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Signature Achievement: Etamax IoT Ecosystem
                </h2>
                <p className="mb-4">
                  When our team needed a comprehensive solar monitoring
                  solution, I{" "}
                  <strong>
                    designed and developed the complete system from the ground
                    up
                  </strong>
                  — a cross-platform Flutter mobile application, React-based
                  administrative dashboard, cloud database architecture, and
                  secure BLE communication with proprietary hardware.
                </p>

                <p className="mb-6">
                  The solution was so effective that it{" "}
                  <strong>
                    replaced the original third-party application entirely
                  </strong>
                  , improving user experience while eliminating external
                  development costs. The system now achieves 50-85% solar
                  utilization across deployments, delivering measurable value to
                  end users. You can explore the technical details in my{" "}
                  <Link color="primary" href="/projects/etamax">
                    Etamax Solar Monitoring System
                  </Link>{" "}
                  project.
                </p>

                {/* Technical Capabilities */}
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Technical Capabilities
                </h2>
                <p className="mb-4">
                  My development expertise spans the full stack, with particular
                  strength in:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-cerulean-50 dark:bg-cerulean-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 text-cerulean-700 dark:text-cerulean-300">
                      Mobile & Cross-Platform Development
                    </h3>
                    <p className="text-sm">
                      Flutter/Dart applications with hardware integration, BLE
                      communication, and offline functionality
                    </p>
                  </div>
                  <div className="bg-cerulean-50 dark:bg-cerulean-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 text-cerulean-700 dark:text-cerulean-300">
                      Web Applications & Dashboards
                    </h3>
                    <p className="text-sm">
                      React/TypeScript interfaces with real-time data
                      visualization, responsive design, and cloud integration
                    </p>
                  </div>
                  <div className="bg-cerulean-50 dark:bg-cerulean-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 text-cerulean-700 dark:text-cerulean-300">
                      IoT & Hardware Integration
                    </h3>
                    <p className="text-sm">
                      ESP32/STM32 programming, secure communication protocols,
                      and bridging software with proprietary hardware
                    </p>
                  </div>
                  <div className="bg-cerulean-50 dark:bg-cerulean-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 text-cerulean-700 dark:text-cerulean-300">
                      Cloud Architecture & Databases
                    </h3>
                    <p className="text-sm">
                      Real-time synchronization, serverless functions, and
                      scalable database design
                    </p>
                  </div>
                </div>

                {/* Development Approach */}
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Development Philosophy
                </h2>
                <p className="mb-4">
                  My approach to software development is rooted in{" "}
                  <strong>
                    understanding the real problem before writing any code
                  </strong>
                  . Having experienced firsthand how technology can either solve
                  or complicate business operations, I prioritize building
                  solutions that integrate seamlessly into existing workflows.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-verdigris-50 dark:bg-verdigris-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-1 text-verdigris-700 dark:text-verdigris-300">
                      Problem-First Thinking
                    </h3>
                    <p className="text-sm">
                      Understanding business challenges and user needs before
                      selecting technical solutions
                    </p>
                  </div>
                  <div className="bg-verdigris-50 dark:bg-verdigris-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-1 text-verdigris-700 dark:text-verdigris-300">
                      Practical Implementation
                    </h3>
                    <p className="text-sm">
                      Building working solutions quickly, then iterating based
                      on real user feedback
                    </p>
                  </div>
                  <div className="bg-verdigris-50 dark:bg-verdigris-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-1 text-verdigris-700 dark:text-verdigris-300">
                      End-to-End Solutions
                    </h3>
                    <p className="text-sm">
                      Designing complete ecosystems that integrate seamlessly
                      across platforms and technologies
                    </p>
                  </div>
                  <div className="bg-verdigris-50 dark:bg-verdigris-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-1 text-verdigris-700 dark:text-verdigris-300">
                      Business Impact Focus
                    </h3>
                    <p className="text-sm">
                      Measuring success by operational improvements and
                      measurable business outcomes
                    </p>
                  </div>
                </div>

                {/* Current Focus */}
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Current Focus & Goals
                </h2>
                <p className="mb-4">
                  I&apos;m now looking to{" "}
                  <strong>focus more on hands-on software development</strong>{" "}
                  while leveraging my business operations experience. My ideal
                  role would involve building practical solutions for real
                  business challenges—whether that&apos;s IoT integrations, business
                  automation tools, or cross-platform applications.
                </p>

                <p className="mb-4">
                  I&apos;m particularly interested in opportunities where I can
                  contribute to:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  <li>
                    Flutter mobile application development with hardware
                    integration
                  </li>
                  <li>IoT systems that bridge software and physical devices</li>
                  <li>
                    Business automation solutions that improve operational
                    efficiency
                  </li>
                  <li>
                    Cross-platform applications that solve real user problems
                  </li>
                </ul>

                {/* Personal Touch */}
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Beyond Development
                </h2>
                <p className="mb-4">
                  When not coding or integrating IoT devices, I enjoy exploring
                  emerging technologies and expanding my skill set through
                  continuous learning. I&apos;m also passionate about 3D modeling
                  with Fusion 360, which complements my IoT work by helping me
                  helping me visualize hardware components and their
                  interactions with software systems.
                </p>
                <p className="mb-4">
                  My journey has taught me that the best technology solutions
                  come from come from understanding both the technical
                  possibilities and the human challenges they&apos;re meant to
                  solve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
