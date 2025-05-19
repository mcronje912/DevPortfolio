// src/components/common/LazyImage.tsx
import React, { useEffect, useRef, useState } from "react";
import { ResponsiveImage } from "./ResponsiveImage";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  threshold?: number;
  rootMargin?: string;
  placeholderColor?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  objectFit = "cover",
  objectPosition = "center",
  threshold = 0.1,
  rootMargin = "200px 0px",
  placeholderColor = "#e2e8f0",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  // Calculate aspect ratio for placeholder
  const aspectRatio = height && width ? `${(height / width) * 100}%` : "56.25%"; // Default to 16:9

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ paddingBottom: aspectRatio }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: placeholderColor }}
        />
      )}

      {/* Actual image */}
      {isVisible && (
        <div className={`absolute inset-0 transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <ResponsiveImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            objectFit={objectFit}
            objectPosition={objectPosition}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      )}
    </div>
  );
};