import React, { useEffect } from 'react';
import { Canvas as R3FCanvas } from '@react-three/fiber';
import { Leva, useControls } from 'leva';
import CanvasContent from './CanvasContent';
import UpdateExposure from './UpdateExposure';

const Canvas = () => {
  const { exposure, useManualExposure } = useControls({
    exposure: {
      value: 0.1,
      min: 0,
      max: 1,
      step: 0.0001,
    },
    useManualExposure: {
      value: false,
      label: 'Use Exposure',
    },
  });

  const {
    turbidity,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
    azimuth,
    time,
    useManualControls,
  } = useControls({
    useManualControls: {
      value: false,
      label: 'Use Manual Controls',
    },
    turbidity: {
      value: 2,
      min: 0,
      max: 10,
      step: 0.1,
      label: 'Turbidity',
    },
    rayleigh: {
      value: 2,
      min: 0,
      max: 4,
      step: 0.001,
      label: 'Rayleigh',
    },
    mieCoefficient: {
      value: 0.005,
      min: 0,
      max: 0.1,
      step: 0.001,
      label: 'Mie Coefficient',
    },
    mieDirectionalG: {
      value: 0.8,
      min: 0,
      max: 1,
      step: 0.001,
      label: 'Mie Directional G',
    },
    azimuth: {
      value: 180,
      min: -180,
      max: 180,
      step: 0.1,
      label: 'Azimuth',
    },
    time: { value: 300, min: 0, max: 1440, step: 1, label: 'Time' },
  });

  return (
    <>
      <Leva collapsed={true} />
      <R3FCanvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        camera={{ position: [0, -24, 100], fov: 60 }}
      >
        <UpdateExposure
          manualExposure={exposure}
          time={time}
          useManualExposure={useManualExposure}
        />
        <CanvasContent
          turbidity={turbidity}
          rayleigh={rayleigh}
          mieCoefficient={mieCoefficient}
          mieDirectionalG={mieDirectionalG}
          azimuth={azimuth}
          time={time}
          useManualControls={useManualControls}
        />
      </R3FCanvas>
    </>
  );
};

export default Canvas;
