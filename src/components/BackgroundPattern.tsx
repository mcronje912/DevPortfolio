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
      {/* Base gradient background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
background: isDark
  ? 'linear-gradient(135deg, #030e12 0%, #1e3f4a 100%)' // Much darker dark mode
  : 'linear-gradient(135deg, #f6f1d1 0%, #70a9a1 100%)', // Light mode unchanged
          zIndex: -2,
          pointerEvents: 'none',
        }}
      />
      
      {/* Pattern overlay with INCREASED prominence */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/images/global/background-pattern.svg")',
          backgroundSize: '900',
          backgroundRepeat: 'repeat',
          opacity: isDark ? .5 : 0.65, // INCREASED from 0.35/0.45 to 0.5/0.65
          zIndex: -1,
          pointerEvents: 'none',
          mixBlendMode: isDark ? 'lighten' : 'multiply', 
          filter: isDark ? 'contrast(1.4) brightness(1.1)' : 'contrast(1.3)', // ENHANCED filters
          // Slightly adjusted mask for more visibility
          maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 90%)',
        }}
      />
    </>
  );
};