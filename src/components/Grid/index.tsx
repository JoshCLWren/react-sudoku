import React, { FC } from 'react';

const Grid: FC = () => {
  return (
    <div data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <div data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <div data-cy="block">{colIndex}</div>
              ))
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Grid;
