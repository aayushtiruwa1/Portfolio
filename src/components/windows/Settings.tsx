import React, { useState } from 'react';
import { Monitor, Palette, Bell, Shield, Wifi, User, Asterisk as System } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Settings: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('personalization');
  const { isDark, toggleTheme } = useTheme();

  const categories = [
    { id: 'system', label: 'System', icon: <System className="w-5 h-5" /> },
    { id: 'personalization', label: 'Personalization', icon: <Palette className="w-5 h-5" /> },
    { id: 'accounts', label: 'Accounts', icon: <User className="w-5 h-5" /> },
    { id: 'network', label: 'Network & Internet', icon: <Wifi className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'privacy', label: 'Privacy & Security', icon: <Shield className="w-5 h-5" /> }
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case 'personalization':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personalization</h2>
              <p className="text-gray-600 mb-6">Customize your desktop experience</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Theme</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Dark Mode</p>
                    <p className="text-sm text-gray-600">Use dark theme for better visibility in low light</p>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isDark ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isDark ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Background</h3>
              <div className="grid grid-cols-3 gap-4">
                {['Gradient', 'Solid Color', 'Image'].map((option) => (
                  <div
                    key={option}
                    className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-400 transition-colors duration-200"
                  >
                    <div className="h-full flex items-center justify-center text-white text-sm font-medium">
                      {option}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'system':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">System</h2>
              <p className="text-gray-600 mb-6">System information and settings</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Device name</span>
                  <span className="font-medium">AAYUSH-PORTFOLIO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processor</span>
                  <span className="font-medium">Intel Core i7-10700K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Installed RAM</span>
                  <span className="font-medium">16.0 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">System type</span>
                  <span className="font-medium">64-bit operating system</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'accounts':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accounts</h2>
              <p className="text-gray-600 mb-6">Manage your account settings</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Aayush Tiruwa</h3>
                  <p className="text-gray-600">devops.engineer@email.com</p>
                  <p className="text-sm text-blue-600">Local account</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="font-medium text-gray-900">Sign-in options</div>
                  <div className="text-sm text-gray-600">Password, PIN, biometrics</div>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="font-medium text-gray-900">Your info</div>
                  <div className="text-sm text-gray-600">Manage your account info</div>
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
              <p className="text-gray-600">Select a category from the sidebar to view settings.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-full bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;