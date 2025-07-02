import React from 'react';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Server, 
  Database, 
  Monitor, 
  Shield, 
  Code2,
  Settings,
  Workflow
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="h-8 w-8" />,
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Containerization',
      icon: <Container className="h-8 w-8" />,
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Helm'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'CI/CD Tools',
      icon: <Workflow className="h-8 w-8" />,
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Infrastructure as Code',
      icon: <Code2 className="h-8 w-8" />,
      skills: ['Terraform', 'CloudFormation', 'Pulumi', 'ARM Templates'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Configuration Management',
      icon: <Settings className="h-8 w-8" />,
      skills: ['Ansible', 'Chef', 'Puppet', 'SaltStack'],
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Monitoring & Logging',
      icon: <Monitor className="h-8 w-8" />,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="h-8 w-8" />,
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Security & Compliance',
      icon: <Shield className="h-8 w-8" />,
      skills: ['HashiCorp Vault', 'AWS IAM', 'RBAC', 'Security Scanning'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expertise across the entire DevOps toolchain, from infrastructure automation 
            to continuous deployment and monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-gray-600"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between bg-gray-700 rounded-lg px-3 py-2"
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-blue-400' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Python', 'Bash/Shell', 'JavaScript', 'Go', 'YAML', 'JSON', 'PowerShell', 'SQL'].map((lang) => (
                <span
                  key={lang}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;