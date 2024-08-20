import PropTypes from 'prop-types';

const Grid = ({ input, guesses }) => {
  const rows = 6;
  const columns = 5;

  return (
    <div className="w-fit mx-auto mt-20">
      <div className="grid grid-rows-6 gap-2">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-2">
            {Array.from({ length: columns }).map((_, colIndex) => {
              let letter = '';
              let isLetterCorrect = '';

              if (rowIndex < guesses.length) {
                letter = guesses[rowIndex].word[colIndex] || '';
                isLetterCorrect = guesses[rowIndex].result[colIndex] || '';
              } else if (rowIndex === guesses.length) {
                letter = input[colIndex] || '';
              }

              return (
                <div
                  key={colIndex}
                  className={`border-2 border-gray-300 w-16 h-16 flex items-center justify-center text-xl font-bold
                    ${
                      isLetterCorrect === 'correct'
                        ? 'bg-cyan-600 text-white'
                        : ''
                    }
                    ${
                      isLetterCorrect === 'misplaced'
                        ? 'bg-amber-500 text-white'
                        : ''
                    }
                    ${
                      isLetterCorrect === 'incorrect'
                        ? 'bg-zinc-500 text-white'
                        : ''
                    }
                  `}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

Grid.propTypes = {
  input: PropTypes.string,
  guesses: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string,
      result: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default Grid;
