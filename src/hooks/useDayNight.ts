import { useState, useEffect } from 'react';

export const useDayNight = () => {
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      // Daytime is from 6 AM to 6 PM
      setIsDaytime(hour >= 6 && hour < 18);
    };
    
    checkTime();
    // Check every minute
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return isDaytime;
};
