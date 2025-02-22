import { useThree } from 'react-three-fiber';
import { useEffect } from 'react';

const ResizeListener = () => {
  const { gl, scene, camera } = useThree(); // Moved this into a child component

  useEffect(() => {
    const handleResize = () => {
      // const width = window.innerWidth;
      // const height = window.innerHeight;
      // camera.aspect = width / height;
      // camera.updateProjectionMatrix();

      // // Rerender the scene with updated size
      // gl.setSize(width, height);
      gl.render(scene, camera);
    };

    // Attach event listener
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [gl, scene, camera]);

  return null;
};

export default ResizeListener;
