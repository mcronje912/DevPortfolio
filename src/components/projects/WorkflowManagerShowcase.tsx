// src/components/projects/WorkflowManagerShowcase.tsx
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";

import { DeviceMockup } from "../mockups/DeviceMockup";

// Define the screenshots using your actual files
const workflowScreenshots = [
  {
    id: "bm1",
    name: "Dashboard View",
    path: "/images/bm1.webp",
  },
  {
    id: "bm2",
    name: "Materials Management",
    path: "/images/bm2.webp",
  },
  {
    id: "bm3",
    name: "Materials Management, add a new item",
    path: "/images/bm3.webp",
  },
  {
    id: "bm4",
    name: "Layout Optimization",
    path: "/images/bm4.webp",
  },
  {
    id: "bm5",
    name: "PDF Processing",
    path: "/images/bm5.webp",
  },
  {
    id: "bm6",
    name: "Layout Settings",
    path: "/images/bm6.webp",
  },
];

export const WorkflowManagerShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === "ArrowRight") {
          goToNext();
        } else if (e.key === "ArrowLeft") {
          goToPrev();
        } else if (e.key === "Escape") {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, onClose]);

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex < workflowScreenshots.length - 1) {
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
      setCurrentIndex(workflowScreenshots.length - 1); // Loop to last image
    }
  };

  const currentScreenshot = workflowScreenshots[currentIndex];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6">
        Print Quote System Showcase
      </h2>

      <div className="relative">
        <Card className="mb-8 overflow-hidden">
          <CardBody className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
            {/* Updated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />

            {/* Mockup with click handler */}
            <button
              aria-label="Open fullscreen view of print quote system"
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
                <span aria-hidden="true" className="text-xl font-bold">
                  ←
                </span>
              </button>
              <button
                aria-label="Next screenshot"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
                onClick={goToNext}
              >
                <span aria-hidden="true" className="text-xl font-bold">
                  →
                </span>
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
          {workflowScreenshots.map((_, index) => (
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

      {/* Lightbox Modal for enlarged view */}
      <Modal
        aria-labelledby="workflow-modal-title"
        backdrop="blur"
        className="px-2"
        isOpen={isOpen}
        size="5xl"
        onClose={onClose}
      >
        <ModalContent>
          <ModalBody className="p-0 overflow-hidden">
            <div className="relative">
              {/* Hidden title for screen readers */}
              <h2 className="sr-only" id="workflow-modal-title">
                {`Print Quote System - ${currentScreenshot.name}`}
              </h2>

              {/* Close button */}
              <button
                aria-label="Close fullscreen view"
                className="absolute top-4 right-4 z-50 bg-white/80 dark:bg-rich-black-500/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-rich-black-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
                onClick={onClose}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
                  <span aria-hidden="true" className="text-2xl font-bold">
                    ←
                  </span>
                </button>
                <button
                  aria-label="Next screenshot (fullscreen)"
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
                  onClick={goToNext}
                >
                  <span aria-hidden="true" className="text-2xl font-bold">
                    →
                  </span>
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
