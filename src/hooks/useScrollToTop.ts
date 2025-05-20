// src/hooks/useScrollToTop.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook that scrolls to top of the page on route change
 */
export function useScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll to top of the page when pathname changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Use 'auto' for instant scrolling
    });
  }, [pathname]);
}