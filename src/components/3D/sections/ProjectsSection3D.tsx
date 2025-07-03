import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float, Box, Html, Center } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'CI/CD Pipeline',
      description: 'Automated deployment pipeline with GitHub Actions',
      tech: ['React', 'GitHub Actions', 'Netlify'],
      status: 'Completed',
      position: [-4, 2, 0],
      color: '#10b981'
    },
    {
      title: 'Docker Lab',
      description: 'Containerized web application with multi-stage builds',
      tech: ['Docker', 'Node.js', 'Docker Compose'],
      status: 'Completed',
      position: [0, 3, 1],
      color: '#3b82f6'
    },
    {
      title: 'Linux Server Setup',
      description: 'Virtual server with monitoring and security',
      tech: ['Ubuntu', 'Nginx', 'Prometheus', 'Grafana'],
      status: 'Completed',
      position: [4, 2, 0],
      color: '#8b5cf6'
    },
    {
      title: 'Terraform IaC',
      description: 'Infrastructure as Code with AWS resources',
      tech: ['Terraform', 'AWS', 'EC2', 'S3'],
      status: 'In Progress',
      position: [-2, 0, 2],
      color: '#f59e0b'
    },
    {
      title: 'Kubernetes Cluster',
      description: 'Local K8s cluster for learning orchestration',
      tech: ['Kubernetes', 'Minikube', 'kubectl'],
      status: 'Planned',
      position: [2, 0, 2],
      color: '#ef4444'
    }
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
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
          Learning Projects
          <meshStandardMaterial 
            color="#f59e0b" 
            emissive="#d97706"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>

      {/* Project Cubes */}
      {projects.map((project, index) => (
        <Float
          key={project.title}
          speed={1 + Math.random() * 0.5}
          rotationIntensity={0.3}
          floatIntensity={0.3}
        >
          <group position={project.position}>
            <Box
              args={[1.5, 1.5, 1.5]}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <meshStandardMaterial
                color={project.color}
                emissive={project.color}
                emissiveIntensity={selectedProject === index ? 0.4 : 0.1}
                roughness={0.2}
                metalness={0.8}
              />
            </Box>
            
            <Html
              position={[0, -1.5, 0]}
              center
              distanceFactor={8}
              transform
              occlude
            >
              <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                <p className="text-white text-sm font-semibold">{project.title}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'Completed' ? 'bg-green-600/20 text-green-400' :
                  project.status === 'In Progress' ? 'bg-blue-600/20 text-blue-400' :
                  'bg-yellow-600/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
            </Html>
          </group>
        </Float>
      ))}

      {/* Project Details Modal */}
      <Html
        position={[0, -3, 0]}
        center
        distanceFactor={15}
        transform
        occlude
      >
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-gray-900/90 backdrop-blur-md rounded-xl p-6 border border-gray-700 max-w-md"
            >
              <h3 className="text-white text-xl font-bold mb-2">
                {projects[selectedProject].title}
              </h3>
              <p className="text-gray-300 mb-4">
                {projects[selectedProject].description}
              </p>
              <div className="mb-4">
                <h4 className="text-gray-400 text-sm font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Html>

      {/* Learning Philosophy */}
      <Html
        position={[0, -5, 0]}
        center
        distanceFactor={20}
        transform
        occlude
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-white text-lg font-semibold mb-3">Learning Philosophy</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I believe in learning by doing. Each project builds practical skills while exploring 
              real-world DevOps challenges, combining theoretical knowledge with hands-on experience.
            </p>
          </div>
        </motion.div>
      </Html>
    </group>
  );
};

export default ProjectsSection3D;