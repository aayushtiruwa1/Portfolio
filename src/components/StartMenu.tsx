import React from 'react';
import { Power, Settings, User, Search } from 'lucide-react';
import { useWindows } from '../contexts/WindowContext';
import { useTheme } from '../contexts/ThemeContext';
import Portfolio from './windows/Portfolio';
import FileExplorer from './windows/FileExplorer';
import Terminal from './windows/Terminal';
import Notepad from './windows/Notepad';
import Calculator from './windows/Calculator';
import SettingsWindow from './windows/Settings';

interface StartMenuProps {
  onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onClose }) => {
  const { openWindow } = useWindows();
  const { toggleTheme } = useTheme();

  const pinnedApps = [
    {
      name: 'Portfolio',
      icon: '👨‍💻',
      onClick: () => {
        openWindow({
          title: 'Aayush Tiruwa - Portfolio',
          content: <Portfolio />,
          icon: '👨‍💻',
          position: { x: 100, y: 50 },
          size: { width: 900, height: 600 }
        });
        onClose();
      }
    },
    {
      name: 'File Explorer',
      icon: '📁',
      onClick: () => {
        openWindow({
          title: 'File Explorer',
          content: <FileExplorer />,
          icon: '📁',
          position: { x: 150, y: 100 },
          size: { width: 800, height: 500 }
        });
        onClose();
      }
    },
    {
      name: 'Terminal',
      icon: '💻',
      onClick: () => {
        openWindow({
          title: 'Windows Terminal',
          content: <Terminal />,
          icon: '💻',
          position: { x: 200, y: 150 },
          size: { width: 700, height: 400 }
        });
        onClose();
      }
    },
    {
      name: 'Notepad',
      icon: '📝',
      onClick: () => {
        openWindow({
          title: 'Notepad',
          content: <Notepad />,
          icon: '📝',
          position: { x: 250, y: 200 },
          size: { width: 600, height: 400 }
        });
        onClose();
      }
    },
    {
      name: 'Calculator',
      icon: '🧮',
      onClick: () => {
        openWindow({
          title: 'Calculator',
          content: <Calculator />,
          icon: '🧮',
          position: { x: 300, y: 250 },
          size: { width: 320, height: 500 }
        });
        onClose();
      }
    },
    {
      name: 'Settings',
      icon: '⚙️',
      onClick: () => {
        openWindow({
          title: 'Settings',
          content: <SettingsWindow />,
          icon: '⚙️',
          position: { x: 350, y: 300 },
          size: { width: 800, height: 600 }
        });
        onClose();
      }
    }
  ];

  return (
    <div className="fixed bottom-12 left-2 w-96 h-96 bg-black/90 backdrop-blur-xl rounded-lg border border-white/20 shadow-2xl z-40 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-medium">Aayush Tiruwa</div>
            <div className="text-white/70 text-sm">DevOps Engineer</div>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
          <input
            type="text"
            placeholder="Type here to search"
            className="w-full bg-white/10 border border-white/20 rounded-md pl-10 pr-4 py-2 text-white placeholder-white/50 text-sm outline-none focus:border-blue-400"
          />
        </div>
      </div>

      {/* Pinned Apps */}
      <div className="p-4">
        <div className="text-white/70 text-xs uppercase tracking-wide mb-3">Pinned</div>
        <div className="grid grid-cols-6 gap-2">
          {pinnedApps.map((app, index) => (
            <button
              key={index}
              onClick={app.onClick}
              className="flex flex-col items-center p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-200">
                {app.icon}
              </div>
              <span className="text-white text-xs text-center">{app.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <Settings className="w-4 h-4" />
            <span className="text-sm">Theme</span>
          </button>
          <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200">
            <Power className="w-4 h-4" />
            <span className="text-sm">Power</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;