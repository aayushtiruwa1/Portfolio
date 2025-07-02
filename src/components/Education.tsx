import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      level: 'Bachelor\'s Degree',
      institution: 'Softwarica College',
      field: 'Computer Science & Engineering',
      period: '2017 - 2021',
      description: 'Focused on software engineering principles, system design, and emerging technologies.',
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Led student tech society organizing workshops',
        'Completed thesis on "Cloud Infrastructure Automation"',
        'Participated in hackathons and coding competitions'
      ],
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      level: 'Higher Secondary (Class 11 & 12)',
      institution: 'The Times International College',
      field: 'Science (Physics, Chemistry, Mathematics)',
      period: '2015 - 2017',
      description: 'Strong foundation in mathematics and sciences, preparing for engineering studies.',
      achievements: [
        'Graduated with Distinction (85% aggregate)',
        'Active member of Science Club',
        'Participated in inter-school programming contests',
        'Volunteer tutor for junior students'
      ],
      icon: <BookOpen className="h-8 w-8" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      level: 'Secondary Education (School)',
      institution: 'Arun Jyoti Vidya Mandir',
      field: 'General Education',
      period: '2005 - 2015',
      description: 'Comprehensive education with focus on academics, sports, and extracurricular activities.',
      achievements: [
        'School Captain in final year',
        'Winner of district-level science exhibition',
        'Active in debate society and sports teams',
        'Consistent academic performer'
      ],
      icon: <Award className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      level: 'Professional'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2022',
      level: 'Expert'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      year: '2022',
      level: 'Associate'
    },
    {
      name: 'Azure DevOps Engineer Expert',
      issuer: 'Microsoft',
      year: '2021',
      level: 'Expert'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      year: '2021',
      level: 'Associate'
    },
    {
      name: 'Google Cloud Professional DevOps Engineer',
      issuer: 'Google Cloud',
      year: '2023',
      level: 'Professional'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning journey from foundational education to professional certifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="flex-shrink-0 mb-6 lg:mb-0">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${edu.color}`}>
                      <div className="text-white">
                        {edu.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{edu.level}</h4>
                        <div className="flex items-center text-blue-400 mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.institution}
                        </div>
                        <p className="text-lg text-gray-300 mb-2">{edu.field}</p>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{edu.description}</p>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">{cert.name}</h4>
                    <p className="text-blue-400 mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{cert.year}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cert.level === 'Professional' ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30' :
                        cert.level === 'Expert' ? 'bg-red-600/20 text-red-400 border border-red-600/30' :
                        'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                      }`}>
                        {cert.level}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Certified</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                    Verify →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Learning */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Committed to staying updated with the latest technologies and best practices in DevOps and cloud computing. 
              Regularly participating in workshops, webinars, and online courses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Kubernetes Advanced Concepts', 'Site Reliability Engineering', 'Cloud Security', 'Machine Learning for DevOps', 'GitOps Practices'].map((course) => (
                <span
                  key={course}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;