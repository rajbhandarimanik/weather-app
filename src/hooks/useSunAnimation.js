import { useState, useEffect } from 'react';
import { MirroredRepeatWrapping } from 'three';

// Helper function to interpolate values
const interpolate = (start, end, fraction) => start + (end - start) * fraction;

// Function to determine time of day
const getTimeOfDay = (time) => {
  const hours = time / 60;
  if (hours < 5) return 'night';
  if (hours < 6) return 'beforeSunrise';
  if (hours < 7) return 'sunriseTransition';
  if (hours < 12) return 'daytime';
  if (hours < 18) return 'eveningTime';
  if (hours < 19) return 'sunsetTransition';
  if (hours < 20) return 'afterSunset';
  return 'night';
};

// Function to calculate sun properties based on time
const calculateSunProperties = (time) => {
  const hours = time / 60;
  const minutesInDay = 1440;
  const timeFraction = time / minutesInDay;

  let elevation, azimuth, turbidity, rayleigh, mieCoefficient, mieDirectionalG;

  const timeOfDay = getTimeOfDay(time);

  switch (timeOfDay) {
    case 'night':
      // Night: 0-300 minutes (00:00-05:00) and 1200-1440 minutes (20:00-24:00)
      elevation = -5;
      azimuth = 180;
      turbidity = 10;
      rayleigh = 4;
      mieCoefficient = 0;
      mieDirectionalG = 1;
      //exposure: 0
      break;
    case 'beforeSunrise':
      // Before Sunrise: 300-360 minutes (05:00-06:00)
      elevation = interpolate(-5, 0, (hours - 5) / 1);
      azimuth = 180;
      turbidity = interpolate(10, 7, (hours - 5) / 1);
      rayleigh = interpolate(4, 3.75, (hours - 5) / 1);
      mieCoefficient = 0.001;
      mieDirectionalG = interpolate(1, 0.89, (hours - 5) / 1);
      //exposure: 0.00 - 0.08
      break;
    case 'sunriseTransition':
      // Sunrise Transition: 360-420 minutes (06:00-07:00)
      elevation = interpolate(0, 1.5, (hours - 6) / 1);
      azimuth = 180;
      turbidity = interpolate(2, 0, (hours - 6) / 1);
      rayleigh = interpolate(3.75, 4, (hours - 6) / 1);

      mieCoefficient = interpolate(0.001, 0.02, (hours - 6) / 1);
      mieDirectionalG = interpolate(0.89, 0.9, (hours - 6) / 1);
      //exposure: 0.08 - 0.24
      break;
    case 'daytime':
      // Daytime: 420-720 minutes (07:00-12:00)
      elevation = interpolate(1.5, 90, (hours - 7) / 5);
      azimuth = 180;
      turbidity = interpolate(2, 0, (hours - 7) / 5);
      rayleigh = interpolate(2, 0.2, (hours - 7) / 5);

      mieCoefficient = interpolate(0.02, 0.01, (hours - 7) / 5);
      mieDirectionalG = interpolate(0.9, 0.98, (hours - 7) / 5);
      //exposure: 0.24 - 0.18
      //exposure: 0.1995
      break;
    case 'eveningTime':
      // Daytime: 720-1080 minutes (12:00-18:00)
      elevation = interpolate(90, 1.5, (hours - 12) / 6);
      azimuth = 180;
      turbidity = interpolate(2, 0, (hours - 12) / 6);
      rayleigh = interpolate(0.2, 3.5, (hours - 12) / 6);

      mieCoefficient = interpolate(0.01, 0.01, (hours - 12) / 6);
      mieDirectionalG = interpolate(0.9, 0.98, (hours - 12) / 6);
      break;

    case 'sunsetTransition':
      // Sunset Transition: 1080-1140 minutes (18:00-19:00)
      elevation = interpolate(1.5, 0, (hours - 18) / 1); // Mirror sunrise transition (elevation)
      azimuth = 180;
      turbidity = interpolate(0, 2, (hours - 18) / 1); // Reverse turbidity from sunrise
      rayleigh = interpolate(4, 3.75, (hours - 18) / 1); // Reverse rayleigh from sunrise
      mieCoefficient = interpolate(0.02, 0.001, (hours - 18) / 1); // Reverse mieCoefficient
      mieDirectionalG = interpolate(0.9, 0.89, (hours - 18) / 1); // Reverse mieDirectionalG
      break;
      break;
    case 'afterSunset':
      // After Sunset: 1140-1200 minutes (19:00-20:00)
      elevation = interpolate(0, -5, (hours - 19) / 1);
      azimuth = 180;
      turbidity = interpolate(7, 10, (hours - 19) / 1);
      rayleigh = interpolate(3.75, 4, (hours - 19) / 1);
      mieCoefficient = 0.001;
      mieDirectionalG = interpolate(0.89, 1, (hours - 19) / 1);
      break;
  }

  return {
    elevation,
    azimuth,
    turbidity,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
  };
};

const useSunAnimation = (time) => {
  let timeOfDay = time ? time : 0;

  const [sunProperties, setSunProperties] = useState({
    elevation: 0,
    azimuth: 180,
    turbidity: 2,
    rayleigh: 1,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.89,
  });

  useEffect(() => {
    const updateSunProperties = () => {
      setSunProperties(calculateSunProperties(time));
    };

    updateSunProperties();
  }, [time]);

  return {
    ...sunProperties,
    timeOfDay,
  };
};

export default useSunAnimation;
