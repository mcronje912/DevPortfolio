// src/components/projects/ReactQuizShowcase.tsx
import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";

import { DeviceMockup } from "../mockups/DeviceMockup";

// Define the screenshots with descriptions
const quizScreenshots = [
  {
    id: "splash",
    name: "Splash Screen",
    path: "/images/projects/react-quiz/mobile/splash.png",
    description:
      "App launch screen featuring the ReaQt logo, app name, and tagline 'Compile your React skills' with a loading status indicator.",
  },
  {
    id: "dashboard",
    name: "Topics Dashboard",
    path: "/images/projects/react-quiz/mobile/dashboard.png",
    description:
      "Main dashboard showing available React topics organized by difficulty levels with progress indicators for each topic.",
  },
  {
    id: "progress",
    name: "Progress Tracking",
    path: "/images/projects/react-quiz/mobile/progress.png",
    description:
      "User progress overview showing completion metrics, achievement badges, and progress by difficulty level.",
  },
  {
    id: "concept-map",
    name: "Concept Map",
    path: "/images/projects/react-quiz/mobile/concept-map.png",
    description:
      "Visual representation of React concepts organized by difficulty level with brief descriptions.",
  },
  {
    id: "navigation",
    name: "Concept Navigation",
    path: "/images/projects/react-quiz/mobile/navigation.png",
    description:
      "Side navigation showing the hierarchical organization of React concepts with expandable categories.",
  },
  {
    id: "quiz-correct",
    name: "Quiz Question (Correct)",
    path: "/images/projects/react-quiz/mobile/quiz-correct.png",
    description:
      "Quiz interface showing a correctly answered question about React Hooks with syntax-highlighted code example.",
  },
  {
    id: "quiz-code",
    name: "Quiz Question (Code)",
    path: "/images/projects/react-quiz/mobile/quiz-code.png",
    description:
      "Complex quiz question about Forms & Controlled Components featuring a detailed code example with syntax highlighting.",
  },
];

export const ReactQuizShowcase: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = React.useState(
    quizScreenshots[0].id,
  );

  const currentScreenshot =
    quizScreenshots.find((s) => s.id === selectedScreenshot) ||
    quizScreenshots[0];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6">
        React Quiz App Showcase
      </h2>

      <div className="mb-8">
        <Tabs
          aria-label="App screenshots"
          color="primary"
          selectedKey={selectedScreenshot}
          variant="underlined"
          onSelectionChange={(key) => setSelectedScreenshot(key as string)}
        >
          {quizScreenshots.map((screenshot) => (
            <Tab key={screenshot.id} title={screenshot.name} />
          ))}
        </Tabs>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardBody className="flex flex-col items-center justify-center p-8 bg-ash-gray-900 dark:bg-rich-black-600">
              <DeviceMockup
                alt={currentScreenshot.name}
                image={currentScreenshot.path}
                type="phone"
              />
            </CardBody>
          </Card>
        </div>

        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardBody>
              <h3 className="text-xl font-heading font-bold mb-4">
                {currentScreenshot.name}
              </h3>
              <p className="text-default-700 mb-6">
                {currentScreenshot.description}
              </p>

              <div className="mb-6">
                <h4 className="font-medium mb-2">Key App Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Interactive quizzes with code examples and explanations
                  </li>
                  <li>Progress tracking and achievement system</li>
                  <li>Comprehensive concept map of React topics</li>
                  <li>Organized learning path from beginner to advanced</li>
                  <li>Syntax highlighting for code examples</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Technical Highlights:</h4>
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