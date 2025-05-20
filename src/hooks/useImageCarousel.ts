// src/hooks/useImageCarousel.ts
import { useState, useEffect, useCallback } from "react";

/**
 * Interface defining a screenshot object
 */
export interface Screenshot {
  id: string;
  name: string;
  path: string;
  webpPath?: string;
  description?: string;
}

/**
 * Hook to manage an image carousel with keyboard navigation
 * @param screenshots Array of screenshot objects
 * @param options Configuration options
 * @returns State and functions to control the carousel
 */
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
}
