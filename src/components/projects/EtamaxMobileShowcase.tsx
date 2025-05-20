// src/components/projects/EtamaxMobileShowcase.tsx
import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";
import { DeviceMockup } from "../mockups/DeviceMockup";
import { useImageCarousel, Screenshot } from "@/hooks/useImageCarousel";

// Define the screenshots with both paths
const mobileScreenshots: Screenshot[] = [
  {
    id: "mobile1",
    name: "Home Screen",
    path: "/images/etamax-mobile1.jpg",
    webpPath: "/images/etamax-mobile1.webp",
    description: "Main dashboard showing solar geyser status and energy metrics",
  },
  {
    id: "mobile2",
    name: "Daily Schedule Setting",
    path: "/images/etamax-mobile2.jpg",
    webpPath: "/images/etamax-mobile2.webp",
    description: "Set a custom daily schedule for the geyser to be boosted by grid",
  },
  {
    id: "mobile3",
    name: "Configuration and Leak Status",
    path: "/images/etamax-mobile3.jpg",
    webpPath: "/images/etamax-mobile3.webp",
    description: "Configuration settings and leak detection status",
  },
  {
    id: "mobile4",
    name: "Settings",
    path: "/images/etamax-mobile4.jpg",
    webpPath: "/images/etamax-mobile4.webp",
    description: "Modify device settings and preferences",
  },
];

export const EtamaxMobileShowcase: React.FC = () => {
  // Use modal disclosure hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Use our custom image carousel hook
  const { 
    currentIndex, 
    currentScreenshot, 
    goToNext, 
    goToPrev, 
    goToIndex 
  } = useImageCarousel(mobileScreenshots, { 
    modalState: { isOpen } 
  });

  const currentImagePath = currentScreenshot.webpPath || currentScreenshot.path;

  return (
    <>
      <Card className="overflow-hidden h-full">
        <CardBody className="flex flex-col items-center justify-center p-4 relative bg-ash-gray-900 dark:bg-rich-black-600">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />
          
          {/* Mobile mockup */}
          <div 
            aria-label="View full screen mobile screenshot"
            className="relative z-10 cursor-pointer transition-transform hover:scale-[1.02] duration-300"
            role="button"
            tabIndex={0}
            onClick={onOpen}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onOpen();
              }
            }}
          >
            <DeviceMockup
              alt={`Etamax Mobile App - ${currentScreenshot.name}`}
              image={currentImagePath}
              type="phone"
            />
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute inset-x-0 top-1/2 flex justify-between px-2 -translate-y-1/2 pointer-events-none z-20">
            <button
              aria-label="Previous screenshot"
              className="rounded-full w-8 h-8 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
              onClick={goToPrev}
            >
              <span className="text-lg font-bold" aria-hidden="true">←</span>
            </button>
            <button
              aria-label="Next screenshot"
              className="rounded-full w-8 h-8 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cerulean-500"
              onClick={goToNext}
            >
              <span className="text-lg font-bold" aria-hidden="true">→</span>
            </button>
          </div>
        </CardBody>
      </Card>
      
      {/* Pagination indicators */}
      <div
        aria-label="Screenshot pagination"
        className="flex justify-center gap-1.5 mt-3"
        role="group"
      >
        {mobileScreenshots.map((_, index) => (
          <button
            key={index}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Go to screenshot ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-cerulean-500 ${
              index === currentIndex
                ? "bg-cerulean w-4"
                : "bg-default-300 dark:bg-rich-black-300"
            }`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>

      {/* Lightbox Modal for enlarged view */}
      <Modal
        backdrop="blur"
        className="px-2"
        isOpen={isOpen}
        size="5xl"
        onClose={onClose}
        aria-labelledby="mobile-screenshot-modal-title"
      >
        <ModalContent>
          <ModalBody className="p-0 overflow-hidden">
            <div className="relative">
              {/* Hidden title for screen readers */}
              <h2 id="mobile-screenshot-modal-title" className="sr-only">
                {`Etamax Mobile App - ${currentScreenshot.name}`}
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
                alt={`Etamax Mobile App - ${currentScreenshot.name}`}
                className="w-full object-contain max-h-[80vh]"
                src={currentImagePath}
              />

              {/* Screenshot name and description */}
              <div className="absolute bottom-4 left-0 right-0 mx-auto max-w-3xl bg-white/80 dark:bg-rich-black-500/80 backdrop-blur-sm p-3 rounded-lg text-center">
                <h3 className="font-bold text-lg">{currentScreenshot.name}</h3>
                <p className="text-sm">{currentScreenshot.description}</p>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};