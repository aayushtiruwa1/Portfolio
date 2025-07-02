import React from 'react';
import { Calendar, ExternalLink, Github, Zap, BookOpen, Award, Play, Code, Server, Database } from 'lucide-react';

const Projects = () => {
  const learningProjects = [
    {
      title: 'Personal Website with CI/CD',
      description: 'Built a responsive portfolio website and implemented automated deployment using GitHub Actions.',
      duration: '2 weeks',
      technologies: ['React', 'GitHub Actions', 'Netlify', 'HTML/CSS'],
      achievements: [
        'Set up automated testing and deployment pipeline',
        'Implemented responsive design with modern CSS',
        'Configured custom domain and SSL certificates',
        'Added performance monitoring and analytics'
      ],
      learnings: ['CI/CD fundamentals', 'Git workflows', 'Web deployment', 'DNS configuration'],
      status: 'Completed',
      difficulty: 'Beginner',
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'Docker Containerization Lab',
      description: 'Containerized a simple web application and learned Docker fundamentals through hands-on practice.',
      duration: '1 week',
      technologies: ['Docker', 'Node.js', 'Express', 'Docker Compose'],
      achievements: [
        'Created multi-stage Dockerfile for optimization',
        'Set up development environment with Docker Compose',
        'Implemented container health checks',
        'Learned volume management and networking'
      ],
      learnings: ['Container concepts', 'Docker CLI', 'Image optimization', 'Container orchestration basics'],
      status: 'Completed',
      difficulty: 'Beginner',
      icon: <Server className="h-6 w-6" />
    },
    {
      title: 'Linux Server Setup & Monitoring',
      description: 'Set up a virtual Linux server and implemented basic monitoring using free tools.',
      duration: '3 weeks',
      technologies: ['Ubuntu', 'Nginx', 'Prometheus', 'Grafana', 'VirtualBox'],
      achievements: [
        'Configured web server with SSL certificates',
        'Set up system monitoring dashboards',
        'Implemented log rotation and backup scripts',
        'Configured firewall and basic security measures'
      ],
      learnings: ['Linux administration', 'System monitoring', 'Security basics', 'Shell scripting'],
      status: 'Completed',
      difficulty: 'Intermediate',
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'Infrastructure as Code with Terraform',
      description: 'Learning to provision cloud resources using Terraform on AWS free tier.',
      duration: 'Ongoing',
      technologies: ['Terraform', 'AWS', 'EC2', 'S3', 'IAM'],
      achievements: [
        'Created reusable Terraform modules',
        'Provisioned EC2 instances and S3 buckets',
        'Implemented proper state management',
        'Set up basic networking and security groups'
      ],
      learnings: ['Infrastructure as Code', 'AWS services', 'Resource management', 'Cloud security'],
      status: 'In Progress',
      difficulty: 'Intermediate',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Kubernetes Learning Cluster',
      description: 'Setting up a local Kubernetes cluster to learn container orchestration concepts.',
      duration: 'Planned',
      technologies: ['Kubernetes', 'Minikube', 'kubectl', 'YAML'],
      achievements: [
        'Plan to deploy sample applications',
        'Learn pod and service management',
        'Understand ConfigMaps and Secrets',
        'Practice rolling updates and scaling'
      ],
      learnings: ['Container orchestration', 'Kubernetes concepts', 'Service mesh basics', 'Application deployment'],
      status: 'Planned',
      difficulty: 'Advanced',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'Automated Testing Pipeline',
      description: 'Building a comprehensive testing pipeline for a sample application.',
      duration: 'Planned',
      technologies: ['Jest', 'GitHub Actions', 'SonarQube', 'Docker'],
      achievements: [
        'Implement unit and integration tests',
        'Set up code quality checks',
        'Configure automated security scanning',
        'Create test reporting dashboards'
      ],
      learnings: ['Test automation', 'Quality gates', 'Security scanning', 'Pipeline optimization'],
      status: 'Planned',
      difficulty: 'Intermediate',
      icon: <Award className="h-6 w-6" />
    }
  ];

  const certificationGoals = [
    {
      name: 'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      status: 'In Progress',
      target: 'Q2 2025',
      description: 'Foundation certification covering AWS cloud concepts and services'
    },
    {
      name: 'Docker Certified Associate',
      provider: 'Docker Inc.',
      status: 'Planned',
      target: 'Q3 2025',
      description: 'Validates skills in containerization and Docker ecosystem'
    },
    {
      name: 'Terraform Associate',
      provider: 'HashiCorp',
      status: 'Planned',
      target: 'Q4 2025',
      description: 'Infrastructure as Code certification for cloud provisioning'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'In Progress': return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
      case 'Planned': return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-600/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-600/20 text-yellow-400';
      case 'Advanced': return 'bg-red-600/20 text-red-400';
      default: return 'bg-gray-600/20 text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Learning Projects & Goals
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hands-on projects and learning experiences that demonstrate my journey in DevOps and cloud technologies
          </p>
        </div>

        {/* Learning Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Hands-On Learning Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {learningProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{project.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Key Achievements</h5>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Key Learnings</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.learnings.map((learning) => (
                      <span
                        key={learning}
                        className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs border border-green-600/30"
                      >
                        {learning}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </button>
                  {project.status === 'Completed' && (
                    <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </button>
                  )}
                  <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Goals */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Certification Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationGoals.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="h-8 w-8 text-yellow-400" />
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-blue-400 mb-2">{cert.provider}</p>
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Target: {cert.target}</span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Learning Philosophy</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              I believe in learning by doing. Each project is designed to build practical skills while exploring 
              real-world DevOps challenges. My goal is to combine theoretical knowledge with hands-on experience 
              to become a well-rounded DevOps professional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Hands-on Learning', 'Open Source Contribution', 'Community Engagement', 'Continuous Improvement', 'Best Practices'].map((principle) => (
                <span
                  key={principle}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;