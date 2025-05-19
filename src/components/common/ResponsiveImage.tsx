// src/components/common/ResponsiveImage.tsx
import React, { useState } from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: "lazy" | "eager";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  sizes = "100vw",
  loading = "lazy",
  objectFit = "cover",
  objectPosition = "center",
}) => {
  const [imgError, setImgError] = useState(false);
  
  // Check if path already has .webp extension
  const isAlreadyWebP = src.toLowerCase().endsWith('.webp');
  
  // Generate WebP path
  const webpSrc = isAlreadyWebP ? src : src.replace(/\.(jpe?g|png)$/i, '.webp');

  // Handle error for the WebP image
  const handleError = () => {
    setImgError(true);
  };

  return (
    <picture className={className}>
      {!imgError && !isAlreadyWebP && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        onError={handleError}
        style={{ 
          objectFit, 
          objectPosition,
          width: '100%',
          height: '100%'
        }}
        className={className}
      />
    </picture>
  );
};