import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { GUI } from 'lil-gui';

const SkyShader = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    // Position the camera above the horizon and facing upward
    camera.position.set(0, 500, 0); // Adjust height (y) and distance (z) as needed
    camera.lookAt(0, 0, 0); // Ensure the camera looks towards the origin

    // Create and add the Sky
    const sky = new Sky();
    sky.scale.setScalar(45000);
    scene.add(sky);

    const sun = new THREE.Vector3();

    const effectController = {
      turbidity: 0,
      rayleigh: 3,
      mieCoefficient: 0.002,
      mieDirectionalG: 0.1,
      elevation: 1,
      azimuth: 180,
      exposure: 0.5,
    };

    function updateSky() {
      const uniforms = sky.material.uniforms;
      uniforms['turbidity'].value = effectController.turbidity;
      uniforms['rayleigh'].value = effectController.rayleigh;
      uniforms['mieCoefficient'].value = effectController.mieCoefficient;
      uniforms['mieDirectionalG'].value = effectController.mieDirectionalG;

      const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
      const theta = THREE.MathUtils.degToRad(effectController.azimuth);

      sun.setFromSphericalCoords(1, phi, theta);

      uniforms['sunPosition'].value.copy(sun);
      camera.toneMappingExposure = effectController.exposure;
    }

    updateSky();

    // Initialize GUI for sun parameters
    const gui = new GUI();
    gui.add(effectController, 'turbidity', 0, 10, 1).name('Turbidity');
    gui.add(effectController, 'rayleigh', 0, 10, 0.1).name('Rayleigh');
    gui
      .add(effectController, 'mieCoefficient', 0.0, 0.1, 0.001)
      .name('Mie Coefficient');
    gui
      .add(effectController, 'mieDirectionalG', 0.0, 1, 0.001)
      .name('Mie Directional G');
    gui.add(effectController, 'elevation', -90, 90, 0.1).name('Elevation');
    gui.add(effectController, 'azimuth', -180, 180, 0.1).name('Azimuth');

    gui.onChange(updateSky);

    // Cleanup GUI on component unmount
    return () => {
      gui.destroy();
    };
  }, [camera, scene]);

  return null;
};

export default SkyShader;
