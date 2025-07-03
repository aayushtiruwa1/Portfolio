import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LightingRig = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 10;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 10;
    }
    
    if (spotLightRef.current) {
      spotLightRef.current.position.y = 10 + Math.sin(state.clock.elapsedTime * 0.3) * 2;
    }
  });

  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.3} color="#4a5568" />
      
      {/* Main Directional Light */}
      <directionalLight
        ref={lightRef}
        position={[10, 10, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Accent Spot Light */}
      <spotLight
        ref={spotLightRef}
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#3b82f6"
        castShadow
      />
      
      {/* Fill Light */}
      <pointLight
        position={[-10, 5, -10]}
        intensity={0.3}
        color="#8b5cf6"
      />
      
      {/* Rim Light */}
      <pointLight
        position={[10, 5, 10]}
        intensity={0.2}
        color="#10b981"
      />
      
      {/* Dynamic Color Lights */}
      <pointLight
        position={[0, -5, 5]}
        intensity={0.4}
        color="#f59e0b"
      />
    </>
  );
};

export default LightingRig;