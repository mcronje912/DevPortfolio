// src/pages/portfolio.tsx
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { CardBody } from "@heroui/card";
import { Snippet } from "@heroui/snippet";
import { Tab, Tabs } from "@heroui/tabs";
import { motion } from "framer-motion";

import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { GlassCard } from "@/components/GlassCard";

export default function PortfolioProjectPage() {
  return (
    <DefaultLayout>
      <div className="py-10">
        <div className="container px-4 mx-auto">
          {/* Header section */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center mb-4">
              <Link
                className="flex items-center hover:opacity-80 transition-opacity mr-4"
                color="primary"
                href="/projects"
              >
                <span className="text-lg">←</span>
                <span className="ml-1">Projects</span>
              </Link>
            </div>

            <h1 className={title({ size: "lg", class: "mb-4" })}>
              Developer Portfolio Website
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Chip color="primary" variant="flat">
                Web App
              </Chip>
              <Chip color="primary" variant="flat">
                Portfolio
              </Chip>
              <Chip color="primary" variant="flat">
                React
              </Chip>
            </div>
          </div>

          {/* Overview section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <div className="prose max-w-none text-default-700">
                <p className="mb-4">
                  This portfolio website serves as a showcase for my development projects and skills. Built using
                  React, TypeScript, and HeroUI components with Tailwind CSS, it features a responsive design,
                  interactive project displays, and accessibility enhancements.
                </p>
                <p className="mb-4">
                  The portfolio includes responsive design elements that work across devices while maintaining
                  a consistent look and feel. Features like the dark/light mode toggle and interactive
                  project showcases demonstrate practical implementation of modern web development techniques.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="secondary" variant="flat">
                      React
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      TypeScript
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      HeroUI
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Tailwind CSS
                    </Chip>
                    <Chip color="secondary" variant="flat">
                      Vite
                    </Chip>
                  </div>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Completed
                  </h3>
                  <p>2025</p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    GitHub Repository
                  </h3>
                  <Link
                    isExternal
                    className="flex items-center gap-2 text-cerulean hover:underline"
                    href="https://github.com/mcronje912/DevPortfolio"
                  >
                    <GithubIcon className="h-5 w-5" />
                    View Source Code
                  </Link>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Code Examples Tabs Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Technical Implementation
            </h2>
            <Tabs aria-label="Code examples" color="primary" variant="underlined">
              <Tab key="component" title="Component Architecture">
                <GlassCard intensity="medium" className="mt-4">
                  <CardBody>
                    <h3 className="text-lg font-heading font-bold mb-3">
                      Glass Card Component
                    </h3>
                    <p className="text-default-700 mb-4">
                      This reusable component creates a modern frosted glass effect with dynamic intensity levels
                      for different UI contexts.
                    </p>
                    <Snippet hideSymbol className="mt-2 text-tiny">
                      {`// src/components/GlassCard.tsx
import { Card, CardProps } from "@heroui/card";
import clsx from "clsx";

interface GlassCardProps extends CardProps {
  intensity?: "light" | "medium" | "heavy";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  intensity = "medium",
  ...props
}) => {
  const glassEffect = {
    light:
      "bg-white/10 dark:bg-rich-black-500/10 backdrop-blur-sm border border-white/10 dark:border-rich-black-300/10",
    medium:
      "bg-white/20 dark:bg-rich-black-500/20 backdrop-blur-md border border-white/20 dark:border-rich-black-300/20",
    heavy:
      "bg-white/30 dark:bg-rich-black-500/30 backdrop-blur-md border border-white/30 dark:border-rich-black-300/30",
  }[intensity];

  return (
    <Card
      className={clsx(
        glassEffect,
        "shadow-lg hover:shadow-xl transition-all duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
};`}
                    </Snippet>
                  </CardBody>
                </GlassCard>
              </Tab>
              
              <Tab key="testing" title="Testing Implementation">
                <GlassCard intensity="medium" className="mt-4">
                  <CardBody>
                    <h3 className="text-lg font-heading font-bold mb-3">
                      Component Testing
                    </h3>
                    <p className="text-default-700 mb-4">
                      Comprehensive test suite using Vitest and React Testing Library for component validation.
                    </p>
                    <Snippet hideSymbol className="mt-2 text-tiny">
                      {`// src/components/projects/ProjectCard.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../test/utils';
import userEvent from '@testing-library/user-event';
import { ProjectCard } from './ProjectCard';

// Mock the useAnalytics hook
vi.mock('../../hooks/useAnalytics', () => ({
  useAnalytics: () => ({
    trackEvent: vi.fn(),
  }),
}));

describe('ProjectCard Component', () => {
  const defaultProps = {
    title: 'Test Project',
    description: 'This is a test project description',
    thumbnailUrl: '/images/test-project.jpg',
    tags: ['React', 'TypeScript'],
    projectUrl: '/projects/test-project',
    deviceType: 'desktop' as const,
  };

  it('renders the project information correctly', () => {
    render(<ProjectCard {...defaultProps} />);
    
    // Check if title and description are rendered
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
    
    // Check if all tags are rendered
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('handles project click correctly', async () => {
    const user = userEvent.setup();
    render(<ProjectCard {...defaultProps} />);
    
    const viewProjectLink = screen.getByRole('link', { name: /view project/i });
    await user.click(viewProjectLink);
    
    // Verify analytics event was tracked
    expect(useAnalytics().trackEvent).toHaveBeenCalledWith(
      'project_view', 
      expect.objectContaining({ 
        projectTitle: 'Test Project' 
      })
    );
  });
});`}
                    </Snippet>
                  </CardBody>
                </GlassCard>
              </Tab>
              
              <Tab key="hooks" title="Custom Hooks">
                <GlassCard intensity="medium" className="mt-4">
                  <CardBody>
                    <h3 className="text-lg font-heading font-bold mb-3">
                      Image Carousel Hook
                    </h3>
                    <p className="text-default-700 mb-4">
                      A reusable hook that manages image carousels with keyboard navigation and accessibility features.
                    </p>
                    <Snippet hideSymbol className="mt-2 text-tiny">
                      {`// src/hooks/useImageCarousel.ts
import { useState, useEffect, useCallback } from "react";

export interface Screenshot {
  id: string;
  name: string;
  path: string;
  webpPath?: string;
  description?: string;
}

export function useImageCarousel(
  screenshots: Screenshot[],
  options: {
    initialIndex?: number;
    enableKeyboardNavigation?: boolean;
    modalState?: { isOpen: boolean };
  } = {},
) {
  const {
    initialIndex = 0,
    enableKeyboardNavigation = true,
    modalState,
  } = options;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentScreenshot = screenshots[currentIndex];

  // Navigation functions
  const goToNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    },
    [screenshots.length],
  );

  const goToPrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setCurrentIndex((prev) =>
        prev === 0 ? screenshots.length - 1 : prev - 1,
      );
    },
    [screenshots.length],
  );

  const goToIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < screenshots.length) {
        setCurrentIndex(index);
      }
    },
    [screenshots.length],
  );

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    // Only add keyboard listeners if modal is open (if modalState is provided)
    if (modalState && !modalState.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, enableKeyboardNavigation, modalState]);

  return {
    currentIndex,
    currentScreenshot,
    goToNext,
    goToPrev,
    goToIndex,
    isFirst: currentIndex === 0,
    isLast: currentIndex === screenshots.length - 1,
    totalCount: screenshots.length,
  };
}`}
                    </Snippet>
                  </CardBody>
                </GlassCard>
              </Tab>
              
              <Tab key="animations" title="Animation Techniques">
                <GlassCard intensity="medium" className="mt-4">
                  <CardBody>
                    <h3 className="text-lg font-heading font-bold mb-3">
                      Staggered Animation Components
                    </h3>
                    <p className="text-default-700 mb-4">
                      Using Framer Motion to create engaging staggered animations for UI elements.
                    </p>
                    <Snippet hideSymbol className="mt-2 text-tiny">
                      {`// Example of staggered animations with Framer Motion
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export const StaggeredList = ({ items }) => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {items.map((item, index) => (
        <motion.li key={index} variants={item} className="bg-default-100 p-4 rounded-lg">
          {item.content}
        </motion.li>
      ))}
    </motion.ul>
  );
};`}
                    </Snippet>
                  </CardBody>
                </GlassCard>
              </Tab>
              
              <Tab key="analytics" title="Analytics Integration">
                <GlassCard intensity="medium" className="mt-4">
                  <CardBody>
                    <h3 className="text-lg font-heading font-bold mb-3">
                      Session Time Tracking
                    </h3>
                    <p className="text-default-700 mb-4">
                      A sophisticated hook for tracking user session time with intelligent interval reporting.
                    </p>
                    <Snippet hideSymbol className="mt-2 text-tiny">
                      {`// src/hooks/useSessionTimeTracking.ts
import { useEffect } from 'react';
import { useAnalytics } from './useAnalytics';

export function useSessionTimeTracking() {
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    // Track time intervals in minutes
    const timeIntervals = [1, 3, 5, 10, 15, 30];
    const intervalsFired: Record<number, boolean> = {};
    
    // Initialize all intervals as not fired
    timeIntervals.forEach(interval => {
      intervalsFired[interval] = false;
    });
    
    // Get session start time
    const sessionStartTime = Date.now();
    
    // Setup periodic checking
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const minutesOnSite = Math.floor((currentTime - sessionStartTime) / (1000 * 60));
      
      // Check if we've passed any time intervals
      timeIntervals.forEach(interval => {
        if (minutesOnSite >= interval && !intervalsFired[interval]) {
          trackEvent('session_duration', { 
            minutes: interval,
            pages_viewed: window.history.length
          });
          
          // Mark this interval as tracked
          intervalsFired[interval] = true;
        }
      });
      
      // Only keep tracking up to the longest interval
      if (minutesOnSite > timeIntervals[timeIntervals.length - 1]) {
        clearInterval(intervalId);
      }
    }, 60000); // Check every minute
    
    // Also track session when the user leaves
    const handleBeforeUnload = () => {
      const currentTime = Date.now();
      const minutesOnSite = Math.floor((currentTime - sessionStartTime) / (1000 * 60));
      
      // Use sendBeacon for more reliable tracking on page exit
      if (navigator.sendBeacon) {
        const data = JSON.stringify({
          name: 'session_ended',
          properties: { 
            total_minutes: minutesOnSite,
            pages_viewed: window.history.length,
            exit_page: window.location.pathname
          }
        });
        
        navigator.sendBeacon('/api/analytics', data);
      } else {
        // Fallback - might not work reliably on page exit
        trackEvent('session_ended', { 
          total_minutes: minutesOnSite,
          pages_viewed: window.history.length,
          exit_page: window.location.pathname
        });
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [trackEvent]);
}`}
                    </Snippet>
                  </CardBody>
                </GlassCard>
              </Tab>
            </Tabs>
          </div>

          {/* Key Features section */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Device Mockups
                  </h3>
                  <p className="text-default-700">
                    Custom device mockup components display project screenshots within realistic phone, tablet, and laptop
                    frames, providing context for how applications appear on different devices.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Dark/Light Mode Toggle
                  </h3>
                  <p className="text-default-700">
                    The site implements theme switching functionality, allowing visitors to select their preferred viewing mode.
                    feature demonstrates the use of React&apos;s context API for
                    state management across the application.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Image Optimization
                  </h3>
                  <p className="text-default-700">
                    Implements WebP image format conversion, responsive image sizing, and lazy loading to ensure
                    fast page loads and optimal performance across all devices and network conditions.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Accessibility Features
                  </h3>
                  <p className="text-default-700">
                    ARIA attributes, keyboard navigation, proper focus indicators, and semantic HTML ensure
                    the portfolio is usable by everyone, including those using assistive technologies.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Automated Testing
                  </h3>
                  <p className="text-default-700">
                    Unit and integration tests validate component behavior and key user flows,
                    ensuring reliability and preventing regressions during development.
                  </p>
                </CardBody>
              </GlassCard>

              <GlassCard intensity="heavy">
                <CardBody>
                  <h3 className="text-lg font-heading font-bold mb-3">
                    Analytics Integration
                  </h3>
                  <p className="text-default-700">
                    Custom event tracking provides insights into user behavior and engagement,
                    helping to identify popular content and potential improvements.
                  </p>
                </CardBody>
              </GlassCard>
            </div>
          </div>

          {/* Development Approach section with motion */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Development Approach
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose max-w-none text-default-700"
            >
              <p className="mb-4">
                This portfolio was developed with a focus on code quality, performance, and user experience.
                Key aspects of the development approach include:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Component-Based Architecture:</strong> Modular, reusable components that encapsulate
                  their own logic and styling for maintainability and consistency.
                </li>
                <li>
                  <strong>Progressive Enhancement:</strong> Core functionality works without JavaScript, with
                  enhanced interactions layered on top for modern browsers.
                </li>
                <li>
                  <strong>Performance First:</strong> Optimized assets, code splitting, and lazy loading to
                  ensure fast load times and smooth interactions.
                </li>
                <li>
                  <strong>Test-Driven Development:</strong> Writing tests alongside components to ensure
                  reliability and catch issues early in the development process.
                </li>
                <li>
                  <strong>Accessibility Integration:</strong> Considering accessibility from the start rather
                  than as an afterthought, with regular audits during development.
                </li>
              </ul>
              
              <p>
                The development workflow leveraged modern tools like Vite for fast builds and hot module replacement,
                ESLint for code quality, and Git for version control with structured commits.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <div className="flex justify-center mt-12">
            <Button
              isExternal
              as={Link}
              className="px-8 mr-4"
              color="primary"
              href="https://github.com/mcronje912/DevPortfolio"
              startContent={<GithubIcon />}
              variant="shadow"
            >
              View Source on GitHub
            </Button>
            <Button
              as={Link}
              className="px-8"
              href="/contact"
              variant="bordered"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}