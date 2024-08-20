import PropTypes from 'prop-types';

const Grid = ({ input }) => {
  const rows = 6;
  const columns = 5;

  return (
    <div className="w-fit mx-auto mt-20">
      <div className="grid grid-rows-6 gap-2">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-2">
            {Array.from({ length: columns }).map((_, colIndex) => {
              const index = `row${rowIndex}-col${colIndex}`;
              return (
                <div
                  key={colIndex}
                  className="border-2 border-gray-300 w-16 h-16 flex items-center justify-center text-lg font-bold"
                >
                  {input[index] || ''}
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
  input: PropTypes.string.isRequired,
};

export default Grid;
