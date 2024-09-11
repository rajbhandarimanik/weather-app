import React, { useState, useEffect } from 'react';
import { Canvas as R3FCanvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SkyShader from '../animation/SkyShader';
import CameraGUI from './CameraGui';

const ResizeListener = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update camera aspect ratio
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      // Update renderer size
      gl.setSize(width, height);
      gl.setPixelRatio(window.devicePixelRatio); // Ensure proper resolution
    };

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Initial resize call
    handleResize();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [camera, gl]);

  return null;
};

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Set the camera's position
    camera.position.set(0, 100, 300);

    // Make the camera look at the origin (or any point you want)
    camera.lookAt(0, 100, 0); // Adjust these values to make the camera face upwards or towards a specific target

    // Update the projection matrix after making changes to the camera
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

const Canvas = () => {
  return (
    <R3FCanvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      camera={{ position: [0, 100, 300], fov: 60 }}
    >
      <SkyShader />
      <OrbitControls />
      <ResizeListener />
      <CameraSetup /> {/* This component sets the lookAt for the camera */}
      <CameraGUI />
    </R3FCanvas>
  );
};

export default Canvas;
