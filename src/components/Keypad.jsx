import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ onKeyPress }) => {
  const letters = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (key === 'Enter') {
        onKeyPress('ENTER');
      } else if (key === 'Backspace') {
        onKeyPress('BACKSPACE');
      } else {
        const isEnglishLetter = /^[a-zA-Z]$/.test(key);
        if (isEnglishLetter) {
          onKeyPress(key.toUpperCase());
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onKeyPress]);

  return (
    <div className="flex flex-col items-center mt-8 space-y-2">
      {letters.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-2">
          {row.map((letter) => (
            <button
              key={letter}
              className="bg-gray-300 text-black font-bold p-2 rounded w-12 h-12 flex items-center justify-center"
              onClick={() => {
                if (letter === 'ENTER') {
                  onKeyPress('ENTER');
                } else if (letter === '⌫') {
                  onKeyPress('BACKSPACE');
                } else {
                  onKeyPress(letter);
                }
              }}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

Keypad.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
};

export default Keypad;
