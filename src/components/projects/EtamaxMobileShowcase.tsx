// src/components/projects/EtamaxMobileShowcase.tsx
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";

import { DeviceMockup } from "../mockups/DeviceMockup";

// Define mobile screenshots with both paths
 // src/components/projects/EtamaxMobileShowcase.tsx
// Update the mobile screenshots with correct paths
const mobileScreenshots = [
  {
    id: "mobile1",
    name: "Home Screen",
    path: "/images/etamax-mobile1.jpg", // Updated path
    webpPath: "/images/etamax-mobile1.webp", // Updated path
    description:
      "Main dashboard showing solar geyser status and energy metrics",
  },
  {
    id: "mobile2",
    name: "Daily Schedule Setting",
    path: "/images/etamax-mobile2.jpg", // Updated path
    webpPath: "/images/etamax-mobile2.webp", // Updated path
    description:
      "Set a custom daily schedule for the geyser to be boosted by grid",
  },
  {
    id: "mobile3",
    name: "Configuration and Leak Status",
    path: "/images/etamax-mobile3.jpg", // Updated path
    webpPath: "/images/etamax-mobile3.webp", // Updated path
    description:
      "",
  },
  {
    id: "mobile4",
    name: "Settings",
    path: "/images/etamax-mobile4.jpg", // Updated path
    webpPath: "/images/etamax-mobile4.webp", // Updated path
    description:
      "Modify device settings and preferences",
  },
];

export const EtamaxMobileShowcase: React.FC = () => {
  // State for the mobile images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [useWebP, setUseWebP] = useState(true);

  // Lightbox state
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Check if WebP images exist on mount
  useEffect(() => {
    const checkWebPSupport = async () => {
      try {
        // Check if browser supports WebP
        const webpSupported = document.createElement('canvas')
          .toDataURL('image/webp')
          .indexOf('data:image/webp') === 0;
        
        if (!webpSupported) {
          setUseWebP(false);
          return;
        }
        
        // Try to fetch one WebP image to confirm they exist
        const testUrl = mobileScreenshots[0].webpPath;
        const response = await fetch(testUrl, { method: 'HEAD' });
        
        if (!response.ok) {
          console.log('WebP images not available, using originals');
          setUseWebP(false);
        } else {
          console.log('WebP images available and will be used');
        }
      } catch (error) {
        console.error('Error checking WebP support:', error);
        setUseWebP(false);
      }
    };
    
    checkWebPSupport();
  }, []);

  // Navigation functions for mobile screenshots
  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % mobileScreenshots.length);
  };

  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? mobileScreenshots.length - 1 : prev - 1,
    );
  };

  const currentScreenshot = mobileScreenshots[currentIndex];
  const currentImagePath = useWebP ? currentScreenshot.webpPath : currentScreenshot.path;

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
              aria-label="Previous mobile screenshot"
              className="rounded-full w-8 h-8 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
              onClick={goToPrev}
            >
              <span className="text-lg font-bold">←</span>
            </button>
            <button
              aria-label="Next mobile screenshot"
              className="rounded-full w-8 h-8 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
              onClick={goToNext}
            >
              <span className="text-lg font-bold">→</span>
            </button>
          </div>
        </CardBody>
      </Card>

      {/* Pagination indicators */}
      <div
        aria-label="Mobile screenshot pagination"
        className="flex justify-center gap-1.5 mt-3"
        role="group"
      >
        {mobileScreenshots.map((_, index) => (
          <button
            key={index}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Go to mobile screenshot ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-cerulean w-4"
                : "bg-default-300 dark:bg-rich-black-300"
            }`}
            onClick={() => setCurrentIndex(index)}
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