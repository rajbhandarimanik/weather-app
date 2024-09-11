import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
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
    camera.position.set(0, 0, 300);

    // Calculate the target to look at (pointing 45 degrees upward)
    const targetPosition = new THREE.Vector3(0, 0, 0); // Look towards the origin
    const cameraDirection = new THREE.Vector3()
      .subVectors(targetPosition, camera.position)
      .normalize();

    // Set the angle to 45 degrees
    const angle = 45 * (Math.PI / 180); // Convert degrees to radians

    // Compute the new target position based on the angle
    targetPosition.y +=
      Math.tan(angle) * (camera.position.distanceTo(targetPosition) / 2);

    camera.lookAt(targetPosition);

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
      camera={{ position: [0, -200, 300], fov: 60 }}
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
