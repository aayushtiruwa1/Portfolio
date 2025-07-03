import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const buttons = [
    { label: 'CE', onClick: clearEntry, className: 'bg-gray-200 hover:bg-gray-300' },
    { label: 'C', onClick: clear, className: 'bg-gray-200 hover:bg-gray-300' },
    { label: '⌫', onClick: () => setDisplay(display.slice(0, -1) || '0'), className: 'bg-gray-200 hover:bg-gray-300' },
    { label: '÷', onClick: () => inputOperation('÷'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '7', onClick: () => inputNumber('7'), className: 'bg-white hover:bg-gray-50' },
    { label: '8', onClick: () => inputNumber('8'), className: 'bg-white hover:bg-gray-50' },
    { label: '9', onClick: () => inputNumber('9'), className: 'bg-white hover:bg-gray-50' },
    { label: '×', onClick: () => inputOperation('×'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '4', onClick: () => inputNumber('4'), className: 'bg-white hover:bg-gray-50' },
    { label: '5', onClick: () => inputNumber('5'), className: 'bg-white hover:bg-gray-50' },
    { label: '6', onClick: () => inputNumber('6'), className: 'bg-white hover:bg-gray-50' },
    { label: '-', onClick: () => inputOperation('-'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '1', onClick: () => inputNumber('1'), className: 'bg-white hover:bg-gray-50' },
    { label: '2', onClick: () => inputNumber('2'), className: 'bg-white hover:bg-gray-50' },
    { label: '3', onClick: () => inputNumber('3'), className: 'bg-white hover:bg-gray-50' },
    { label: '+', onClick: () => inputOperation('+'), className: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '0', onClick: () => inputNumber('0'), className: 'bg-white hover:bg-gray-50 col-span-2' },
    { label: '.', onClick: inputDecimal, className: 'bg-white hover:bg-gray-50' },
    { label: '=', onClick: performCalculation, className: 'bg-blue-600 hover:bg-blue-700 text-white' }
  ];

  return (
    <div className="h-full bg-gray-100 p-4">
      {/* Display */}
      <div className="bg-white p-4 mb-4 rounded border border-gray-300">
        <div className="text-right text-2xl font-mono text-gray-800 min-h-8">
          {display}
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={`p-3 rounded border border-gray-300 font-medium transition-colors duration-200 ${button.className}`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;