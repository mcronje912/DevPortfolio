// src/pages/react-quiz.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function ReactQuizProjectPage() {
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
              React Learning Quiz App
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                Mobile App
              </Chip>
              <Chip color="primary" variant="flat">
                Education
              </Chip>
              <Chip color="primary" variant="flat">
                Cross-Platform
              </Chip>
            </div>
          </div>

          {/* Image container */}
          <Card className="mb-10 shadow-md overflow-hidden">
            <CardBody className="p-0">
              <div className="bg-gradient-to-br from-cerulean to-verdigris h-80 w-full flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-white text-xl font-medium mb-2">
                    Project Image
                  </p>
                  <p className="text-white-800 text-sm opacity-80">
                    Screenshots coming soon
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Overview section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  The React Learning Quiz App is a comprehensive educational
                  tool designed to help developers strengthen their React
                  knowledge through interactive quizzes and learning materials.
                  Created initially as a personal learning project, it evolved
                  into a polished, feature-rich application available on both
                  iOS and Android platforms.
                </p>
                <p className="mb-4">
                  Built with Flutter for cross-platform functionality, the app
                  demonstrates my approach to educational software design and my
                  ability to take a project from concept to market-ready
                  product.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="secondary" variant="flat">
                      Flutter
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Dart
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Firebase
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Provider
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      App Store
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Google Play
                    </Chip>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Completed
                  </h3>
                  <p>2025</p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    My Role
                  </h3>
                  <p>Lead Mobile Developer</p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Motivation & Background section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Motivation & Background
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                I developed this app with a dual purpose: to deepen my own
                understanding of React concepts through the process of creating
                educational content, and to challenge myself to build something
                better than existing offerings in the market. This project
                reflects my approach to problem-solving—when I identify a need,
                I&apos;m drawn to developing custom solutions rather than settling
                for existing options.
              </p>
              <p className="mb-4">
                The project exemplifies my belief in learning through creation.
                By building a tool to teach others, I strengthened my own
                technical knowledge while producing something valuable for the
                developer community.
              </p>
            </div>
          </div>

          {/* Key Features section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Interactive Learning Experiences
                  </h3>
                  <p className="text-default-700">
                    The app offers diverse question formats including
                    multiple-choice and drag-and-drop interactions. Questions
                    are randomly presented with cooldown periods to encourage
                    genuine learning rather than memorization. The varied
                    interaction types keep users engaged while catering to
                    different learning styles.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Thoughtful Learning Structure
                  </h3>
                  <p className="text-default-700">
                    Content is organized into progressive difficulty levels from
                    beginner to advanced, allowing users to incrementally build
                    their knowledge. Supplementary reading materials provide
                    deeper dives into specific topics, creating a more complete
                    learning resource beyond simple quizzes.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Progress Tracking
                  </h3>
                  <p className="text-default-700">
                    A comprehensive progress tracking system allows users to
                    monitor their advancement through different topics. The 70%
                    passing threshold provides a clear goal for users while
                    encouraging mastery of the material before progressing.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Offline Functionality
                  </h3>
                  <p className="text-default-700">
                    All content is available offline, making the app accessible
                    for learning in any environment without requiring constant
                    internet connectivity—an important consideration for
                    real-world use cases where connectivity may be limited.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Polished User Experience
                  </h3>
                  <p className="text-default-700">
                    The app features subtle animations and transitions that
                    enhance the learning experience without becoming
                    distracting. The interface is designed to be intuitive and
                    accessible while maintaining visual appeal.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Monetization
                  </h3>
                  <p className="text-default-700">
                    Successfully implemented as a premium app with a one-time
                    purchase model on both Apple App Store and Google Play
                    Store, demonstrating end-to-end product development from
                    concept to commercial release.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Technical Implementation section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Technical Implementation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Cross-Platform Development
                  </h3>
                  <p className="text-default-700">
                    Using Flutter allowed me to create a consistent experience
                    across both iOS and Android from a single codebase,
                    demonstrating efficient development practices while
                    maintaining platform-specific quality.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    State Management
                  </h3>
                  <p className="text-default-700">
                    I implemented a robust state management system to handle
                    quiz progression, score tracking, and user preferences,
                    ensuring a seamless experience as users navigate through the
                    application.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Content Management System
                  </h3>
                  <p className="text-default-700">
                    I developed a flexible content structure that allows for
                    easy updates and additions to the question database, making
                    the app maintainable and expandable for future content.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    App Store Integration
                  </h3>
                  <p className="text-default-700">
                    Successfully navigating the requirements for both Apple App
                    Store and Google Play Store, I implemented
                    platform-compliant monetization strategies through one-time
                    purchase options—adding valuable experience with the
                    business aspects of app development.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Development Approach section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Development Approach
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                My approach prioritized building a high-quality, user-focused
                learning tool. For content creation, I leveraged modern AI tools
                to generate educational material, allowing me to focus my
                development time on technical implementation and user experience
                refinement.
              </p>
              <p className="mb-4">
                Each piece of content was carefully curated and verified for
                accuracy before inclusion, ensuring the educational value of the
                app remained high. This approach demonstrates my ability to
                efficiently manage resources while maintaining quality
                standards.
              </p>
            </div>
          </div>

          {/* Outcome section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Outcome & Future Directions
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-4">
                The React Quiz App represents a successful case study in taking
                a project from concept to market. As a relatively new release,
                the app is in its early stages of market presence, with plans to
                gather and incorporate user feedback for future updates.
              </p>
              <p className="mb-4">Potential future enhancements include:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Expanded question database with more advanced topics</li>
                <li>Interactive code challenges with syntax highlighting</li>
                <li>Community features for user-contributed questions</li>
                <li>
                  Enhanced analytics to help users identify knowledge gaps
                </li>
              </ul>
              <p className="mb-4">
                This project demonstrates my capability to independently develop
                and deploy complete, market-ready applications while
                continuously refining my technical and product development
                skills.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex justify-center mt-12">
            <Button
              as={Link}
              className="px-8"
              color="primary"
              href="/contact"
              variant="shadow"
            >
              Discuss Similar Projects
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
