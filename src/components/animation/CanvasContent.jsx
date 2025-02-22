import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import SkyShader from './SkyShader';
import ResizeListener from './ResizeListener';
import PointLight from './PointLight';
import useSunAnimation from '../../hooks/useSunAnimation';

const CanvasContent = ({
  turbidity: manualTurbidity,
  mieCoefficient: manualMieCoefficient,
  mieDirectionalG: manualMieDirectionalG,
  azimuth: manualAzimuth,
  rayleigh: manualRayleigh,
  time,
  useManualControls,
}) => {
  // Use the custom hook to get all animated values
  const {
    elevation,
    azimuth,
    turbidity,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
    timeOfDay,
  } = useSunAnimation(time);

  // Use manual controls if specified, otherwise use animated values
  const finalTurbidity = useManualControls ? manualTurbidity : turbidity;
  const finalRayleigh = useManualControls ? manualRayleigh : rayleigh;
  const finalMieCoefficient = useManualControls
    ? manualMieCoefficient
    : mieCoefficient;
  const finalMieDirectionalG = useManualControls
    ? manualMieDirectionalG
    : mieDirectionalG;
  const finalAzimuth = useManualControls ? manualAzimuth : azimuth;

  // Log the current values for debugging
  useEffect(() => {
    console.log('Current sky properties:', {
      elevation,
      azimuth: finalAzimuth,
      turbidity: finalTurbidity,
      rayleigh: finalRayleigh,
      mieCoefficient: finalMieCoefficient,
      mieDirectionalG: finalMieDirectionalG,
      timeOfDay,
    });
  }, [
    elevation,
    finalAzimuth,
    finalTurbidity,
    finalRayleigh,
    finalMieCoefficient,
    finalMieDirectionalG,
    timeOfDay,
  ]);

  return (
    <>
      <SkyShader
        turbidity={finalTurbidity}
        rayleigh={finalRayleigh}
        mieCoefficient={finalMieCoefficient}
        mieDirectionalG={finalMieDirectionalG}
        elevation={elevation}
        azimuth={finalAzimuth}
      />
      {/* <PointLight /> */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableDamping={true}
        dampingFactor={0.2}
        rotateSpeed={0.5}
      />
      <ResizeListener />
    </>
  );
};

export default CanvasContent;
