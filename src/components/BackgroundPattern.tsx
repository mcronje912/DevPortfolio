// src/components/BackgroundPattern.tsx
import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export const BackgroundPattern: React.FC = () => {
  const { currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const isDark = currentTheme === 'dark';
  
  return (
    <>
      {/* Main pattern background with fade effect */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/pattern.svg")',
          backgroundSize: '180px', // Smaller pattern for more density
          backgroundRepeat: 'repeat',
          opacity: isDark ? 0.25 : 0.35, // Much higher opacity
          zIndex: -1,
          pointerEvents: 'none',
          filter: isDark 
            ? 'brightness(0.8) contrast(1.2)' // Added contrast for dark mode
            : 'contrast(1.1)', // Slight contrast boost for light mode
          // Adjusted gradient to keep more pattern visible
          maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 85%)',
        }}
      />
      
      {/* Enhanced corner accent */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '60%', // Larger area
          height: '60%', // Larger area
          backgroundImage: isDark 
            ? 'radial-gradient(circle at top right, rgba(64, 121, 140, 0.25), transparent 75%)' // More visible
            : 'radial-gradient(circle at top right, rgba(112, 169, 161, 0.3), transparent 75%)', // More visible
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};