// src/components/projects/InvoiceShowcase.tsx
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@heroui/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";
import { DeviceMockup } from "../mockups/DeviceMockup";
import { GlassCard } from "../GlassCard";

// Define invoice screenshots
const invoiceScreenshots = [
  {
    id: "inv1",
    path: "/images/projects/invoice-companion/inv1.PNG",
  },
  {
    id: "inv2",
    path: "/images/projects/invoice-companion/inv2.PNG",
  },
  {
    id: "inv3",
    path: "/images/projects/invoice-companion/inv3.PNG",
  },
  {
    id: "inv4",
    path: "/images/projects/invoice-companion/inv4.PNG",
  },
  {
    id: "inv5",
    path: "/images/projects/invoice-companion/inv5.PNG",
  },
  {
    id: "inv6",
    path: "/images/projects/invoice-companion/inv6.PNG",
  }
];

export const InvoiceShowcase: React.FC = () => {
  // State for the mobile images
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Lightbox state
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
  
  // Navigation functions for mobile screenshots
  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % invoiceScreenshots.length);
  };
  
  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => 
      prev === 0 ? invoiceScreenshots.length - 1 : prev - 1
    );
  };
  
  return (
    <div className="mb-12">
      {/* Mobile Showcase with Text Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Mobile mockup - takes 1/3 width on medium screens */}
        <div className="md:col-span-1">
          <Card className="overflow-hidden h-full">
            <CardBody className="flex flex-col items-center justify-center p-4 relative bg-ash-gray-900 dark:bg-rich-black-600">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />
              
              {/* Mobile mockup */}
              <div 
                className="relative z-10 cursor-pointer transition-transform hover:scale-[1.02] duration-300"
                onClick={onOpen}
                role="button"
                tabIndex={0}
                aria-label="View full screen invoice app screenshot"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onOpen();
                  }
                }}
              >
                <DeviceMockup
                  alt={`Invoice Companion App - Screen ${currentIndex + 1}`}
                  image={invoiceScreenshots[currentIndex].path}
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
            {invoiceScreenshots.map((_, index) => (
              <button
                key={index}
                aria-current={index === currentIndex ? "true" : "false"}
                aria-label={`Go to screenshot ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-cerulean-500 ${
                  index === currentIndex
                    ? "bg-cerulean w-4"
                    : "bg-default-300 dark:bg-rich-black-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Description text - takes 2/3 width on medium screens */}
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardBody>
              <h3 className="text-xl font-heading font-bold mb-4">Comprehensive Invoicing Solution</h3>
              <p className="text-default-700 mb-6">
                InvoiceCompanion is a full-featured invoicing application designed to streamline business financial operations. Built with Flutter for cross-platform use, it provides a complete invoicing system that works seamlessly across multiple devices with a focus on mobility and ease of use.
              </p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Key Capabilities:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Client Management:</strong> Organize customer information with detailed profiles, transaction history, and custom fields for personalized client relationships.
                  </li>
                  <li>
                    <strong>Product/Service Catalog:</strong> Maintain a comprehensive catalog with consistent pricing, descriptions, and categorization for streamlined quote and invoice creation.
                  </li>
                  <li>
                    <strong>Quote & Invoice Generation:</strong> Create professional documents with customizable templates, and seamlessly convert quotes to invoices when projects are approved.
                  </li>
                  <li>
                    <strong>PDF Export & Sharing:</strong> Generate professional PDF documents with your business branding, and share them directly via email, messaging, or cloud storage services.
                  </li>
                  <li>
                    <strong>Analytics Dashboard:</strong> Visualize business performance with interactive charts tracking income, outstanding payments, and client activity to inform business decisions.
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Technical Implementation:</h4>
                <p className="text-default-700 mb-4">
                  The app combines modern mobile development techniques with practical business functionality:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Built with Flutter for native performance on iOS and Android</li>
                  <li>Local SQLite database for complete offline functionality</li>
                  <li>Provider pattern for clean, testable state management</li>
                  <li>PDF generation using the Syncfusion Flutter library</li>
                  <li>RevenueCat integration for potential subscription features</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      
      {/* Feature highlights in card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Customer Management
            </h3>
            <p className="text-default-700">
              Track comprehensive client information including contact details, payment preferences, transaction history, and notes. The intelligent search and filtering system allows you to quickly find and manage customer records.
            </p>
          </CardBody>
        </GlassCard>

        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Financial Insights
            </h3>
            <p className="text-default-700">
              Monitor business performance at a glance with visual representations of sales trends, payment statuses, and outstanding invoices. Makes financial planning more informed with clear data visualization.
            </p>
          </CardBody>
        </GlassCard>

        <GlassCard intensity="heavy">
          <CardBody>
            <h3 className="text-lg font-heading font-bold mb-3">
              Mobile-First Design
            </h3>
            <p className="text-default-700">
              Create and manage invoices anywhere with a focus on mobile usability without sacrificing functionality. The interface is optimized for touch interactions while maintaining full feature capabilities.
            </p>
          </CardBody>
        </GlassCard>
      </div>
      
      {/* Lightbox Modal */}
      <Modal
        backdrop="blur"
        className="px-2"
        isOpen={isOpen}
        size="5xl"
        onClose={onClose}
        aria-labelledby="invoice-modal-title"
      >
        <ModalContent>
          <ModalBody className="p-0 overflow-hidden">
            <div className="relative">
              {/* Hidden title for screen readers */}
              <h2 id="invoice-modal-title" className="sr-only">
                {`Invoice Companion App - Screen ${currentIndex + 1}`}
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
                alt={`Invoice Companion Screenshot ${currentIndex + 1}`}
                className="w-full object-contain max-h-[80vh]"
                src={invoiceScreenshots[currentIndex].path}
              />
              
              {/* Navigation in lightbox */}
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