import React from 'react';
import DesktopIcon from './DesktopIcon';
import { useWindows } from '../contexts/WindowContext';
import Portfolio from './windows/Portfolio';
import FileExplorer from './windows/FileExplorer';
import Terminal from './windows/Terminal';
import Notepad from './windows/Notepad';
import Calculator from './windows/Calculator';
import Settings from './windows/Settings';

const Desktop: React.FC = () => {
  const { openWindow } = useWindows();

  const desktopIcons = [
    {
      name: 'Portfolio',
      icon: '👨‍💻',
      onClick: () => openWindow({
        title: 'Aayush Tiruwa - Portfolio',
        content: <Portfolio />,
        icon: '👨‍💻',
        position: { x: 100, y: 50 },
        size: { width: 900, height: 600 }
      })
    },
    {
      name: 'File Explorer',
      icon: '📁',
      onClick: () => openWindow({
        title: 'File Explorer',
        content: <FileExplorer />,
        icon: '📁',
        position: { x: 150, y: 100 },
        size: { width: 800, height: 500 }
      })
    },
    {
      name: 'Terminal',
      icon: '💻',
      onClick: () => openWindow({
        title: 'Windows Terminal',
        content: <Terminal />,
        icon: '💻',
        position: { x: 200, y: 150 },
        size: { width: 700, height: 400 }
      })
    },
    {
      name: 'Notepad',
      icon: '📝',
      onClick: () => openWindow({
        title: 'Notepad',
        content: <Notepad />,
        icon: '📝',
        position: { x: 250, y: 200 },
        size: { width: 600, height: 400 }
      })
    },
    {
      name: 'Calculator',
      icon: '🧮',
      onClick: () => openWindow({
        title: 'Calculator',
        content: <Calculator />,
        icon: '🧮',
        position: { x: 300, y: 250 },
        size: { width: 320, height: 500 }
      })
    },
    {
      name: 'Settings',
      icon: '⚙️',
      onClick: () => openWindow({
        title: 'Settings',
        content: <Settings />,
        icon: '⚙️',
        position: { x: 350, y: 300 },
        size: { width: 800, height: 600 }
      })
    },
    {
      name: 'Recycle Bin',
      icon: '🗑️',
      onClick: () => {}
    }
  ];

  return (
    <div className="absolute inset-0 p-4">
      <div className="grid grid-cols-1 gap-6 w-fit">
        {desktopIcons.map((icon, index) => (
          <DesktopIcon
            key={index}
            name={icon.name}
            icon={icon.icon}
            onClick={icon.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Desktop;