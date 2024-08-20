import { useEffect } from 'react';
import styled from 'styled-components';
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
      } else if (key.length === 1) {
        onKeyPress(key.toUpperCase());
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
            <StyledButton
              key={letter}
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
            </StyledButton>
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

const StyledButton = styled.button`
  background-color: #d3d6da;
  color: black;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
