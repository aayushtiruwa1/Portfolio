import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  Text3D, 
  Float, 
  Sphere, 
  Box, 
  Cylinder,
  useTexture,
  Html,
  Center
} from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const HeroSection3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  
  // Animate the floating elements
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Title */}
      <Center position={[0, 4, 0]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Aayush Tiruwa
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#1e40af"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>

      {/* Subtitle */}
      <Center position={[0, 2, 0]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.1}
          curveSegments={12}
        >
          DevOps Engineer
          <meshStandardMaterial 
            color="#10b981" 
            emissive="#059669"
            emissiveIntensity={0.1}
          />
        </Text3D>
      </Center>

      {/* Profile Picture Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere
          ref={sphereRef}
          position={[0, 0, 2]}
          args={[1.5, 32, 32]}
        >
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.8}
            envMapIntensity={1}
          />
        </Sphere>
      </Float>

      {/* Floating Tech Icons */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <Box position={[-4, 1, 1]} args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.2} />
        </Box>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <Cylinder position={[4, 2, 0]} args={[0.3, 0.3, 1, 8]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.2} />
        </Cylinder>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.2}>
        <Sphere position={[-3, -1, 2]} args={[0.4, 16, 16]}>
          <meshStandardMaterial color="#ef4444" emissive="#dc2626" emissiveIntensity={0.2} />
        </Sphere>
      </Float>

      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.6}>
        <Box position={[3, -2, 1]} args={[0.6, 0.3, 0.6]}>
          <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.2} />
        </Box>
      </Float>

      {/* HTML Overlay for Additional Content */}
      <Html
        position={[0, -3, 0]}
        center
        distanceFactor={10}
        transform
        occlude
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center max-w-md"
        >
          <p className="text-white text-lg mb-4 leading-relaxed">
            Passionate about automating infrastructure and building scalable cloud solutions
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              onClick={() => (window as any).navigateToSection?.(4)}
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-full font-semibold transition-all"
              onClick={() => (window as any).navigateToSection?.(2)}
            >
              View Projects
            </motion.button>
          </div>
        </motion.div>
      </Html>

      {/* Ambient Particles */}
      <group>
        {[...Array(20)].map((_, i) => (
          <Float
            key={i}
            speed={Math.random() * 2 + 1}
            rotationIntensity={Math.random()}
            floatIntensity={Math.random()}
          >
            <Sphere
              position={[
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
              ]}
              args={[0.05, 8, 8]}
            >
              <meshStandardMaterial
                color={['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'][Math.floor(Math.random() * 4)]}
                emissiveIntensity={0.5}
              />
            </Sphere>
          </Float>
        ))}
      </group>
    </group>
  );
};

export default HeroSection3D;