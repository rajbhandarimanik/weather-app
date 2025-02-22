import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const calculateExposure = (time) => {
  const hours = time / 60;
  // Night (0-4): Decrease from 1 to 0.001
  if (hours < 4) {
    return 0.1;
  }
  // Sunrise (4-7): Increase from 0.001 to 0.5
  else if (hours < 7) {
    return 0.1 + ((hours - 4) / 3) * 0.5;
    //return 0.5;
  }
  // Morning (7-12): Decrease from 0.5 to 0.09
  else if (hours < 12) {
    //return 0.19 - ((hours - 7) / 5) * 0.1;
    return 0.19;
  }
  // Afternoon (12-18): Increase from 0.09 to 0.5
  else if (hours < 18) {
    return 0.19;
  }
  // Sunset (18-20): Increase from 0.5 to 1
  else if (hours < 20) {
    return 0.5 + ((hours - 18) / 2) * 0.1;
    //return 0.5;
  }
  // Night (20-24): Decrease from 1 to 0.001
  else {
    return 0.1;
  }
};

const UpdateExposure = ({ manualExposure, time, useManualExposure }) => {
  const { gl } = useThree();

  useEffect(() => {
    const exposure = useManualExposure
      ? manualExposure
      : calculateExposure(time);
    gl.toneMappingExposure = exposure;
    console.log(exposure);
  }, [gl, manualExposure, time, useManualExposure]);

  return null;
};

export default UpdateExposure;
