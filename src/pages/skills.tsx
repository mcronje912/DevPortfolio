// src/pages/skills.tsx
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { SkillCategory } from "@/components/skills/SkillCategory";

export default function SkillsPage() {
  const skillDomains = [
    {
      name: "Mobile Development",
      icon: "📱",
      description:
        "Cross-platform mobile application development with a focus on hardware integration and user experience.",
      skills: [
        {
          name: "Flutter/Dart",
          projects: ["Etamax Solar App", "Logistics System"],
        },
        { name: "BLE Integration", projects: ["Etamax Solar App"] },
        {
          name: "Cross-Platform Development",
          projects: ["React Quiz App", "Invoice Companion"],
        },
        { name: "App Store Deployment", projects: ["React Quiz App"] },
      ],
    },
    {
      name: "Frontend Development",
      icon: "🖥️",
      description:
        "Creating responsive, interactive web experiences with modern frameworks and design principles.",
      skills: [
        {
          name: "React.js",
          projects: ["Auction Platform", "Portfolio Website"],
        },
        {
          name: "TypeScript",
          projects: ["Portfolio Website", "Workflow Manager"],
        },
        { name: "Next.js", projects: ["Auction Platform"] },
        { name: "Tailwind CSS", projects: ["Portfolio Website"] },
        { name: "HeroUI Components", projects: ["Portfolio Website"] },
        { name: "Responsive Design", projects: ["All Web Projects"] },
      ],
    },
    {
      name: "Backend & Data",
      icon: "🗄️",
      description:
        "Building robust data systems and APIs to power applications with real-time capabilities.",
      skills: [
        {
          name: "Supabase/Firebase",
          projects: ["Etamax Solar App", "Auction Platform"],
        },
        { name: "Node.js/Express", projects: ["Auction Platform API"] },
        {
          name: "RESTful APIs",
          projects: ["Logistics System", "Workflow Manager"],
        },
        { name: "PostgreSQL", projects: ["Auction Platform"] },
        { name: "SQLite", projects: ["Invoice Companion"] },
      ],
    },
    {
      name: "Design & Creative",
      icon: "🎨",
      description:
        "Applying over a decade of professional design experience to create intuitive user interfaces and visual identities.",
      skills: [
        { name: "UI/UX Design", projects: ["All Projects"] },
        {
          name: "Adobe Creative Suite",
          projects: ["Print Production", "Brand Development"],
        },
        {
          name: "Brand Development",
          projects: ["Company Website", "Product Branding"],
        },
        {
          name: "Digital Marketing",
          projects: ["Google Ads Campaigns", "Website Optimization"],
        },
        { name: "Print Production", projects: ["Workflow Manager System"] },
      ],
    },
    {
      name: "Project Management",
      icon: "📊",
      description:
        "Leading teams and managing complex workflows with effective communication and resource allocation.",
      skills: [
        {
          name: "Production Workflow Optimization",
          projects: ["Workflow Manager System"],
        },
        { name: "Resource Planning", projects: ["Print Quote System"] },
        { name: "Client Communication", projects: ["All Client Projects"] },
        { name: "Quality Control", projects: ["Print Production Management"] },
      ],
    },
    {
      name: "DevOps & Tools",
      icon: "🛠️",
      description:
        "Deploying and maintaining applications with modern development practices.",
      skills: [
        { name: "Git/GitHub", projects: ["All Software Projects"] },
        { name: "Vercel Deployment", projects: ["Portfolio Website"] },
        { name: "Serverless Functions", projects: ["Etamax Cloud Functions"] },
        { name: "CI/CD", projects: ["Mobile App Deployments"] },
        { name: "Docker", projects: ["Currently Learning"] },
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
              My diverse skill set combines technical development capabilities
              with a strong background in design and production management,
              allowing me to approach problems from multiple perspectives.
            </p>
          </div>

          {/* Learning Philosophy Card */}
          <Card className="mb-12 bg-gradient-to-r from-cerulean-50/80 to-verdigris-50/80 dark:from-cerulean-900/20 dark:to-verdigris-900/20 border-0 shadow-md overflow-hidden">
            <CardBody className="p-6">
              <h2 className="text-xl font-heading font-bold mb-3">
                My Learning Approach
              </h2>
              <p className="text-default-700 mb-4">
                I view software development as a continuous learning journey.
                Rather than claiming mastery, I focus on practical application
                and problem-solving. I&apos;m constantly expanding my toolkit through
                projects, courses, and experimentation with new technologies.
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
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillDomains.map((domain) => (
              <SkillCategory key={domain.name} domain={domain} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
