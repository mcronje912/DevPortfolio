// src/components/projects/ReactQuizShowcase.tsx
import React, { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { DeviceMockup } from "../mockups/DeviceMockup";

// Define the screenshots with the correct paths from your images directory
const quizScreenshots = [
  "/public/images/dashboard.webp",     // These are directly in the /images/ folder
  "/images/progress.webp",      // Not in /images/projects/react-quiz/mobile/
  "/images/concept-map.webp",
  "/images/navigation.webp",
  "/images/quiz-correct.webp",
  "/images/quiz-code.webp"
];

export const ReactQuizShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % quizScreenshots.length);
  };
  
  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => 
      prev === 0 ? quizScreenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6">
        React Quiz App Showcase
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardBody className="flex flex-col items-center justify-center p-8 bg-ash-gray-900 dark:bg-rich-black-600 relative">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />
              
              <div className="relative z-10">
                <DeviceMockup
                  alt="React Quiz App Screenshot"
                  image={quizScreenshots[currentIndex]}
                  type="phone"
                />
              </div>
              
              {/* Navigation arrows */}
              <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2 pointer-events-none z-20">
                <button
                  aria-label="Previous screenshot"
                  className="rounded-full w-8 h-8 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                  onClick={goToPrev}
                >
                  <span className="text-lg font-bold">←</span>
                </button>
                <button
                  aria-label="Next screenshot"
                  className="rounded-full w-8 h-8 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                  onClick={goToNext}
                >
                  <span className="text-lg font-bold">→</span>
                </button>
              </div>
              
              {/* Pagination indicators */}
              <div
                aria-label="Screenshot pagination"
                className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5"
                role="group"
              >
                {quizScreenshots.map((_, index) => (
                  <button
                    key={index}
                    aria-current={index === currentIndex ? "true" : "false"}
                    aria-label={`Go to screenshot ${index + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-cerulean w-4"
                        : "bg-white/70 dark:bg-rich-black-300/70"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardBody>
              <h3 className="text-xl font-heading font-bold mb-4">
                Key App Features
              </h3>
              
              <div className="mb-6">
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

              <h3 className="text-xl font-heading font-bold mb-4">
                Technical Highlights
              </h3>
              <div>
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