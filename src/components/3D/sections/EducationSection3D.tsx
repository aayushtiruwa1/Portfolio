import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float, Cylinder, Html, Center } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const EducationSection3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  const education = [
    {
      level: "Bachelor's Degree",
      institution: 'Softwarica College',
      field: 'Computer Science & Engineering',
      period: '2017 - 2021',
      position: [-3, 2, 0],
      color: '#3b82f6'
    },
    {
      level: 'Higher Secondary',
      institution: 'The Times International College',
      field: 'Science (PCM)',
      period: '2015 - 2017',
      position: [0, 3, 1],
      color: '#10b981'
    },
    {
      level: 'Secondary Education',
      institution: 'Arun Jyoti Vidya Mandir',
      field: 'General Education',
      period: '2005 - 2015',
      position: [3, 2, 0],
      color: '#f59e0b'
    }
  ];

  const certifications = [
    { name: 'AWS Cloud Practitioner', status: 'In Progress', position: [-4, 0, 2] },
    { name: 'Docker Certified Associate', status: 'Planned', position: [0, 0, 3] },
    { name: 'Terraform Associate', status: 'Planned', position: [4, 0, 2] }
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
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
          Education
          <meshStandardMaterial 
            color="#10b981" 
            emissive="#059669"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>

      {/* Education Cylinders */}
      {education.map((edu, index) => (
        <Float
          key={edu.level}
          speed={1 + Math.random() * 0.5}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <group position={edu.position}>
            <Cylinder args={[0.8, 0.8, 2, 8]}>
              <meshStandardMaterial
                color={edu.color}
                emissive={edu.color}
                emissiveIntensity={0.15}
                roughness={0.3}
                metalness={0.7}
              />
            </Cylinder>
            
            <Html
              position={[0, -2, 0]}
              center
              distanceFactor={8}
              transform
              occlude
            >
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 text-center max-w-xs">
                <h3 className="text-white text-sm font-bold mb-1">{edu.level}</h3>
                <p className="text-blue-400 text-xs mb-1">{edu.institution}</p>
                <p className="text-gray-300 text-xs mb-1">{edu.field}</p>
                <p className="text-gray-400 text-xs">{edu.period}</p>
              </div>
            </Html>
          </group>
        </Float>
      ))}

      {/* Certification Goals */}
      {certifications.map((cert, index) => (
        <Float
          key={cert.name}
          speed={1.5 + Math.random() * 0.5}
          rotationIntensity={0.4}
          floatIntensity={0.4}
        >
          <group position={cert.position}>
            <Cylinder args={[0.4, 0.4, 0.8, 6]}>
              <meshStandardMaterial
                color={cert.status === 'In Progress' ? '#3b82f6' : '#6b7280'}
                emissive={cert.status === 'In Progress' ? '#1e40af' : '#374151'}
                emissiveIntensity={0.2}
                roughness={0.4}
                metalness={0.6}
              />
            </Cylinder>
            
            <Html
              position={[0, -1, 0]}
              center
              distanceFactor={6}
              transform
              occlude
            >
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-white text-xs font-semibold">{cert.name}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  cert.status === 'In Progress' 
                    ? 'bg-blue-600/20 text-blue-400' 
                    : 'bg-yellow-600/20 text-yellow-400'
                }`}>
                  {cert.status}
                </span>
              </div>
            </Html>
          </group>
        </Float>
      ))}

      {/* Academic Achievements */}
      <Html
        position={[0, -3, 0]}
        center
        distanceFactor={15}
        transform
        occlude
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Academic Excellence',
                items: ['Dean\'s List Recognition', 'Thesis on Cloud Automation', 'Tech Society Leadership']
              },
              {
                title: 'Practical Experience',
                items: ['Hackathon Participation', 'Open Source Contributions', 'Workshop Organization']
              },
              {
                title: 'Continuous Learning',
                items: ['Professional Certifications', 'Online Course Completion', 'Industry Workshops']
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <h3 className="text-white font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-gray-300 text-sm flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Html>
    </group>
  );
};

export default EducationSection3D;