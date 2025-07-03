import React from 'react';
import Window from './Window';
import { useWindows } from '../contexts/WindowContext';

const WindowManager: React.FC = () => {
  const { windows } = useWindows();

  return (
    <>
      {windows.map((window) => (
        <Window key={window.id} window={window} />
      ))}
    </>
  );
};

export default WindowManager;