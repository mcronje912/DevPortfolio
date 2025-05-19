// src/components/projects/AuctionAppShowcase.tsx
import React, { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";

import { DeviceMockup } from "../mockups/DeviceMockup";
import { GlassCard } from "../GlassCard";

// Define the screenshots with WebP paths
const auctionScreenshots = [
  {
    id: "listings",
    name: "Auction Listings",
    path: "/images/auction1.webp",
  },
  {
    id: "product-detail",
    name: "Auction Detail View",
    path: "/images/auction2.webp",
  },
];

export const AuctionAppShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const goToNext = () => {
    if (currentIndex < auctionScreenshots.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to first image
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(auctionScreenshots.length - 1); // Loop to last image
    }
  };

  const currentScreenshot = auctionScreenshots[currentIndex];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6">
        Auction Platform Showcase
      </h2>

      <div className="relative">
        <Card className="mb-8 overflow-hidden">
          <CardBody className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
            {/* Beautiful gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />
            {/* Mockup with click handler */}
            <div 
              className="relative z-10 w-full max-w-4xl mx-auto cursor-pointer transition-transform hover:scale-[1.01] duration-300"
              onClick={onOpen}
              onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                  onOpen();
                  }
              }}
              role="button"
              tabIndex={0}
              aria-label="Open fullscreen view of auction platform"
            >
              <DeviceMockup
                  alt={currentScreenshot.name}
                  image={currentScreenshot.path}
                  type="laptop"
                  className="w-full"
              />
            </div>

            {/* Navigation arrows */}
            <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2 pointer-events-none z-20">
              <button
                aria-label="Previous screenshot"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
              >
                <span className="text-xl font-bold">←</span>
              </button>
              <button
                aria-label="Next screenshot"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <span className="text-xl font-bold">→</span>
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
          {auctionScreenshots.map((_, index) => (
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

      {/* Key features section remains below the carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Key Platform Features:
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Real-time bidding with instant updates</li>
              <li>Secure user authentication and profiles</li>
              <li>Countdown timers for auction end times</li>
              <li>Responsive design for all device sizes</li>
              <li>Advanced filtering and search capabilities</li>
            </ul>
          </CardBody>
        </GlassCard>

        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Technical Highlights:
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Built with Next.js 15 and React 18</li>
              <li>Real-time data synchronization with Supabase</li>
              <li>Type-safe development with TypeScript</li>
              <li>Modern UI with Tailwind CSS and HeroUI</li>
              <li>Optimized for performance and SEO</li>
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
                alt={currentScreenshot.name}
                className="w-full object-contain max-h-[80vh]"
                src={currentScreenshot.path}
              />

              {/* Navigation in fullscreen */}
              <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2">
                <button
                  aria-label="Previous screenshot (fullscreen)"
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                >
                  <span className="text-2xl font-bold">←</span>
                </button>
                <button
                  aria-label="Next screenshot (fullscreen)"
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
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