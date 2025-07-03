import React from 'react';

interface DesktopIconProps {
  name: string;
  icon: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ name, icon, onClick }) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer group w-20 p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
      onClick={onClick}
      onDoubleClick={onClick}
    >
      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <span className="text-white text-sm text-center font-medium drop-shadow-lg">
        {name}
      </span>
    </div>
  );
};

export default DesktopIcon;