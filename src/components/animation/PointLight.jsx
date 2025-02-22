import { useThree } from 'react-three-fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

const PointLight = () => {
  const { scene } = useThree();

  useEffect(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1, 1);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;

    const lightHelper = new THREE.PointLightHelper(pointLight, 10);
    scene.add(pointLight);
    scene.add(lightHelper);

    return () => {
      scene.remove(pointLight);
      scene.remove(lightHelper);
    };
  }, [scene]);

  return null;
};

export default PointLight;
