// React Component for square-grid inside the board
import React from 'react';

const Square = ({ value, updateStateFunction, isWinningSquare }) => {
    // using object destructuring to get the "value" attribute from the props object (containing properties) passed to the Square Component.
    return (
        <button
            type="button"
            className="square"
            onClick={updateStateFunction}
            style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
        >
            {value}
        </button>
    );
};

export default Square;
