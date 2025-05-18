// src/components/Hero.tsx
import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion, AnimatePresence } from "framer-motion";

// Later we can expand this to multiple images for rotation
const mockupImages = [
  "/images/mockups/hero-mockup.png", // This will be your downloaded mockup
];

export const Hero = () => {
  // State for controlling which image is currently shown
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Image rotation logic (for future use when you add more images)
  useEffect(() => {
    // Only setup rotation if there are multiple images
    if (mockupImages.length <= 1) return;
    
    const rotationInterval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === mockupImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-20 md:py-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 mb-10 md:mb-0">
            <span className="inline-block text-cerulean font-medium mb-3">
              Hello, I&apos;m
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Marco{" "}
              <span className="text-gradient bg-gradient-to-r from-cerulean to-verdigris">
                Cronje
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-default-600 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg max-w-xl mb-8">
              I build comprehensive software solutions that transform complex
              business challenges into elegant, efficient systems. From{" "}
              <span className="text-cerulean font-medium">
                responsive web interfaces
              </span>{" "}
              to{" "}
              <span className="text-cerulean font-medium">
                cross-platform mobile apps
              </span>{" "}
              and{" "}
              <span className="text-cerulean font-medium">
                real-time data platforms
              </span>
              , my versatile approach delivers practical results across multiple
              domains.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                className="bg-cerulean hover:bg-cerulean-600 px-6 py-2"
                color="primary"
                href="/projects"
                variant="shadow"
              >
                View My Projects
              </Button>
              <Button
                as={Link}
                className="border-cerulean text-cerulean px-6 py-2"
                href="/contact"
                variant="bordered"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          {/* Mockup display area - with transparent background */}
          <div className="w-full md:w-2/5 flex justify-center">
            {/* Image container with animation capabilities */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Clean mockup image without card frame or glowing orbs */}
                <img
                  src={mockupImages[currentImageIndex]}
                  alt="Project mockup showcase"
                  className="w-full h-auto max-w-[380px] object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};