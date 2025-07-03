import React, { useState } from 'react';
import { Save, FileText, Edit } from 'lucide-react';

const Notepad: React.FC = () => {
  const [content, setContent] = useState(`# Aayush Tiruwa - DevOps Engineer Portfolio

## About Me
Recent graduate in Ethical Hacking & Cyber Security with a passion for DevOps practices and cloud technologies. Currently seeking entry-level opportunities to apply my knowledge and continue learning in a professional environment.

## Current Learning Focus
- AWS Cloud Services and Architecture
- Docker Containerization and Best Practices
- Kubernetes Orchestration and Management
- Infrastructure as Code with Terraform
- CI/CD Pipeline Development with Jenkins
- Configuration Management with Ansible
- Monitoring and Logging with Prometheus/Grafana

## Recent Projects
1. **Personal Website CI/CD Pipeline**
   - Automated deployment using GitHub Actions
   - Containerized application with Docker
   - Deployed to cloud infrastructure

2. **Infrastructure Automation Lab**
   - Provisioned AWS resources using Terraform
   - Implemented monitoring and alerting
   - Documented best practices and lessons learned

3. **Kubernetes Learning Environment**
   - Set up local cluster with Minikube
   - Deployed sample applications
   - Practiced scaling and rolling updates

## Certification Goals (2024)
- [ ] AWS Certified Cloud Practitioner
- [ ] Docker Certified Associate
- [ ] HashiCorp Certified: Terraform Associate
- [ ] Certified Kubernetes Administrator (CKA)

## Contact Information
Email: devops.engineer@email.com
GitHub: github.com/aayushtiruwa
LinkedIn: linkedin.com/in/aayushtiruwa

## Notes
- Actively participating in DevOps community forums
- Contributing to open-source projects when possible
- Attending virtual conferences and webinars
- Building a home lab for hands-on practice

---
Last updated: December 2024
`);

  const [fileName, setFileName] = useState('Portfolio_Notes.txt');
  const [isModified, setIsModified] = useState(false);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setIsModified(true);
  };

  const handleSave = () => {
    // Simulate save action
    setIsModified(false);
    console.log('File saved:', fileName);
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Menu Bar */}
      <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">
              {fileName}{isModified ? ' *' : ''}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleSave}
            className="flex items-center space-x-1 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors duration-200"
          >
            <Save className="w-3 h-3" />
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 p-4">
        <textarea
          value={content}
          onChange={handleContentChange}
          className="w-full h-full resize-none outline-none font-mono text-sm leading-relaxed"
          placeholder="Start typing..."
        />
      </div>

      {/* Status Bar */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-600 flex justify-between">
        <span>Lines: {content.split('\n').length} | Characters: {content.length}</span>
        <span>{isModified ? 'Modified' : 'Saved'}</span>
      </div>
    </div>
  );
};

export default Notepad;