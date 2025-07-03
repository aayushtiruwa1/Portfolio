import React, { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import WindowManager from './components/WindowManager';
import ContextMenu from './components/ContextMenu';
import { WindowProvider } from './contexts/WindowContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [contextMenu, setContextMenu] = useState<{x: number, y: number, items: any[]} | null>(null);

  useEffect(() => {
    const handleClick = () => {
      setShowStartMenu(false);
      setContextMenu(null);
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setContextMenu({
        x: e.clientX,
        y: e.clientY,
        items: [
          { label: 'View', icon: '👁️' },
          { label: 'Sort by', icon: '🔄' },
          { label: 'Refresh', icon: '🔄' },
          { label: 'Paste', icon: '📋' },
          { label: 'New', icon: '📄' },
          { label: 'Display settings', icon: '🖥️' },
          { label: 'Personalize', icon: '🎨' }
        ]
      });
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <ThemeProvider>
      <WindowProvider>
        <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative">
          <Desktop />
          <WindowManager />
          <Taskbar onStartClick={() => setShowStartMenu(!showStartMenu)} />
          {showStartMenu && <StartMenu onClose={() => setShowStartMenu(false)} />}
          {contextMenu && (
            <ContextMenu
              x={contextMenu.x}
              y={contextMenu.y}
              items={contextMenu.items}
              onClose={() => setContextMenu(null)}
            />
          )}
        </div>
      </WindowProvider>
    </ThemeProvider>
  );
}

export default App;