import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { Sky } from 'three/examples/jsm/objects/Sky';

const SkyShader = ({
  turbidity,
  rayleigh,
  mieCoefficient,
  mieDirectionalG,
  elevation,
  azimuth,
}) => {
  const { scene } = useThree();
  const skyRef = useRef();

  useEffect(() => {
    // Create the Sky and store it in a ref
    const sky = new Sky();
    sky.scale.setScalar(45000);
    scene.add(sky);
    skyRef.current = sky;

    const sun = new THREE.Vector3();

    function updateSky() {
      const uniforms = sky.material.uniforms; // Access sky uniforms
      uniforms['turbidity'].value = turbidity;
      uniforms['rayleigh'].value = rayleigh;
      uniforms['mieCoefficient'].value = mieCoefficient;
      uniforms['mieDirectionalG'].value = mieDirectionalG;

      // Calculate sun position based on elevation and azimuth
      const phi = THREE.MathUtils.degToRad(90 - elevation);
      const theta = THREE.MathUtils.degToRad(azimuth);

      sun.setFromSphericalCoords(1, phi, theta);
      uniforms['sunPosition'].value.copy(sun);
    }

    updateSky(); // Initial update

    // Cleanup when the component is unmounted
    return () => {
      scene.remove(sky);
    };
  }, [
    scene,
    turbidity,
    rayleigh,
    mieCoefficient,
    mieDirectionalG,
    elevation,
    azimuth,
  ]);

  return null;
};

export default SkyShader;
