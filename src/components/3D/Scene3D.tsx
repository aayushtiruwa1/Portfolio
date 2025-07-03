import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows,
  Float,
  Text3D,
  Center,
  useTexture,
  Sphere,
  Box,
  Cylinder
} from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';
import HeroSection3D from './sections/HeroSection3D';
import SkillsSection3D from './sections/SkillsSection3D';
import ProjectsSection3D from './sections/ProjectsSection3D';
import EducationSection3D from './sections/EducationSection3D';
import ContactSection3D from './sections/ContactSection3D';
import ParticleSystem from './effects/ParticleSystem';
import LightingRig from './effects/LightingRig';

const Scene3D = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<any>();
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Section positions in 3D space
  const sectionPositions = [
    { position: [0, 0, 0], rotation: [0, 0, 0] },      // Hero
    { position: [0, -20, 0], rotation: [0, 0, 0] },    // Skills
    { position: [0, -40, 0], rotation: [0, 0, 0] },    // Projects
    { position: [0, -60, 0], rotation: [0, 0, 0] },    // Education
    { position: [0, -80, 0], rotation: [0, 0, 0] },    // Contact
  ];

  // Smooth camera transitions
  const navigateToSection = (sectionIndex: number) => {
    if (isTransitioning || sectionIndex === currentSection) return;
    
    setIsTransitioning(true);
    const targetPosition = sectionPositions[sectionIndex];
    
    // Animate camera position
    const startPosition = camera.position.clone();
    const endPosition = new THREE.Vector3(
      targetPosition.position[0],
      targetPosition.position[1] + 10,
      targetPosition.position[2] + 10
    );
    
    let progress = 0;
    const animateCamera = () => {
      progress += 0.02;
      if (progress >= 1) {
        progress = 1;
        setIsTransitioning(false);
        setCurrentSection(sectionIndex);
      }
      
      // Smooth easing
      const eased = 1 - Math.pow(1 - progress, 3);
      camera.position.lerpVectors(startPosition, endPosition, eased);
      
      if (controlsRef.current) {
        controlsRef.current.target.lerp(
          new THREE.Vector3(...targetPosition.position),
          eased
        );
        controlsRef.current.update();
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateCamera);
      }
    };
    
    animateCamera();
  };

  // Expose navigation function globally
  useEffect(() => {
    (window as any).navigateToSection = navigateToSection;
    return () => {
      delete (window as any).navigateToSection;
    };
  }, [currentSection, isTransitioning]);

  // Performance optimization
  useFrame((state, delta) => {
    // Limit frame rate on mobile
    if (window.innerWidth < 768) {
      if (state.clock.elapsedTime % (1/30) > delta) return;
    }
  });

  return (
    <>
      {/* Lighting */}
      <LightingRig />
      
      {/* Environment */}
      <Environment preset="night" />
      
      {/* Controls */}
      <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={50}
        dampingFactor={0.05}
        enableDamping={true}
      />

      {/* Particle System */}
      <ParticleSystem />

      {/* Ground/Contact Shadows */}
      <ContactShadows
        position={[0, -10, 0]}
        opacity={0.4}
        scale={100}
        blur={2}
        far={20}
      />

      {/* Sections */}
      <group>
        {/* Hero Section */}
        <group position={sectionPositions[0].position}>
          <HeroSection3D />
        </group>

        {/* Skills Section */}
        <group position={sectionPositions[1].position}>
          <SkillsSection3D />
        </group>

        {/* Projects Section */}
        <group position={sectionPositions[2].position}>
          <ProjectsSection3D />
        </group>

        {/* Education Section */}
        <group position={sectionPositions[3].position}>
          <EducationSection3D />
        </group>

        {/* Contact Section */}
        <group position={sectionPositions[4].position}>
          <ContactSection3D />
        </group>
      </group>

      {/* Navigation Indicators */}
      <group position={[15, 0, 0]}>
        {sectionPositions.map((_, index) => (
          <Float
            key={index}
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <Sphere
              position={[0, index * -20, 0]}
              args={[0.2, 16, 16]}
              onClick={() => navigateToSection(index)}
            >
              <meshStandardMaterial
                color={currentSection === index ? "#3b82f6" : "#6b7280"}
                emissive={currentSection === index ? "#1e40af" : "#000000"}
                emissiveIntensity={currentSection === index ? 0.3 : 0}
              />
            </Sphere>
          </Float>
        ))}
      </group>
    </>
  );
};

export default Scene3D;