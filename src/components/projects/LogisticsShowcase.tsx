// src/components/projects/LogisticsShowcase.tsx
import React, { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";

import { DeviceMockup } from "../mockups/DeviceMockup";

// Define mobile screenshots
const mobileScreenshots = [
  {
    id: "mobile1",
    path: "/images/projects/logistics/mobile/haz-mobile1.PNG",
  },
  {
    id: "mobile2",
    path: "/images/projects/logistics/mobile/haz-mobile2.PNG",
  },
  {
    id: "mobile3",
    path: "/images/projects/logistics/mobile/haz-mobile3.PNG",
  },
  {
    id: "mobile4",
    path: "/images/projects/logistics/mobile/haz-mobile4.PNG",
  },
];

// Define admin dashboard screenshots
const adminScreenshots = [
  {
    id: "admin1",
    path: "/images/haz-admin1.webp",
  },
  {
    id: "admin2",
    path: "/images/haz-admin2.webp",
  },
  {
    id: "admin3",
    path: "/images/haz-admin3.webp",
  },
  {
    id: "admin4",
    path: "/images/haz-admin4.webp",
  },
  {
    id: "admin5",
    path: "/images/haz-admin5.webp",
  },
];

// Split the component into two separate parts: AdminShowcase and MobileShowcase
export const AdminDashboardShowcase: React.FC = () => {
  // State for the admin images
  const [currentAdminIndex, setCurrentAdminIndex] = useState(0);

  // Lightbox state
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Navigation functions for admin screenshots
  const goToNextAdmin = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentAdminIndex((prev) => (prev + 1) % adminScreenshots.length);
  };

  const goToPrevAdmin = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentAdminIndex((prev) =>
      prev === 0 ? adminScreenshots.length - 1 : prev - 1,
    );
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-bold mb-6">
        Administration Dashboard
      </h2>

      <div className="relative">
        <Card className="mb-8 overflow-hidden">
          <CardBody className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
            {/* Beautiful gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />

            {/* Mockup with click handler - styled like the auction page */}
            <div
              aria-label="Open fullscreen view of admin dashboard"
              className="relative z-10 w-full max-w-4xl mx-auto cursor-pointer transition-transform hover:scale-[1.01] duration-300"
              role="button"
              tabIndex={0}
              onClick={onOpen}
            >
              <DeviceMockup
                alt="Admin Dashboard"
                className="w-full"
                image={adminScreenshots[currentAdminIndex].path}
                type="laptop"
              />
            </div>

            {/* Navigation arrows */}
            <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2 pointer-events-none z-20">
              <button
                aria-label="Previous screenshot"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                onClick={goToPrevAdmin}
              >
                <span className="text-xl font-bold">←</span>
              </button>
              <button
                aria-label="Next screenshot"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                onClick={goToNextAdmin}
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
          {adminScreenshots.map((_, index) => (
            <button
              key={index}
              aria-current={index === currentAdminIndex ? "true" : "false"}
              aria-label={`Go to admin screenshot ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentAdminIndex
                  ? "bg-cerulean w-5"
                  : "bg-default-300 dark:bg-rich-black-300"
              }`}
              onClick={() => setCurrentAdminIndex(index)}
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
                alt="Admin Dashboard Screenshot"
                className="w-full object-contain max-h-[80vh]"
                src={adminScreenshots[currentAdminIndex].path}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Admin Features Card */}
      <Card className="bg-default-50">
        <CardBody>
          <h3 className="text-lg font-heading font-bold mb-3">
            Admin Dashboard Features
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Real-time fleet monitoring with live tracking</li>
            <li>Comprehensive delivery management system</li>
            <li>Driver assignment and scheduling tools</li>
            <li>Regulatory compliance reporting</li>
            <li>Performance analytics and efficiency metrics</li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

// Mobile component that's designed to be narrower and placed alongside text
export const MobileAppShowcase: React.FC = () => {
  // State for the mobile images
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  // Lightbox state
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Navigation functions for mobile screenshots
  const goToNextMobile = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentMobileIndex((prev) => (prev + 1) % mobileScreenshots.length);
  };

  const goToPrevMobile = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentMobileIndex((prev) =>
      prev === 0 ? mobileScreenshots.length - 1 : prev - 1,
    );
  };

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
              alt="Logistics Mobile App"
              image={mobileScreenshots[currentMobileIndex].path}
              type="phone"
            />
          </div>

          {/* Navigation arrows */}
          <div className="absolute inset-x-0 top-1/2 flex justify-between px-2 -translate-y-1/2 pointer-events-none z-20">
            <button
              aria-label="Previous mobile screenshot"
              className="rounded-full w-8 h-8 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
              onClick={goToPrevMobile}
            >
              <span className="text-lg font-bold">←</span>
            </button>
            <button
              aria-label="Next mobile screenshot"
              className="rounded-full w-8 h-8 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
              onClick={goToNextMobile}
            >
              <span className="text-lg font-bold">→</span>
            </button>
          </div>
        </CardBody>
      </Card>

      {/* Mobile pagination indicators */}
      <div
        aria-label="Mobile screenshot pagination"
        className="flex justify-center gap-1.5 mt-3"
        role="group"
      >
        {mobileScreenshots.map((_, index) => (
          <button
            key={index}
            aria-current={index === currentMobileIndex ? "true" : "false"}
            aria-label={`Go to mobile screenshot ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentMobileIndex
                ? "bg-cerulean w-4"
                : "bg-default-300 dark:bg-rich-black-300"
            }`}
            onClick={() => setCurrentMobileIndex(index)}
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
                alt="Mobile App Screenshot"
                className="w-full object-contain max-h-[80vh]"
                src={mobileScreenshots[currentMobileIndex].path}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
