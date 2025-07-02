import React from 'react';
import { Heart, Code, Server, Cloud } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Server className="h-6 w-6 text-blue-400" />
                <Code className="h-5 w-5 text-green-400" />
                <Cloud className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-lg font-bold text-white">DevOps Engineer</span>
            </div>
            <p className="text-gray-400 mb-4">
              Passionate about automating infrastructure and building scalable cloud solutions 
              that empower development teams to deliver faster and more reliably.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>and lots of ☕</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Core Technologies</h3>
            <div className="grid grid-cols-2 gap-2">
              {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Python', 'Ansible', 'Prometheus'].map((tech) => (
                <span
                  key={tech}
                  className="text-gray-400 text-sm hover:text-blue-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} DevOps Portfolio. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Built with React & Tailwind CSS</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">Status: Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;