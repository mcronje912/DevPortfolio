// src/components/projects/EmotionDetectionShowcase.tsx
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";
import { DeviceMockup } from "../mockups/DeviceMockup";
import { GlassCard } from "../GlassCard";

// Define the screenshots
const nlpScreenshots = [
  {
    id: "nlp1",
    name: "NLP Interface",
    path: "/images/nlp1.webp",
  },
  {
    id: "nlp2",
    name: "Emotion Analysis",
    path: "/images/nlp2.webp",
  },
  {
    id: "nlp3",
    name: "Results Visualization",
    path: "/images/nlp3.webp",
  },
  {
    id: "nlp4",
    name: "Detailed Analysis",
    path: "/images/nlp4.webp",
  },
];

export const EmotionDetectionShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === 'ArrowRight') {
          goToNext();
        } else if (e.key === 'ArrowLeft') {
          goToPrev();
        } else if (e.key === 'Escape') {
          onClose();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, onClose]);

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex < nlpScreenshots.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to first image
    }
  };

  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(nlpScreenshots.length - 1); // Loop to last image
    }
  };

  const currentScreenshot = nlpScreenshots[currentIndex];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6">
        Emotion Detection Showcase
      </h2>

      <div className="relative">
        <Card className="mb-8 overflow-hidden">
          <CardBody className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
            {/* Updated gradient background as requested */}
            <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />

            {/* Mockup with click handler */}
            <button
              aria-label="Open fullscreen view of emotion detection application"
              className="relative z-10 w-full max-w-4xl mx-auto cursor-pointer transition-transform hover:scale-[1.01] duration-300 border-0 p-0 bg-transparent focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
              onClick={onOpen}
            >
              <DeviceMockup
                alt={currentScreenshot.name}
                className="w-full"
                image={currentScreenshot.path}
                type="laptop"
              />
            </button>

            {/* Navigation arrows */}
            <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2 pointer-events-none z-20">
              <button
                aria-label="Previous screenshot"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
                onClick={goToPrev}
              >
                <span className="text-xl font-bold" aria-hidden="true">←</span>
              </button>
              <button
                aria-label="Next screenshot"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
                onClick={goToNext}
              >
                <span className="text-xl font-bold" aria-hidden="true">→</span>
              </button>
            </div>
          </CardBody>
        </Card>

        {/* Pagination indicators */}
        <div
          aria-label="Screenshot pagination"
          className="flex justify-center gap-2 mb-6"
          role="group"
        >
          {nlpScreenshots.map((_, index) => (
            <button
              key={index}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Go to screenshot ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-cerulean-500 ${
                index === currentIndex
                  ? "bg-cerulean w-5"
                  : "bg-default-300 dark:bg-rich-black-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Key features section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Key Features:
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Multi-emotion detection across five primary emotions</li>
              <li>Real-time text analysis with instant results</li>
              <li>Graphical visualization of emotion probabilities</li>
              <li>Dominant emotion identification</li>
              <li>Privacy-focused design with local processing</li>
            </ul>
          </CardBody>
        </GlassCard>

        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Technical Implementation:
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Built with Python, Flask, and Hugging Face transformers</li>
              <li>Custom implementation using local NLP models</li>
              <li>Alternative to Watson NLP providing better privacy</li>
              <li>Comprehensive error handling</li>
              <li>Front-end built with HTML/CSS/JavaScript</li>
            </ul>
          </CardBody>
        </GlassCard>
      </div>

      {/* Lightbox Modal for enlarged view */}
      <Modal
        backdrop="blur"
        className="px-2"
        isOpen={isOpen}
        size="5xl"
        onClose={onClose}
        aria-labelledby="emotion-detection-modal-title"
      >
        <ModalContent>
          <ModalBody className="p-0 overflow-hidden">
            <div className="relative">
              {/* Hidden title for screen readers */}
              <h2 id="emotion-detection-modal-title" className="sr-only">
                {`Emotion Detection Application - ${currentScreenshot.name}`}
              </h2>
              
              {/* Close button */}
              <button
                aria-label="Close fullscreen view"
                className="absolute top-4 right-4 z-50 bg-white/80 dark:bg-rich-black-500/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-rich-black-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
                onClick={onClose}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>

              {/* Large centered image */}
              <img
                alt={currentScreenshot.name}
                className="w-full object-contain max-h-[80vh]"
                src={currentScreenshot.path}
              />

              {/* Navigation in fullscreen */}
              <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2">
                <button
                  aria-label="Previous screenshot (fullscreen)"
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
                  onClick={goToPrev}
                >
                  <span className="text-2xl font-bold" aria-hidden="true">←</span>
                </button>
                <button
                  aria-label="Next screenshot (fullscreen)"
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
                  onClick={goToNext}
                >
                  <span className="text-2xl font-bold" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};