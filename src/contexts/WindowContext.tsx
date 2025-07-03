import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface WindowData {
  id: string;
  title: string;
  content: ReactNode;
  icon: string;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

interface WindowContextType {
  windows: WindowData[];
  openWindow: (window: Omit<WindowData, 'id' | 'isMinimized' | 'isMaximized' | 'zIndex'>) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void;
  updateWindowSize: (id: string, size: { width: number; height: number }) => void;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const useWindows = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindows must be used within a WindowProvider');
  }
  return context;
};

export const WindowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1000);

  const openWindow = (windowData: Omit<WindowData, 'id' | 'isMinimized' | 'isMaximized' | 'zIndex'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newWindow: WindowData = {
      ...windowData,
      id,
      isMinimized: false,
      isMaximized: false,
      zIndex: nextZIndex
    };
    setWindows(prev => [...prev, newWindow]);
    setNextZIndex(prev => prev + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(window => window.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(window => 
      window.id === id ? { ...window, isMinimized: !window.isMinimized } : window
    ));
  };

  const maximizeWindow = (id: string) => {
    setWindows(prev => prev.map(window => 
      window.id === id ? { ...window, isMaximized: !window.isMaximized } : window
    ));
  };

  const focusWindow = (id: string) => {
    setWindows(prev => prev.map(window => 
      window.id === id ? { ...window, zIndex: nextZIndex } : window
    ));
    setNextZIndex(prev => prev + 1);
  };

  const updateWindowPosition = (id: string, position: { x: number; y: number }) => {
    setWindows(prev => prev.map(window => 
      window.id === id ? { ...window, position } : window
    ));
  };

  const updateWindowSize = (id: string, size: { width: number; height: number }) => {
    setWindows(prev => prev.map(window => 
      window.id === id ? { ...window, size } : window
    ));
  };

  return (
    <WindowContext.Provider value={{
      windows,
      openWindow,
      closeWindow,
      minimizeWindow,
      maximizeWindow,
      focusWindow,
      updateWindowPosition,
      updateWindowSize
    }}>
      {children}
    </WindowContext.Provider>
  );
};