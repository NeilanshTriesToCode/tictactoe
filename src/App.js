import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
    /* the useState() function returns an array of two elements: 
     1. the original argument passed to it
     2. a function used to update the initial state
  */
    // initial state of board: all elements (9 square-grids) are null. They are being represented as an array.
    // the state of an element/component can be changed using events (for eg. the onClick method in Square.js)
    const [board, setBoard] = useState(Array(9).fill(null)); // initial state

    // state to keep track of the next player (in order to determine whether to write 'X' or 'O' on the square-grid)
    const [isXNext, setIsXNext] = useState(false); // default is false, i.e., always start with an 'O'

    // function used to determine the winner
    const winner = calculateWinner(board); // returns winner (X or O) if there is one, else null

    // message to print
    const message = winner
        ? `Winner is ${winner}`
        : `Next player: ${isXNext ? 'X' : 'O'}`;

    // function to handle when a square-grid is clicked on
    const handleSquareClick = position => {
        // check if the clicked square-grid has been clicked on before to prevent overwriting its value
        // also, if we have a winner, don't let the user play anymore
        if (board[position] || winner) {
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

    return (
        <div className="app">
            <h1>TIC TAC TOE</h1>
            <h2>{message}</h2>
            <Board board={board} handleSquareClick={handleSquareClick} />
        </div>
    );
};

export default App;
