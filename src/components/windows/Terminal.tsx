import React, { useState, useEffect, useRef } from 'react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: '',
      output: 'Windows Terminal - Aayush Tiruwa Portfolio\nType "help" for available commands.\n'
    }
  ]);
  const [currentDirectory, setCurrentDirectory] = useState('C:\\Users\\Aayush\\Portfolio');
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => `Available commands:
  help     - Show this help message
  about    - Display information about Aayush
  skills   - List technical skills
  projects - Show current projects
  contact  - Display contact information
  clear    - Clear the terminal
  dir      - List directory contents
  cd       - Change directory
  whoami   - Display current user`,

    about: () => `Aayush Tiruwa - Aspiring DevOps Engineer
===========================================
Education: Ethical Hacking & Cyber Security Graduate
Location: Nepal
Status: Actively seeking DevOps opportunities

Passionate about cloud technologies, automation, and infrastructure management.
Currently building hands-on experience through personal projects and certifications.`,

    skills: () => `Technical Skills:
================
Cloud Platforms: AWS, Azure, Google Cloud
Containerization: Docker, Kubernetes
CI/CD: Jenkins, GitHub Actions, GitLab CI
Infrastructure as Code: Terraform, CloudFormation
Configuration Management: Ansible, Chef
Monitoring: Prometheus, Grafana, ELK Stack
Programming: Python, Bash, JavaScript
Version Control: Git, GitHub, GitLab`,

    projects: () => `Current Projects:
================
1. CI/CD Pipeline Automation
   - Status: Completed
   - Tech: Jenkins, Docker, AWS

2. Infrastructure as Code with Terraform
   - Status: In Progress
   - Tech: Terraform, AWS, EC2, S3

3. Kubernetes Learning Cluster
   - Status: Planned
   - Tech: Kubernetes, Docker, Helm`,

    contact: () => `Contact Information:
==================
Email: devops.engineer@email.com
GitHub: github.com/aayushtiruwa
LinkedIn: linkedin.com/in/aayushtiruwa
Location: Nepal

Status: Available for opportunities and collaboration`,

    clear: () => {
      setHistory([]);
      return '';
    },

    dir: () => `Directory of ${currentDirectory}

12/15/2024  10:30 AM    <DIR>          Web Projects
12/15/2024  10:30 AM    <DIR>          DevOps Scripts
12/15/2024  10:30 AM    <DIR>          Certificates
12/15/2024  10:30 AM    <DIR>          Learning Resources
12/15/2024  10:30 AM    <DIR>          Docker Configs
12/15/2024  10:30 AM    <DIR>          Terraform Modules
12/15/2024  10:30 AM         2,345,678 Resume_AayushTiruwa.pdf
12/15/2024  10:30 AM        15,678,901 Portfolio_Screenshots.zip
12/15/2024  10:30 AM             4,234 DevOps_Roadmap.md
12/15/2024  10:30 AM             8,901 AWS_Notes.txt
              4 File(s)     18,037,814 bytes
              6 Dir(s)   1,234,567,890 bytes free`,

    whoami: () => `aayush\\portfolio-user`,

    cd: (args: string[]) => {
      if (args.length === 0) {
        return currentDirectory;
      }
      const newDir = args[0];
      if (newDir === '..') {
        const parts = currentDirectory.split('\\');
        if (parts.length > 1) {
          parts.pop();
          setCurrentDirectory(parts.join('\\'));
          return '';
        }
      } else {
        setCurrentDirectory(`${currentDirectory}\\${newDir}`);
      }
      return '';
    }
  };

  const executeCommand = (command: string) => {
    const [cmd, ...args] = command.toLowerCase().trim().split(' ');
    
    if (cmd === '') return '';
    
    if (commands[cmd as keyof typeof commands]) {
      if (typeof commands[cmd as keyof typeof commands] === 'function') {
        return (commands[cmd as keyof typeof commands] as Function)(args);
      }
    }
    
    return `'${command}' is not recognized as an internal or external command.
Type 'help' for available commands.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const output = executeCommand(input);
      if (input.toLowerCase().trim() === 'clear') {
        setHistory([]);
      } else {
        setHistory(prev => [...prev, { command: input, output }]);
      }
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="h-full bg-black text-green-400 font-mono text-sm flex flex-col">
      <div ref={terminalRef} className="flex-1 p-4 overflow-auto">
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {entry.command && (
              <div className="flex">
                <span className="text-yellow-400">{currentDirectory}{'>'}</span>
                <span className="ml-2">{entry.command}</span>
              </div>
            )}
            {entry.output && (
              <pre className="whitespace-pre-wrap text-green-300 mt-1">
                {entry.output}
              </pre>
            )}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <span className="text-yellow-400 mr-2">{currentDirectory}{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-green-400"
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};

export default Terminal;