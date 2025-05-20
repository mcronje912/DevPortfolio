// src/hooks/useSessionTimeTracking.ts
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
}