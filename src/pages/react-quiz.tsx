// src/pages/react-quiz.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { DeviceMockup } from "@/components/mockups/DeviceMockup";
import { useEffect, useRef, useState } from "react";

// Define the screenshots with descriptions
const quizScreenshots = [
  {
    id: "dashboard",
    name: "Topics Dashboard",
    path: "/images/projects/react-quiz/mobile/dashboard.png",
    description: "Main dashboard showing available React topics organized by difficulty levels with progress indicators for each topic."
  },
  {
    id: "progress",
    name: "Progress Tracking",
    path: "/images/projects/react-quiz/mobile/progress.png",
    description: "User progress overview showing completion metrics, achievement badges, and progress by difficulty level."
  },
  {
    id: "concept-map",
    name: "Concept Map",
    path: "/images/projects/react-quiz/mobile/concept-map.png",
    description: "Visual representation of React concepts organized by difficulty level with brief descriptions."
  },
  {
    id: "navigation",
    name: "Concept Navigation",
    path: "/images/projects/react-quiz/mobile/navigation.png",
    description: "Side navigation showing the hierarchical organization of React concepts with expandable categories."
  },
  {
    id: "quiz-correct",
    name: "Quiz Question (Correct)",
    path: "/images/projects/react-quiz/mobile/quiz-correct.png",
    description: "Quiz interface showing a correctly answered question about React Hooks with syntax-highlighted code example."
  },
  {
    id: "quiz-code",
    name: "Quiz Question (Code)",
    path: "/images/projects/react-quiz/mobile/quiz-code.png",
    description: "Complex quiz question about Forms & Controlled Components featuring a detailed code example with syntax highlighting."
  }
];

// ReactQuizShowcase component with simplified navigation
const ReactQuizShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabContainerRef = useRef<HTMLDivElement>(null);
  
  const currentScreenshot = quizScreenshots[currentIndex];
  
  // Navigation functions
  const goToNext = () => {
    if (currentIndex < quizScreenshots.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };
  
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };
  
  // Scroll the active tab into view when currentIndex changes
  useEffect(() => {
    if (tabContainerRef.current) {
      const activeTab = tabContainerRef.current.querySelector(`[data-active="true"]`);
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6">App Showcase</h2>
      
      {/* Custom tabs with better mobile support */}
      <div 
        className="mb-8 overflow-x-auto scrollbar-hide" 
        ref={tabContainerRef}
      >
        <div className="flex space-x-2 pb-2 min-w-max">
          {quizScreenshots.map((screenshot, index) => (
            <button
              key={screenshot.id}
              onClick={() => setCurrentIndex(index)}
              data-active={index === currentIndex}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-cerulean-300 dark:bg-cerulean-600 text-rich-black-900 dark:text-white font-medium'
                  : 'bg-default-100 dark:bg-rich-black-300 text-default-700 dark:text-default-400 hover:bg-default-200 dark:hover:bg-rich-black-200'
              }`}
              aria-pressed={index === currentIndex}
            >
              {screenshot.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Device mockup and info - simplified without swipe */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 relative">
          <Card className="h-full">
            <CardBody className="flex flex-col items-center justify-center p-8 bg-ash-gray-900 dark:bg-rich-black-600">
              <DeviceMockup
                alt={currentScreenshot.name}
                image={currentScreenshot.path}
                type="phone"
              />
              
              {/* Navigation arrows */}
              <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2 pointer-events-none">
                <button 
                  onClick={goToPrev}
                  disabled={currentIndex === 0}
                  className={`rounded-full w-8 h-8 flex items-center justify-center bg-white/80 shadow-md pointer-events-auto ${
                    currentIndex === 0 ? 'opacity-0' : 'opacity-100'
                  }`}
                  aria-label="Previous screenshot"
                >
                  <span className="text-xl font-bold text-rich-black">←</span>
                </button>
                <button 
                  onClick={goToNext}
                  disabled={currentIndex === quizScreenshots.length - 1}
                  className={`rounded-full w-8 h-8 flex items-center justify-center bg-white/80 shadow-md pointer-events-auto ${
                    currentIndex === quizScreenshots.length - 1 ? 'opacity-0' : 'opacity-100'
                  }`}
                  aria-label="Next screenshot"
                >
                  <span className="text-xl font-bold text-rich-black">→</span>
                </button>
              </div>
              
              {/* Pagination indicators - FIXED for light mode visibility */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5" role="group" aria-label="Screenshot pagination">
                {quizScreenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all border border-white/50 ${
                      index === currentIndex 
                        ? 'bg-cerulean-300 w-4 border-cerulean-300' 
                        : 'bg-gray-500/50'
                    }`}
                    aria-label={`Go to screenshot ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : "false"}
                  />
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
        
        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardBody>
              <h3 className="text-xl font-heading font-bold mb-4">{currentScreenshot.name}</h3>
              <p className="text-default-700 mb-6">{currentScreenshot.description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Interactive quizzes with code examples and explanations</li>
                  <li>Progress tracking and achievement system</li>
                  <li>Comprehensive concept map of React topics</li>
                  <li>Organized learning path from beginner to advanced</li>
                  <li>Syntax highlighting for code examples</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Technical Implementation:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Built with Flutter for cross-platform support</li>
                  <li>Offline functionality for learning anywhere</li>
                  <li>Adaptive quiz difficulty based on user performance</li>
                  <li>Clean, modern UI with syntax highlighting</li>
                  <li>Comprehensive progress tracking system</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

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
                      Gen AI
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

          {/* App Showcase Section */}
          <ReactQuizShowcase />

          {/* Key Features section - Expanded with more detail */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          {/* Development Approach section - Now including testing */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Development Approach & Testing
            </h2>
            <div className="prose max-w-none text-default-700 mb-6">
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
              
              <h3 className="text-xl font-heading font-bold mt-6 mb-3">Comprehensive Testing Strategy</h3>
              <p className="mb-4">
                To ensure the app delivered a reliable educational experience, I implemented multiple levels of testing throughout the development process:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Unit Testing
                  </h3>
                  <p className="text-default-700">
                    I created comprehensive tests for all model classes and utility functions to verify data parsing, calculation logic, and recommendation algorithms functioned correctly in isolation.
                  </p>
                </CardBody>
              </Card>
              
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Integration Testing
                  </h3>
                  <p className="text-default-700">
                    Tests verified that providers correctly interacted with database services, ensuring proper data relationships between questions, topics, and user progress.
                  </p>
                </CardBody>
              </Card>
              
              <Card className="bg-default-50">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    UI & Quiz Logic Testing
                  </h3>
                  <p className="text-default-700">
                    Widget tests ensured UI components rendered correctly, while
                    specialized tests validated the quiz engine&apos;s answer
                    validation, option shuffling, and drag-and-drop
                    functionality.
                  </p>
                </CardBody>
              </Card>
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