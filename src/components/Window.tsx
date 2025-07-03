import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Minimize2, Maximize2, X, Minus } from 'lucide-react';
import { useWindows, WindowData } from '../contexts/WindowContext';

interface WindowProps {
  window: WindowData;
}

const Window: React.FC<WindowProps> = ({ window }) => {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindowPosition } = useWindows();
  const nodeRef = useRef(null);

  const handleDrag = (e: any, data: any) => {
    updateWindowPosition(window.id, { x: data.x, y: data.y });
  };

  const handleFocus = () => {
    focusWindow(window.id);
  };

  if (window.isMinimized) {
    return null;
  }

  const windowStyle = window.isMaximized
    ? { width: '100vw', height: 'calc(100vh - 48px)', top: 0, left: 0 }
    : { 
        width: window.size.width, 
        height: window.size.height,
        top: window.position.y,
        left: window.position.x
      };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      position={window.isMaximized ? { x: 0, y: 0 } : window.position}
      onDrag={handleDrag}
      disabled={window.isMaximized}
    >
      <div
        ref={nodeRef}
        className="absolute bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 overflow-hidden"
        style={{ 
          ...windowStyle,
          zIndex: window.zIndex,
          borderRadius: window.isMaximized ? '0' : '8px'
        }}
        onClick={handleFocus}
      >
        {/* Window Header */}
        <div className="window-header flex items-center justify-between h-8 bg-gray-100/90 border-b border-gray-200/50 px-3 cursor-move">
          <div className="flex items-center space-x-2">
            <span className="text-sm">{window.icon}</span>
            <span className="text-sm font-medium text-gray-800">{window.title}</span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => minimizeWindow(window.id)}
              className="w-6 h-6 rounded hover:bg-gray-200/50 flex items-center justify-center transition-colors duration-200"
            >
              <Minus className="w-3 h-3 text-gray-600" />
            </button>
            <button
              onClick={() => maximizeWindow(window.id)}
              className="w-6 h-6 rounded hover:bg-gray-200/50 flex items-center justify-center transition-colors duration-200"
            >
              <Maximize2 className="w-3 h-3 text-gray-600" />
            </button>
            <button
              onClick={() => closeWindow(window.id)}
              className="w-6 h-6 rounded hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="h-full overflow-auto" style={{ height: 'calc(100% - 32px)' }}>
          {window.content}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;