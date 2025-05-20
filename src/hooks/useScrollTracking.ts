// src/hooks/useScrollTracking.ts (continued)
import { useEffect } from 'react';
import { useAnalytics } from './useAnalytics';

export function useScrollTracking() {
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    // Track markers for scroll depth
    const scrollMarkers = [25, 50, 75, 90, 100];
    const markersFired: Record<number, boolean> = {};
    
    // Initialize all markers as not fired
    scrollMarkers.forEach(marker => {
      markersFired[marker] = false;
    });
    
    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.floor((scrollTop / scrollHeight) * 100);
      
      // Check if we've passed any markers
      scrollMarkers.forEach(marker => {
        if (scrollPercentage >= marker && !markersFired[marker]) {
          trackEvent('scroll_depth', { 
            depth_percentage: marker,
            page_path: window.location.pathname,
            page_title: document.title
          });
          
          // Mark this depth as tracked
          markersFired[marker] = true;
        }
      });
    };
    
    // Add scroll listener with throttling to improve performance
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 250); // Check scroll depth every 250ms
      }
    };
    
    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [trackEvent]);
  
  // No return value needed - this hook just sets up the tracking
}