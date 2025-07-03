import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Award, Code, Server, Database } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: 'AWS', level: 85, category: 'Cloud' },
    { name: 'Docker', level: 90, category: 'Containerization' },
    { name: 'Kubernetes', level: 80, category: 'Orchestration' },
    { name: 'Terraform', level: 85, category: 'IaC' },
    { name: 'Jenkins', level: 88, category: 'CI/CD' },
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'Linux', level: 90, category: 'OS' },
    { name: 'Git', level: 95, category: 'Version Control' }
  ];

  const projects = [
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built automated deployment pipeline using Jenkins and Docker',
      tech: ['Jenkins', 'Docker', 'AWS', 'Git'],
      status: 'Completed'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Provisioned AWS infrastructure using Terraform',
      tech: ['Terraform', 'AWS', 'EC2', 'S3'],
      status: 'In Progress'
    },
    {
      title: 'Kubernetes Cluster Setup',
      description: 'Deployed and managed Kubernetes cluster for microservices',
      tech: ['Kubernetes', 'Docker', 'Helm', 'Monitoring'],
      status: 'Planned'
    }
  ];

  const certifications = [
    { name: 'AWS Cloud Practitioner', status: 'In Progress', year: '2024' },
    { name: 'Docker Certified Associate', status: 'Planned', year: '2024' },
    { name: 'Terraform Associate', status: 'Planned', year: '2024' }
  ];

  const tabs = [
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <div className="h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
            <img
              src="/1724331503194.jpeg"
              alt="Aayush Tiruwa"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800";
              }}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Aayush Tiruwa</h1>
            <p className="text-blue-100">Aspiring DevOps Engineer</p>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Nepal</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 overflow-auto" style={{ height: 'calc(100% - 200px)' }}>
        {activeTab === 'about' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate DevOps engineer with a strong foundation in cloud technologies, 
                automation, and infrastructure management. Recent graduate in Ethical Hacking & 
                Cyber Security, actively seeking entry-level opportunities to apply my knowledge 
                and continue learning in a professional environment.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Focus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-900">Learning</span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Hands-on projects with Docker, Kubernetes, and AWS
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-900">Certifications</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Working towards AWS and Docker certifications
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.category}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-500">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Learning Projects</h2>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Certification Roadmap</h2>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <div>
                      <h3 className="font-medium text-gray-900">{cert.name}</h3>
                      <p className="text-sm text-gray-500">Target: {cert.year}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    cert.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">devops.engineer@email.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Github className="w-6 h-6 text-gray-800" />
                  <div>
                    <p className="font-medium text-gray-900">GitHub</p>
                    <p className="text-gray-600">github.com/aayushtiruwa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Linkedin className="w-6 h-6 text-blue-700" />
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <p className="text-gray-600">linkedin.com/in/aayushtiruwa</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Current Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Actively seeking opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Open to internships</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Available for freelance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;