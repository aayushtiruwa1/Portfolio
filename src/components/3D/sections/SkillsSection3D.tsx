import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float, Box, Sphere, Html, Center } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const SkillsSection3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  const skills = [
    { name: 'AWS', color: '#ff9900', position: [-6, 2, 0] },
    { name: 'Docker', color: '#2496ed', position: [-3, 3, 1] },
    { name: 'Kubernetes', color: '#326ce5', position: [0, 4, 0] },
    { name: 'Terraform', color: '#623ce4', position: [3, 3, 1] },
    { name: 'Jenkins', color: '#d33833', position: [6, 2, 0] },
    { name: 'Python', color: '#3776ab', position: [-4, 0, 2] },
    { name: 'Ansible', color: '#ee0000', position: [0, 1, 3] },
    { name: 'Prometheus', color: '#e6522c', position: [4, 0, 2] },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Section Title */}
      <Center position={[0, 6, 0]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1.2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
        >
          Technical Skills
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#7c3aed"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>

      {/* Skill Cubes */}
      {skills.map((skill, index) => (
        <Float
          key={skill.name}
          speed={1 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <group position={skill.position}>
            <Box args={[1, 1, 1]}>
              <meshStandardMaterial
                color={skill.color}
                emissive={skill.color}
                emissiveIntensity={0.2}
                roughness={0.3}
                metalness={0.7}
              />
            </Box>
            
            <Html
              position={[0, -1, 0]}
              center
              distanceFactor={8}
              transform
              occlude
            >
              <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1">
                <p className="text-white text-sm font-semibold">{skill.name}</p>
              </div>
            </Html>
          </group>
        </Float>
      ))}

      {/* Skill Categories */}
      <Html
        position={[0, -2, 0]}
        center
        distanceFactor={15}
        transform
        occlude
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
        >
          {[
            { title: 'Cloud Platforms', skills: ['AWS', 'Azure', 'GCP'] },
            { title: 'Containers', skills: ['Docker', 'Kubernetes', 'Helm'] },
            { title: 'CI/CD', skills: ['Jenkins', 'GitLab', 'GitHub Actions'] },
            { title: 'Monitoring', skills: ['Prometheus', 'Grafana', 'ELK'] },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
            >
              <h3 className="text-white font-semibold mb-2">{category.title}</h3>
              <div className="space-y-1">
                {category.skills.map((skill) => (
                  <div key={skill} className="text-gray-300 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Html>

      {/* Connecting Lines */}
      <group>
        {skills.map((skill, index) => (
          <line key={`line-${index}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  0, 0, 0,
                  skill.position[0], skill.position[1], skill.position[2]
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#4b5563" opacity={0.3} transparent />
          </line>
        ))}
      </group>
    </group>
  );
};

export default SkillsSection3D;