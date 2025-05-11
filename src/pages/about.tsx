// src/pages/about.tsx
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

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

  const education = [
    {
      institution: "Damelin, Johannesburg",
      degree: "Certificate in Media Design Technology",
      years: "2003 - 2004",
    },
    {
      institution: "Hoerskool President, Johannesburg",
      degree: "High School Senior Certificate",
      years: "2002",
    },
  ];

  return (
    <DefaultLayout>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left column - Profile image and basic info */}
            <div className="w-full md:w-1/3">
              <div className="sticky top-24">
                {/* Vector portrait image */}
                <ProfileImage
                  className="mb-6 mx-auto rounded-lg overflow-hidden"
                  effectVariant="subtle"
                  size="xs"
                />

                <Card className="mb-6">
                  <CardBody>
                    <h2 className="font-heading font-bold text-xl mb-4">
                      Contact Information
                    </h2>
                    <div className="space-y-2">
                      <p>
                        <strong>Location:</strong> Johannesburg, South Africa
                      </p>
                      <p>
                        <strong>Email:</strong> marcocronje@gmail.com
                      </p>
                      <p>
                        <strong>Phone:</strong> 083 442 3567
                      </p>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <h2 className="font-heading font-bold text-xl mb-4">
                      Languages
                    </h2>
                    <div className="space-y-2">
                      <p>
                        <strong>Fluent:</strong> English, Afrikaans
                      </p>
                      <p>
                        <strong>Beginner:</strong> Italian
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

            {/* Right column - About content */}
            <div className="w-full md:w-2/3">
              <h1 className={title({ size: "lg", class: "mb-6" })}>About Me</h1>

              <div className="prose max-w-none mb-10">
                <p className="text-lg mb-4">
                  As a Full Stack Developer & IoT Systems Engineer, I create
                  end-to-end technology solutions that connect hardware and
                  software across multiple platforms. My work spans from mobile
                  applications built with Flutter to web dashboards created with
                  React, all integrated with various backend systems and IoT
                  devices.
                </p>

                <p className="mb-4">
                  My expertise extends across the entire development stack -
                  from responsive front-end interfaces to robust back-end
                  systems and cloud infrastructure. I specialize in connecting
                  digital and physical systems through IoT, BLE communications,
                  and real-time data synchronization, providing clients with
                  comprehensive solutions that bridge hardware and software
                  domains.
                </p>

                <p className="mb-4">
                  Git is an essential part of my daily workflow. I use it not
                  only for version control but as a central hub for project
                  management, feature planning, and deployment pipelines. This
                  structured approach to development helps me maintain
                  high-quality standards while adapting to emerging technologies
                  and client needs.
                </p>

                <p className="mb-8">
                  Driven by a passion for solving real-world problems, I focus
                  on building systems that address actual business challenges.
                  My approach combines technical development with business
                  process automation, delivering solutions that enhance
                  efficiency and operate independently. When presented with a
                  need, I prefer developing custom solutions rather than
                  settling for existing options that don&apos;t fully address the
                  requirements.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Education
                </h2>
                <div className="space-y-4 mb-8">
                  {education.map((edu, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{edu.institution}</h3>
                        <p className="text-default-600 text-sm">{edu.degree}</p>
                      </div>
                      <Chip size="sm" variant="flat">
                        {edu.years}
                      </Chip>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Certifications
                </h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {certificates.map((cert, index) => (
                    <Chip key={index} color="secondary" variant="flat">
                      {cert}
                    </Chip>
                  ))}
                </div>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Development Approach
                </h2>
                <p className="mb-4">
                  My development philosophy centers on creating practical
                  solutions that solve real business problems. I believe in
                  building systems that not only meet current requirements but
                  are also maintainable and adaptable to future needs.
                </p>

                <p className="mb-4">
                  I take advantage of modern development tools and approaches,
                  including AI-assisted coding, to accelerate development while
                  maintaining high quality. This allows me to focus on
                  architecture, user experience, and business logic rather than
                  repetitive coding tasks.
                </p>

                <p className="mb-4">
                  Every development project I undertake follows these core
                  principles:
                </p>

                <ul className="mb-4 list-disc pl-5 space-y-2">
                  <li>
                    <strong>User-Centered Design:</strong> Solutions that
                    prioritize user needs and experience
                  </li>
                  <li>
                    <strong>Clean, Maintainable Code:</strong> Well-organized
                    architecture with thorough documentation
                  </li>
                  <li>
                    <strong>Full Integration:</strong> Seamless connections
                    between hardware and software components
                  </li>
                  <li>
                    <strong>Automation:</strong> Reducing manual processes
                    through intelligent system design
                  </li>
                  <li>
                    <strong>Future-Proofing:</strong> Scalable architectures
                    that can adapt to changing requirements
                  </li>
                </ul>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Tech Diversity
                </h2>
                <p className="mb-4">
                  My projects span multiple domains and technologies, from IoT
                  systems and mobile applications to data science and machine
                  learning implementations. This technical diversity allows me
                  to approach problems from various angles and select the most
                  appropriate technologies for each specific challenge.
                </p>
                <p className="mb-4">
                  While my primary focus is on full-stack development with
                  Flutter, React, and cloud databases, I also work with Python
                  for ML projects, specialized hardware integrations, and custom
                  business tools.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  Beyond Coding
                </h2>
                <p className="mb-4">
                  When I&apos;m not developing software or integrating IoT
                  devices, I enjoy exploring new technologies, contributing to
                  open-source projects, and continuously expanding my skill set
                  through online courses and technical challenges.
                </p>

                <p>
                  I&apos;m also interested in 3D modeling with Fusion 360, which
                  complements my IoT work by allowing me to design and visualize
                  hardware components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
