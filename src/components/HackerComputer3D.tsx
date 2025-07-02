import React, { useEffect, useRef } from 'react';

const HackerComputer3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      const computer = container.querySelector('.computer-3d') as HTMLElement;
      if (computer) {
        computer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
      }
    };

    const handleMouseLeave = () => {
      const computer = container.querySelector('.computer-3d') as HTMLElement;
      if (computer) {
        computer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 flex items-center justify-center perspective-1000"
    >
      <div className="computer-3d transition-transform duration-300 ease-out">
        {/* Computer Base */}
        <div className="relative">
          {/* Monitor */}
          <div className="relative">
            {/* Monitor Frame */}
            <div className="w-80 h-52 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl border-4 border-gray-700 relative overflow-hidden">
              {/* Screen */}
              <div className="absolute inset-2 bg-black rounded-md overflow-hidden">
                {/* Hacker Terminal */}
                <div className="w-full h-full bg-gradient-to-br from-green-900 to-black p-4 font-mono text-green-400 text-xs leading-relaxed overflow-hidden">
                  <div className="animate-typing">
                    <div className="mb-2">
                      <span className="text-green-300">root@devops:~$</span> <span className="animate-pulse">_</span>
                    </div>
                    <div className="space-y-1 opacity-80">
                      <div className="animate-fade-in-1">Initializing DevOps environment...</div>
                      <div className="animate-fade-in-2">Loading Kubernetes cluster...</div>
                      <div className="animate-fade-in-3">Connecting to AWS services...</div>
                      <div className="animate-fade-in-4">Docker containers: [RUNNING]</div>
                      <div className="animate-fade-in-5">CI/CD pipeline: [ACTIVE]</div>
                      <div className="animate-fade-in-6">Monitoring systems: [ONLINE]</div>
                      <div className="animate-fade-in-7 text-green-300">System status: ALL SYSTEMS GO ✓</div>
                    </div>
                  </div>
                  
                  {/* Matrix-style falling code */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-green-500 opacity-20 animate-matrix-fall"
                        style={{
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 5}s`,
                          animationDuration: `${3 + Math.random() * 4}s`
                        }}
                      >
                        {Math.random().toString(36).substring(2, 8)}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Screen Glow Effect */}
                <div className="absolute inset-0 bg-green-400 opacity-5 animate-pulse"></div>
              </div>
              
              {/* Monitor Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 transform rotate-12"></div>
            </div>
            
            {/* Monitor Stand */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-lg"></div>
              <div className="w-24 h-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full mt-1 shadow-inner"></div>
            </div>
          </div>
          
          {/* Keyboard */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-72 h-16 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-xl border border-gray-600">
            {/* Keyboard Keys */}
            <div className="grid grid-cols-12 gap-1 p-2 h-full">
              {[...Array(36)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-700 rounded-sm shadow-inner animate-key-glow"
                  style={{
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Mouse */}
          <div className="absolute -bottom-12 -right-8 w-12 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full shadow-lg border border-gray-600">
            <div className="w-2 h-6 bg-gray-600 rounded-full mx-auto mt-2"></div>
            <div className="w-1 h-1 bg-red-400 rounded-full mx-auto mt-1 animate-pulse"></div>
          </div>
          
          {/* Floating Code Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute text-blue-400 opacity-60 animate-float-code font-mono text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 6}s`
                }}
              >
                {['kubectl', 'docker', 'terraform', 'ansible', 'jenkins', 'aws', 'k8s', 'ci/cd'][Math.floor(Math.random() * 8)]}
              </div>
            ))}
          </div>
          
          {/* Holographic Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20 blur-xl animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HackerComputer3D;