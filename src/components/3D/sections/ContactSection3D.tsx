import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float, Sphere, Html, Center } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'devops.engineer@email.com', position: [-3, 2, 0], color: '#3b82f6' },
    { icon: Phone, label: 'Phone', value: '+977 98XXXXXXXX', position: [0, 3, 1], color: '#10b981' },
    { icon: MapPin, label: 'Location', value: 'Nepal', position: [3, 2, 0], color: '#8b5cf6' }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', position: [-2, 0, 2], color: '#6b7280' },
    { icon: Linkedin, name: 'LinkedIn', position: [0, 0, 3], color: '#0077b5' },
    { icon: Twitter, name: 'Twitter', position: [2, 0, 2], color: '#1da1f2' }
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

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
          Let's Connect
          <meshStandardMaterial 
            color="#ef4444" 
            emissive="#dc2626"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>

      {/* Contact Method Spheres */}
      {contactMethods.map((method, index) => (
        <Float
          key={method.label}
          speed={1 + Math.random() * 0.5}
          rotationIntensity={0.3}
          floatIntensity={0.4}
        >
          <group position={method.position}>
            <Sphere args={[0.8, 16, 16]}>
              <meshStandardMaterial
                color={method.color}
                emissive={method.color}
                emissiveIntensity={0.2}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
            
            <Html
              position={[0, -1.5, 0]}
              center
              distanceFactor={8}
              transform
              occlude
            >
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 text-center">
                <method.icon className="h-5 w-5 text-white mx-auto mb-1" />
                <p className="text-white text-sm font-semibold">{method.label}</p>
                <p className="text-gray-300 text-xs">{method.value}</p>
              </div>
            </Html>
          </group>
        </Float>
      ))}

      {/* Social Media Links */}
      {socialLinks.map((social, index) => (
        <Float
          key={social.name}
          speed={1.5 + Math.random() * 0.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <group position={social.position}>
            <Sphere args={[0.4, 12, 12]}>
              <meshStandardMaterial
                color={social.color}
                emissive={social.color}
                emissiveIntensity={0.3}
                roughness={0.1}
                metalness={0.9}
              />
            </Sphere>
            
            <Html
              position={[0, -0.8, 0]}
              center
              distanceFactor={6}
              transform
              occlude
            >
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2 text-center">
                <social.icon className="h-4 w-4 text-white mx-auto mb-1" />
                <p className="text-white text-xs">{social.name}</p>
              </div>
            </Html>
          </group>
        </Float>
      ))}

      {/* Contact Form */}
      <Html
        position={[0, -3, 0]}
        center
        distanceFactor={15}
        transform
        occlude
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-md w-full"
        >
          <div className="bg-gray-900/90 backdrop-blur-md rounded-xl p-6 border border-gray-700">
            <h3 className="text-white text-xl font-bold mb-4 text-center">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </Html>

      {/* Status Indicator */}
      <Html
        position={[0, -6, 0]}
        center
        distanceFactor={20}
        transform
        occlude
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Available for Opportunities</span>
            </div>
            <p className="text-gray-300 text-sm">
              Actively seeking DevOps roles and open to collaboration
            </p>
          </div>
        </motion.div>
      </Html>
    </group>
  );
};

export default ContactSection3D;