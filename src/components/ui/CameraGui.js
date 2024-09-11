// src/components/CameraGUI.js
import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { GUI } from 'lil-gui';

const CameraGui = () => {
  const { camera } = useThree();

  useEffect(() => {
    const gui = new GUI();
    const cameraFolder = gui.addFolder('Camera');

    // Add camera position controls
    cameraFolder.add(camera.position, 'x', -1000, 1000, 0.1).name('Position X');
    cameraFolder.add(camera.position, 'y', -1000, 1000, 0.1).name('Position Y');
    cameraFolder.add(camera.position, 'z', -1000, 1000, 0.1).name('Position Z');

    // Add field of view (fov) control
    cameraFolder
      .add(camera, 'fov', 10, 100, 1)
      .name('Field of View')
      .onChange(() => {
        camera.updateProjectionMatrix();
      });

    // Add zoom control
    cameraFolder
      .add(camera, 'zoom', 0.1, 5, 0.1)
      .name('Zoom')
      .onChange(() => {
        camera.updateProjectionMatrix();
      });

    cameraFolder.open();

    // Cleanup GUI on component unmount
    return () => {
      gui.destroy();
    };
  }, [camera]);

  return null;
};

export default CameraGui;
