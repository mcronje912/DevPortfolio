// src/components/projects/LicensePlateShowcase.tsx
import React, { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";
import { DeviceMockup } from "../mockups/DeviceMockup";

// Define license plate screenshots
const licensePlateScreenshots = [
  {
    id: "lic1",
    path: "/images/lic-1.webp",
  },
  {
    id: "lic2",
    path: "/images/lic-2.webp",
  },
  {
    id: "lic3",
    path: "/images/lic-3.webp",
  }
];

export const LicensePlateShowcase: React.FC = () => {
  // State for the current screenshot index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Lightbox state
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Navigation functions for screenshots
  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % licensePlateScreenshots.length);
  };
  
  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => 
      prev === 0 ? licensePlateScreenshots.length - 1 : prev - 1
    );
  };
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6">
        License Plate Recognition Showcase
      </h2>
      
      <div className="relative">
        <Card className="mb-8 overflow-hidden">
          <CardBody className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
            {/* Beautiful gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />
            
            {/* Mockup with click handler - styled like the auction page */}
            <div 
              className="relative z-10 w-full max-w-4xl mx-auto cursor-pointer transition-transform hover:scale-[1.01] duration-300"
              onClick={onOpen}
              role="button"
              tabIndex={0}
              aria-label="Open fullscreen view of license plate recognition system"
            >
              <DeviceMockup
                alt="License Plate Recognition System"
                image={licensePlateScreenshots[currentIndex].path}
                type="laptop"
                className="w-full"
              />
            </div>

            {/* Navigation arrows */}
            <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2 pointer-events-none z-20">
              <button
                aria-label="Previous screenshot"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                onClick={goToPrev}
              >
                <span className="text-xl font-bold">←</span>
              </button>
              <button
                aria-label="Next screenshot"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                onClick={goToNext}
              >
                <span className="text-xl font-bold">→</span>
              </button>
            </div>
          </CardBody>
        </Card>

        {/* Pagination indicators */}
        <div
          aria-label="Screenshot pagination"
          className="flex justify-center gap-2 mb-10"
          role="group"
        >
          {licensePlateScreenshots.map((_, index) => (
            <button
              key={index}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Go to screenshot ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-cerulean w-5"
                  : "bg-default-300 dark:bg-rich-black-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-default-50">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Computer Vision Pipeline
            </h3>
            <p className="text-default-700">
              The system implements a sophisticated image processing pipeline that handles various lighting conditions and angles. It first preprocesses images to enhance features, then uses advanced detection algorithms to locate and isolate license plate regions before performing OCR.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-default-50">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Text Validation & Correction
            </h3>
            <p className="text-default-700">
              Recognition accuracy is enhanced through a custom text correction system that validates detected characters against known license plate patterns. The system can merge fragmented text detections and filter out improbable character combinations.
            </p>
          </CardBody>
        </Card>
      </div>
      
      {/* Lightbox Modal for enlarged view */}
      <Modal
        backdrop="blur"
        className="px-2"
        isOpen={isOpen}
        size="5xl"
        onClose={onClose}
      >
        <ModalContent>
          <ModalBody className="p-0 overflow-hidden">
            <div className="relative">
              {/* Close button */}
              <button
                aria-label="Close fullscreen view"
                className="absolute top-4 right-4 z-50 bg-white/80 dark:bg-rich-black-500/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-rich-black-400 transition-colors"
                onClick={onClose}
              >
                <svg
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
                alt="License Plate Recognition Screenshot"
                className="w-full object-contain max-h-[80vh]"
                src={licensePlateScreenshots[currentIndex].path}
              />
              
              {/* Navigation in lightbox */}
              <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2">
                <button
                  aria-label="Previous screenshot (fullscreen)"
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md hover:bg-white transition-colors"
                  onClick={goToPrev}
                >
                  <span className="text-2xl font-bold">←</span>
                </button>
                <button
                  aria-label="Next screenshot (fullscreen)"
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md hover:bg-white transition-colors"
                  onClick={goToNext}
                >
                  <span className="text-2xl font-bold">→</span>
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};