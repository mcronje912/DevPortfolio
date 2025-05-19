// src/components/common/ResponsiveImage.tsx
import React, { useState, useEffect } from "react";

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
  onLoad?: () => void;
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
  onLoad,
}) => {
  const [useWebP, setUseWebP] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  // Check if WebP is supported
  useEffect(() => {
    // Function to check if image exists
    const checkImageExists = async (url: string) => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
      } catch (error) {
        console.error(`Error checking WebP image: ${url}`, error);
        return false;
      }
    };
    
    // Check if WebP version exists
    if (!src.toLowerCase().endsWith('.webp')) {
      const webpPath = src.replace(/\.(jpe?g|png)$/i, '.webp');
      checkImageExists(webpPath).then(exists => {
        if (!exists) {
          console.log(`WebP version not found: ${webpPath}, using original: ${src}`);
          setUseWebP(false);
        }
      });
    }
  }, [src]);
  
  // Generate WebP path
  const isAlreadyWebP = src.toLowerCase().endsWith('.webp');
  const webpSrc = isAlreadyWebP ? src : src.replace(/\.(jpe?g|png)$/i, '.webp');

  // Handle image load
  const handleLoad = () => {
    setImgLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <picture className={className}>
      {useWebP && !isAlreadyWebP && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        onLoad={handleLoad}
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