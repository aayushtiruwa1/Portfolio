import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene3D from './components/3D/Scene3D';
import LoadingScreen from './components/3D/LoadingScreen';
import Navigation3D from './components/3D/Navigation3D';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {/* 3D Canvas */}
      <Canvas
        camera={{ 
          position: [0, 0, 10], 
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>

      {/* Loading Screen */}
      <Suspense fallback={<LoadingScreen />}>
        <Loader />
      </Suspense>

      {/* 3D Navigation */}
      <Navigation3D />

      {/* Mobile Touch Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed bottom-4 left-4 right-4 md:hidden z-50"
      >
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 text-center">
          <p className="text-white text-sm">
            Swipe to navigate • Pinch to zoom • Tap to interact
          </p>
        </div>
      </motion.div>

      {/* Performance Monitor (Development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-2 rounded text-xs">
          <div id="fps-counter">FPS: --</div>
        </div>
      )}
    </div>
  );
}

export default App;