// src/components/projects/EtamaxWebShowcase.tsx
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";

// Import DeviceMockup but we'll handle WebP manually
import { DeviceMockup } from "../mockups/DeviceMockup";

// Define admin dashboard screenshots
// src/components/projects/EtamaxWebShowcase.tsx
// Update web screenshots with correct paths
const webScreenshots = [
  {
    id: "web1",
    name: "Historical Data",
    path: "/images/etamax-web1.png", // Updated path
    webpPath: "/images/etamax-web1.webp", // Updated path
    description: "Historical data and performance summary section",
  },
  {
    id: "web2",
    name: "Overview Dashboard",
    path: "/images/etamax-web2.png", // Updated path
    webpPath: "/images/etamax-web2.webp", // Updated path
    description:
      "Recent activity and Provincial summary of collective device performance",
  },
  {
    id: "web3",
    name: "Device Detail Page",
    path: "/images/etamax-web3.png", // Updated path
    webpPath: "/images/etamax-web3.webp", // Updated path
    description:
      "Detailed device and user information, including alerts and notifications",
  },
];

export const EtamaxWebShowcase: React.FC = () => {
  // State for the admin images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [useWebP, setUseWebP] = useState(true);

  // Lightbox state
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Check if WebP images exist on mount
  useEffect(() => {
    const checkWebPSupport = async () => {
      try {
        // Check if browser supports WebP
        const webpSupported =
          document
            .createElement("canvas")
            .toDataURL("image/webp")
            .indexOf("data:image/webp") === 0;

        if (!webpSupported) {
          setUseWebP(false);

          return;
        }

        // Try to fetch one WebP image to confirm they exist
        const testUrl = webScreenshots[0].webpPath;
        const response = await fetch(testUrl, { method: "HEAD" });

        if (!response.ok) {
          console.log("WebP images not available, using originals");
          setUseWebP(false);
        } else {
          console.log("WebP images available and will be used");
        }
      } catch (error) {
        console.error("Error checking WebP support:", error);
        setUseWebP(false);
      }
    };

    checkWebPSupport();
  }, []);

  // Navigation functions for admin screenshots
  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % webScreenshots.length);
  };

  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? webScreenshots.length - 1 : prev - 1,
    );
  };

  const currentScreenshot = webScreenshots[currentIndex];
  const currentImagePath = useWebP
    ? currentScreenshot.webpPath
    : currentScreenshot.path;

  return (
    <div className="mb-12">
      <div className="relative">
        <Card className="mb-8 overflow-hidden">
          <CardBody className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
            {/* Beautiful gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />

            {/* Mockup with click handler */}
            <div
              aria-label="Open fullscreen view of admin dashboard"
              className="relative z-10 w-full max-w-4xl mx-auto cursor-pointer transition-transform hover:scale-[1.01] duration-300"
              role="button"
              tabIndex={0}
              onClick={onOpen}
            >
              <DeviceMockup
                alt={`Etamax Web Dashboard - ${currentScreenshot.name}`}
                className="w-full"
                image={currentImagePath}
                type="laptop"
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

        {/* Admin pagination indicators */}
        <div
          aria-label="Admin screenshot pagination"
          className="flex justify-center gap-2 mb-6"
          role="group"
        >
          {webScreenshots.map((_, index) => (
            <button
              key={index}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Go to admin screenshot ${index + 1}`}
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
                alt={`Etamax Web Dashboard - ${currentScreenshot.name}`}
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
    </div>
  );
};
