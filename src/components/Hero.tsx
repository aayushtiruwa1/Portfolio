import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, GraduationCap } from 'lucide-react';
import HackerComputer3D from './HackerComputer3D';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Profile Picture */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGb128cekJxOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724331503194?e=1756944000&v=beta&t=eU6KbPSLJMDLYMmOjkez2qecULGsk4fPpigLeLN99KQ"
                    alt="Aayush Tiruwa - DevOps Engineer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a different professional image if the first one fails
                      const target = e.target as HTMLImageElement;
                      target.src = "https://media.licdn.com/dms/image/v2/D4D03AQGb128cekJxOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724331503194?e=1756944000&v=beta&t=eU6KbPSLJMDLYMmOjkez2qecULGsk4fPpigLeLN99KQ";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              {/* Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Aayush Tiruwa
                </span>
              </h1>
              
              {/* Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Aspiring
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  DevOps Engineer
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
                Learning to automate infrastructure and build scalable cloud solutions
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                Ethical Hacking & Cyber Security graduate passionate about DevOps practices, cloud technologies, and continuous learning. 
                Building hands-on experience through personal projects and certifications.
              </p>
              
              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-8">
                <GraduationCap className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-medium">Recent Graduate • Seeking Opportunities</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>View My Projects</span>
              </button>
              <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mb-12">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-white/10">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-white/10">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-white/10">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - 3D Computer Animation */}
          <div className="flex justify-center lg:justify-end">
            <HackerComputer3D />
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('skills')}
            className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <div className="flex flex-col items-center space-y-2">
              <ArrowDown className="h-8 w-8 mx-auto group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Explore More</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
