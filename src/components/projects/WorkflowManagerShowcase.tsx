// src/components/projects/WorkflowManagerShowcase.tsx
import React, { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { DeviceMockup } from "../mockups/DeviceMockup";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";

// Define the screenshots using your actual files
const workflowScreenshots = [
  {
    id: "bm1",
    name: "Dashboard View",
    path: "/images/projects/workflow-manager/bm1.png",
  },
  {
    id: "bm2",
    name: "Quote Calculator",
    path: "/images/projects/workflow-manager/bm2.png",
  },
  {
    id: "bm3",
    name: "Layout Optimizer",
    path: "/images/projects/workflow-manager/bm3.png",
  },
  {
    id: "bm4",
    name: "Materials Management",
    path: "/images/projects/workflow-manager/bm4.png",
  },
  {
    id: "bm5",
    name: "PDF Processing",
    path: "/images/projects/workflow-manager/bm5.png",
  },
  {
    id: "bm6",
    name: "System Configuration",
    path: "/images/projects/workflow-manager/bm6.png",
  }
];

export const WorkflowManagerShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex < workflowScreenshots.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to first image
    }
  };
  
  const goToPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
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
              className="relative z-10 w-full max-w-4xl mx-auto cursor-pointer transition-transform hover:scale-[1.01] duration-300 border-0 p-0 bg-transparent"
              onClick={onOpen}
              aria-label="Open fullscreen view of print quote system"
            >
              <DeviceMockup
                alt={currentScreenshot.name}
                image={currentScreenshot.path}
                type="laptop"
                className="w-full"
              />
              
              {/* Click to enlarge indicator */}
              <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-rich-black-400/80 backdrop-blur-sm text-xs px-2 py-1 rounded-md shadow-sm text-rich-black-700 dark:text-white flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Click to enlarge
              </div>
            </button>
            
            {/* Navigation arrows */}
            <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2 pointer-events-none z-20">
              <button 
                onClick={goToPrev}
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                aria-label="Previous screenshot"
              >
                <span className="text-xl font-bold">←</span>
              </button>
              <button 
                onClick={goToNext}
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md pointer-events-auto hover:bg-white transition-colors"
                aria-label="Next screenshot"
              >
                <span className="text-xl font-bold">→</span>
              </button>
            </div>
          </CardBody>
        </Card>
        
        {/* Pagination indicators */}
        <div className="flex justify-center gap-2 mb-6" role="group" aria-label="Screenshot pagination">
          {workflowScreenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-cerulean w-5' 
                  : 'bg-default-300 dark:bg-rich-black-300'
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal for enlarged view */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size="5xl"
        backdrop="blur"
        className="px-2"
      >
        <ModalContent>
          <ModalBody className="p-0 overflow-hidden">
            <div className="relative">
              {/* Close button */}
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 z-50 bg-white/80 dark:bg-rich-black-500/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-rich-black-400 transition-colors"
                aria-label="Close fullscreen view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Large centered image */}
              <img 
                src={currentScreenshot.path} 
                alt={currentScreenshot.name}
                className="w-full object-contain max-h-[80vh]"
              />
              
              {/* Navigation in fullscreen */}
              <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2">
                <button 
                  onClick={goToPrev}
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md hover:bg-white transition-colors"
                  aria-label="Previous screenshot (fullscreen)"
                >
                  <span className="text-2xl font-bold">←</span>
                </button>
                <button 
                  onClick={goToNext}
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/80 text-rich-black-500 shadow-md hover:bg-white transition-colors"
                  aria-label="Next screenshot (fullscreen)"
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