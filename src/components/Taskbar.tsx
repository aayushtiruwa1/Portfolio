import React, { useState, useEffect } from 'react';
import { Search, Wifi, Volume2, Battery, Settings } from 'lucide-react';
import { useWindows } from '../contexts/WindowContext';

interface TaskbarProps {
  onStartClick: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ onStartClick }) => {
  const { windows, focusWindow, minimizeWindow } = useWindows();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center px-2 z-50">
      {/* Start Button */}
      <button
        onClick={onStartClick}
        className="flex items-center justify-center w-12 h-8 rounded hover:bg-white/10 transition-colors duration-200"
      >
        <div className="text-2xl">🪟</div>
      </button>

      {/* Search */}
      <div className="flex items-center ml-2 bg-white/10 rounded-md px-3 py-1 w-64">
        <Search className="w-4 h-4 text-white/70 mr-2" />
        <input
          type="text"
          placeholder="Type here to search"
          className="bg-transparent text-white placeholder-white/50 text-sm outline-none flex-1"
        />
      </div>

      {/* Task View */}
      <button className="ml-2 w-8 h-8 rounded hover:bg-white/10 transition-colors duration-200 flex items-center justify-center">
        <div className="text-white text-lg">⊞</div>
      </button>

      {/* Open Windows */}
      <div className="flex items-center ml-4 space-x-1">
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => window.isMinimized ? focusWindow(window.id) : minimizeWindow(window.id)}
            className={`flex items-center px-3 py-1 rounded text-sm transition-colors duration-200 ${
              window.isMinimized 
                ? 'bg-white/10 text-white/70' 
                : 'bg-white/20 text-white border-b-2 border-blue-400'
            }`}
          >
            <span className="mr-2">{window.icon}</span>
            <span className="max-w-32 truncate">{window.title}</span>
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="ml-auto flex items-center space-x-2 text-white">
        <button className="p-1 rounded hover:bg-white/10 transition-colors duration-200">
          <Wifi className="w-4 h-4" />
        </button>
        <button className="p-1 rounded hover:bg-white/10 transition-colors duration-200">
          <Volume2 className="w-4 h-4" />
        </button>
        <button className="p-1 rounded hover:bg-white/10 transition-colors duration-200">
          <Battery className="w-4 h-4" />
        </button>
        
        {/* Clock */}
        <div className="text-right text-xs px-2 cursor-pointer hover:bg-white/10 rounded transition-colors duration-200">
          <div className="text-white font-medium">{formatTime(currentTime)}</div>
          <div className="text-white/70">{formatDate(currentTime)}</div>
        </div>

        {/* Notifications */}
        <button className="p-1 rounded hover:bg-white/10 transition-colors duration-200">
          <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
        </button>
      </div>
    </div>
  );
};

export default Taskbar;