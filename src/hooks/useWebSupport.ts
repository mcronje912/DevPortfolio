// src/hooks/useWebPSupport.ts
import { useState, useEffect } from "react";

/**
 * Hook to detect WebP support and check if WebP versions of images exist
 * @param fallbackPath The non-WebP image path to fall back to
 * @param webpPath The WebP version of the image path
 * @returns An object with the detected image path and a flag indicating WebP support
 */
export function useWebPSupport(fallbackPath: string, webpPath?: string) {
  const [useWebP, setUseWebP] = useState(true);
  const [imagePath, setImagePath] = useState(webpPath || fallbackPath);

  // If no webpPath is provided, generate one
  const generatedWebPPath =
    webpPath || fallbackPath.replace(/\.(jpe?g|png)$/i, ".webp");

  useEffect(() => {
    const checkWebPSupport = async () => {
      try {
        // Check if browser supports WebP
        const webpSupported =
          document
            .createElement("canvas")
            .toDataURL("image/webp")
            .indexOf("data:image/webp") === 0;

        if (!webpSupported) {
          setUseWebP(false);
          setImagePath(fallbackPath);

          return;
        }

        // Try to fetch the WebP image to confirm it exists
        const testUrl = generatedWebPPath;

        try {
          const response = await fetch(testUrl, { method: "HEAD" });

          if (!response.ok) {
            console.log("WebP image not available, using original");
            setUseWebP(false);
            setImagePath(fallbackPath);
          } else {
            console.log("WebP image available and will be used");
            setImagePath(generatedWebPPath);
          }
        } catch (error) {
          console.error("Error checking WebP image existence:", error);
          setUseWebP(false);
          setImagePath(fallbackPath);
        }
      } catch (error) {
        console.error("Error checking WebP support:", error);
        setUseWebP(false);
        setImagePath(fallbackPath);
      }
    };

    checkWebPSupport();
  }, [fallbackPath, generatedWebPPath]);

  return { useWebP, imagePath };
}
