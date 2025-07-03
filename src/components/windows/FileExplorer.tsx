import React, { useState } from 'react';
import { Folder, File, ArrowLeft, ArrowRight, Home, Search, MoreVertical } from 'lucide-react';

const FileExplorer: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(['This PC', 'Desktop', 'Portfolio']);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const folders = [
    { name: 'Web Projects', type: 'folder', icon: '🌐', items: 15 },
    { name: 'DevOps Scripts', type: 'folder', icon: '⚙️', items: 8 },
    { name: 'Certificates', type: 'folder', icon: '🏆', items: 6 },
    { name: 'Learning Resources', type: 'folder', icon: '📚', items: 25 },
    { name: 'Docker Configs', type: 'folder', icon: '🐳', items: 12 },
    { name: 'Terraform Modules', type: 'folder', icon: '🏗️', items: 7 }
  ];

  const files = [
    { name: 'Resume_AayushTiruwa.pdf', type: 'file', icon: '📄', size: '2.3 MB' },
    { name: 'Portfolio_Screenshots.zip', type: 'file', icon: '📦', size: '15.7 MB' },
    { name: 'DevOps_Roadmap.md', type: 'file', icon: '📝', size: '4.2 KB' },
    { name: 'AWS_Notes.txt', type: 'file', icon: '📋', size: '8.9 KB' }
  ];

  const navigateBack = () => {
    if (currentPath.length > 1) {
      setCurrentPath(prev => prev.slice(0, -1));
    }
  };

  const navigateToFolder = (folderName: string) => {
    setCurrentPath(prev => [...prev, folderName]);
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <button
            onClick={navigateBack}
            disabled={currentPath.length <= 1}
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <Home className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex-1 mx-4">
          <div className="flex items-center bg-gray-100 rounded px-3 py-1">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Portfolio"
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>
        </div>
        
        <button className="p-1 rounded hover:bg-gray-100">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Address Bar */}
      <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-1 text-sm">
          {currentPath.map((path, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => setCurrentPath(currentPath.slice(0, index + 1))}
                className="text-blue-600 hover:underline"
              >
                {path}
              </button>
              {index < currentPath.length - 1 && (
                <span className="text-gray-400">{'>'}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-4 gap-4">
          {/* Folders */}
          {folders.map((folder, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                selectedItem === folder.name
                  ? 'bg-blue-100 border-2 border-blue-300'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedItem(folder.name)}
              onDoubleClick={() => navigateToFolder(folder.name)}
            >
              <div className="text-4xl mb-2">{folder.icon}</div>
              <span className="text-sm font-medium text-center">{folder.name}</span>
              <span className="text-xs text-gray-500">{folder.items} items</span>
            </div>
          ))}

          {/* Files */}
          {files.map((file, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                selectedItem === file.name
                  ? 'bg-blue-100 border-2 border-blue-300'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedItem(file.name)}
            >
              <div className="text-4xl mb-2">{file.icon}</div>
              <span className="text-sm font-medium text-center">{file.name}</span>
              <span className="text-xs text-gray-500">{file.size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="px-3 py-2 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
        {folders.length + files.length} items
        {selectedItem && ` • ${selectedItem} selected`}
      </div>
    </div>
  );
};

export default FileExplorer;