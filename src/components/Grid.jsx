import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = ({ input }) => {
  const rows = 6;
  const columns = 5;

  return (
    <div className="w-fit mx-auto mt-20">
      <div className="grid grid-rows-6 gap-2">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-2">
            {Array.from({ length: columns }).map((_, colIndex) => {
              const index = rowIndex * columns + colIndex;
              return <Cell key={colIndex}>{input[index] || ''}</Cell>;
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

const Cell = styled.div`
  border: 2px solid #d1d5db;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
