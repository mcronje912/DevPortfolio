// src/pages/skills.tsx
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { GlassCard } from "@/components/GlassCard";

// src/pages/skills.tsx - Matrix Approach
// src/pages/skills.tsx - Core Competencies Approach
export default function SkillsPage() {
  // Core competencies highlighted separately
  const coreCompetencies = [
    {
      name: "Flutter/Dart",
      description:
        "Cross-platform mobile app development with hardware integration",
      icon: "📱",
    },
    {
      name: "React.js",
      description:
        "Interactive web applications with modern component patterns",
      icon: "🖥️",
    },
    {
      name: "Node.js",
      description: "Backend services and API development",
      icon: "🔄",
    },
    {
      name: "Supabase/PostgreSQL",
      description: "Cloud database with real-time capabilities",
      icon: "☁️",
    },
    {
      name: "Serverless Functions",
      description: "Event-driven cloud computing for scalable applications",
      icon: "⚡",
    },
    {
      name: "IoT Integration",
      description:
        "Connecting software with hardware through secure communication protocols",
      icon: "🔗",
    },
  ];

  // Expanded skill categories
  const skillCategories = [
    {
      name: "Mobile Development",
      skills: [
        "Flutter/Dart",
        "BLE Integration",
        "App Store Deployment",
        "Cross-Platform Development",
        "UI/UX for Mobile",
      ],
    },
    {
      name: "Web Development",
      skills: [
        "React.js",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HeroUI Components",
        "Responsive Design",
      ],
    },
    {
      name: "Backend & Cloud",
      skills: [
        "Node.js/Express",
        "Supabase/Firebase",
        "PostgreSQL",
        "RESTful APIs",
        "Serverless Functions",
        "Google Cloud Platform",
        "Django",
        "Fast API",
      ],
    },
    {
      name: "IoT & Hardware",
      skills: [
        "ESP32/STM32 Programming",
        "BLE Communication Protocols",
        "AES Encryption",
        "Hardware Prototyping",
        "Firmware Updates",
      ],
    },
    {
      name: "Python & Data",
      skills: [
        "Python",
        "Data Analysis",
        "Computer Vision",
        "OCR Implementation",
        "Data Visualization",
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        "Git/GitHub",
        "CI/CD",
        "Docker",
        "Vercel/Netlify",
        "App Store Submission",
      ],
    },
  ];

  return (
    <DefaultLayout>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10">
            <h1 className={title({ size: "lg" })}>Skills & Expertise</h1>
            <p className="text-default-600 mt-4 max-w-2xl mx-auto">
              From mobile apps to IoT systems, I develop practical solutions
              across the entire technology stack.
            </p>
          </div>

          {/* Core Competencies Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreCompetencies.map((skill) => (
                <GlassCard key={skill.name} intensity="heavy">
                  <CardBody className="text-center p-5">
                    <div className="text-3xl mb-3">{skill.icon}</div>
                    <h3 className="font-heading font-bold text-lg mb-2">{skill.name}</h3>
                    <p className="text-sm text-default-600">{skill.description}</p>
                  </CardBody>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Skills Categorization */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Technical Toolkit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <GlassCard key={category.name} intensity="medium">
                  <CardBody>
                    <h3 className="font-heading font-bold text-xl mb-4">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Chip key={skill} color="primary" variant="flat">
                          {skill}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* R&D and Prototyping Section */}
          <GlassCard className="mb-12" intensity="light">
            <CardBody>
              <h2 className="text-2xl font-heading font-bold mb-3">
                R&D and Prototyping
              </h2>
              <p className="text-default-700 mb-4">
                A significant part of my role involves bridging software and
                hardware through research, development, and rapid prototyping. I
                collaborate with electronic engineers to develop products and
                integrate software with proprietary hardware, enabling
                innovative solutions that combine digital interfaces with
                physical devices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-cerulean-50/20 dark:bg-cerulean-900/20 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">
                    Hardware Integration
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>ESP32/STM32 microcontroller programming</li>
                    <li>Communication protocols (BLE, WiFi, MQTT)</li>
                    <li>Secure data transmission with AES encryption</li>
                    <li>Firmware development and OTA updates</li>
                  </ul>
                </div>

                <div className="bg-cerulean-50/20 dark:bg-cerulean-900/20 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">
                    Prototyping Process
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Rapid application development</li>
                    <li>Proof-of-concept implementations</li>
                    <li>Testing and validation methodologies</li>
                    <li>Iterative design and feedback incorporation</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </GlassCard>

          {/* Learning Philosophy */}
          <Card className="mb-12 bg-gradient-to-r from-cerulean-50/80 to-verdigris-50/80 dark:from-cerulean-900/20 dark:to-verdigris-900/20 border-0 shadow-md overflow-hidden">
            <CardBody className="p-6">
              <h2 className="text-xl font-heading font-bold mb-3">
                Continuous Learning
              </h2>
              <p className="text-default-700 mb-4">
                I view software development as a continuous learning journey,
                focusing on practical application and problem-solving rather
                than claiming mastery. I expand my toolkit through projects,
                courses, and experimentation with new technologies to deliver
                increasingly effective solutions.
              </p>
              <div className="mt-4">
                <h3 className="font-medium mb-2">Currently focusing on:</h3>
                <div className="flex flex-wrap gap-2">
                  <Chip color="primary" variant="flat">
                    Docker
                  </Chip>
                  <Chip color="primary" variant="flat">
                    CI/CD Pipelines
                  </Chip>
                  <Chip color="primary" variant="flat">
                    Advanced React Patterns
                  </Chip>
                  <Chip color="primary" variant="flat">
                    Testing Strategies
                  </Chip>
                  <Chip color="primary" variant="flat">
                    LoRaWAN
                  </Chip>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
