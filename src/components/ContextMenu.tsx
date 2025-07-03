import React from 'react';

interface ContextMenuProps {
  x: number;
  y: number;
  items: Array<{ label: string; icon: string; onClick?: () => void }>;
  onClose: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, items, onClose }) => {
  return (
    <div
      className="fixed bg-white/90 backdrop-blur-md rounded-lg shadow-xl border border-white/20 py-2 min-w-48 z-50"
      style={{ left: x, top: y }}
      onClick={(e) => e.stopPropagation()}
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            item.onClick?.();
            onClose();
          }}
          className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-800 hover:bg-blue-500/20 transition-colors duration-200"
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ContextMenu;