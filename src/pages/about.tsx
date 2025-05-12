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

  return (
    <DefaultLayout>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left column - Contact info and language cards */}
            <div className="w-full md:w-1/3">
              <div className="sticky top-24">
                {/* Contact Information Card with Profile Image inside */}
                <Card className="mb-6 overflow-hidden">
                  <CardBody className="p-0">
                    {/* Profile image at top of card */}
                    <div className="w-full bg-cerulean-900/10 dark:bg-cerulean-700/20 p-4">
                      <ProfileImage
                        className="mx-auto rounded-lg overflow-hidden"
                        effectVariant="subtle"
                        size="xs"
                      />
                    </div>
                    
                    {/* Contact information below image */}
                    <div className="p-5">
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
                        {/* Phone number removed as requested */}
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
                          <Chip color="primary" size="sm" variant="flat">English</Chip>
                          <Chip color="primary" size="sm" variant="flat">Afrikaans</Chip>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Beginner:</span>
                        <Chip color="default" size="sm" variant="flat">Italian</Chip>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

            {/* Right column - About content (exactly as provided in your file) */}
            <div className="w-full md:w-2/3">
              <h1 className={title({ size: "lg", class: "mb-6" })}>About Me</h1>

              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">Professional Overview</h2>
                <p className="text-lg mb-4">
                  As a <strong>Full Stack Developer</strong>, I create comprehensive software solutions that solve real business challenges across web, mobile, and cloud platforms. My passion lies in building systems that handle real-time data effectively, creating responsive applications that deliver immediate value to users.
                </p>
                
                <p className="mb-6">
                  I&apos;m comfortable working throughout the entire development stack—from crafting intuitive user interfaces to implementing efficient backend systems and database architectures. This versatility allows me to approach projects holistically and select the right technologies for each specific challenge, whether it involves web applications, mobile development, IoT connectivity, or data processing systems.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">Key Achievements</h2>
                <p className="mb-4">
                  At Joint Ventures Electronic Services, I identified a critical opportunity when our team was struggling with a legacy application. Taking initiative, I developed a comprehensive <strong>cross-platform mobile application using Flutter</strong> that integrated with proprietary hardware through BLE communications.
                </p>

                <p className="mb-6">
                  The solution was so effective that management decided to replace their original B4A app with my implementation—<strong>improving user experience while eliminating external development costs</strong>. This transformation showcased my ability to recognize opportunities and execute solutions that exceed expectations.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">Technical Expertise</h2>
                <p className="mb-2">My technical skills encompass:</p>
                <ul className="mb-6 list-disc pl-5 space-y-1">
                  <li><strong>Mobile & Web Development</strong>: Building cross-platform applications with Flutter and responsive web interfaces with React and TypeScript</li>
                  <li><strong>Database & Cloud Systems</strong>: Designing efficient data architectures and implementing real-time synchronization using Firebase, Supabase, and similar technologies</li>
                  <li><strong>Serverless Functions</strong>: Developing cloud functions for automated business processes, data transformations, and system integrations without requiring dedicated server infrastructure</li>
                  <li><strong>API Development</strong>: Creating robust interfaces between systems, including RESTful services and real-time communication protocols</li>
                  <li><strong>Integration Solutions</strong>: Connecting software systems with various platforms, devices, and third-party services to create cohesive solutions</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold mb-4">Professional Background</h2>
                <p className="mb-4">
                  Since 2010, I&apos;ve built valuable experience in graphic design, print production management, and digital marketing while managing my company&apos;s digital printing department. This background has developed my eye for visual design, attention to detail, and understanding of business operations.
                </p>
                <p className="mb-6">
                  My experience includes developing automated workflows that increased production efficiency, implementing technical systems for tracking production status, and executing digital marketing strategies including website optimization and targeted campaigns. These skills have proven highly transferable to software development, particularly in understanding user requirements and designing intuitive interfaces.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">Development Philosophy</h2>
                <p className="mb-2">My approach centers on creating practical solutions for real business problems:</p>
                <ul className="mb-6 list-disc pl-5 space-y-1">
                  <li><strong>Problem-First Thinking</strong>: Thoroughly understanding challenges before developing solutions</li>
                  <li><strong>User-Centered Design</strong>: Creating systems that prioritize intuitive user experiences</li>
                  <li><strong>Clean, Maintainable Code</strong>: Building well-organized architectures with clear documentation</li>
                  <li><strong>Business-Focused Outcomes</strong>: Focusing on solutions that deliver measurable value</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold mb-4">Technical Versatility</h2>
                <p className="mb-4">
                  My projects span multiple domains—from IoT systems and mobile applications to data science implementations. This versatility allows me to approach problems holistically and select the most appropriate technologies for each specific challenge.
                </p>
                <p className="mb-6">
                  While primarily focused on full-stack development with Flutter, React, and cloud databases, I also work with Python for specialized integrations and custom business tools.
                </p>

                <h2 className="text-2xl font-heading font-bold mb-4">Education & Certifications</h2>
                <p className="mb-2">I hold a Certificate in Media Design Technology from Damelin (2003-2004) and continuously expand my skills through professional certifications:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {certificates.map((cert, index) => (
                    <Chip key={index} color="secondary" variant="flat">
                      {cert}
                    </Chip>
                  ))}
                </div>

                <h2 className="text-2xl font-heading font-bold mb-4">Beyond Code</h2>
                <p className="mb-4">
                  When not developing software or integrating IoT devices, I enjoy exploring emerging technologies and expanding my skill set through continuous learning. I&apos;m also passionate about 3D modeling with Fusion 360, which complements my IoT work by allowing me to visualize hardware components and their interactions with software systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}