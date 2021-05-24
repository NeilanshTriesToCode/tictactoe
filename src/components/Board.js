// React Component for tic-tac-toe board
import React, { useState } from 'react';
import Square from './Square'; // React component for square-grid to be placed inside the board

const Board = () => {
    /* the useState() function returns an array of two elements: 
     1. the original argument passed to it
     2. a function used to update the initial state
  */
    // initial state of board: all elements (9 square-grids) are null. They are being represented as an array.
    // the state of an element/component can be changed using events (for eg. the onClick method in Square.js)
    const [board, setBoard] = useState(Array(9).fill(null)); // initial state

    // state to keep track of the next player (in order to determine whether to write 'X' or 'O' on the square-grid)
    const [isXNext, setIsXNext] = useState(false); // default is false, i.e., always start with an 'O'

    // function to handle when a square-grid is clicked on
    const handleSquareClick = position => {
        // check if the clicked square-grid has been clicked on before to prevent overwriting its value
        if (board[position]) {
            return;
        }

        // assign a 'X' or 'O' to the square-grid which is clicked on
        setBoard(prevState => {
            // prevState is the array containing current values of all 9 square-grids at their respective indices
            // map the array elements: assign a value to the grid which is clicked on
            return prevState.map((square, index) => {
                if (index === position) {
                    // if the index of the array matches the position of the grid clicked on, return 'X'
                    return isXNext ? 'X' : 'O'; // used to change the value of grid clicked on. Value written is 'X' or 'O' based on what isXNext returns
                }
                return square; // else return square (do nothing)
            });
        });

        // switch value of isXNext
        setIsXNext(prevState => !prevState);
    };

    // function to render properties to a square-grid, so that they won't have to be hard-coded
    const renderSquare = position => {
        return (
            <Square
                value={board[position]}
                updateStateFunction={() => {
                    handleSquareClick(position);
                }}
            />
        );
    };

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
