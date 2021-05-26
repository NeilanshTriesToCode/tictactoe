import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
    /* the useState() function returns an array of two elements: 
     1. the original argument passed to it
     2. a function used to update the initial state
  */
    // initial state of game: history is an array of objects.
    /* each object contains two elements: 
       1. board (array of 9 elements) to keep track of values of square-grids that are clicked on
        2. next element (either a X or a O) 
    */
    // the state of an element/component can be changed using events (for eg. the onClick method in Square.js)
    const [history, setHistory] = useState([
        { board: Array(9).fill(null), isXNext: true },
    ]); // initial state

    const [currentMove, setCurrentMove] = useState(0); // to keep track of steps/moves in the game

    const current = history[currentMove];

    // function used to determine the winner
    const winner = calculateWinner(current.board); // returns winner (X or O) if there is one, else null

    // message to print
    const message = winner
        ? `Winner is ${winner}`
        : `Next player: ${current.isXNext ? 'X' : 'O'}`;

    // function to handle when a square-grid is clicked on
    const handleSquareClick = position => {
        // check if the clicked square-grid has been clicked on before to prevent overwriting its value
        // also, if we have a winner, don't let the user play anymore
        if (current.board[position] || winner) {
            return;
        }

        // assign a 'X' or 'O' to the square-grid which is clicked on
        // the setHistory() function receives the history array which it further updates
        setHistory(prevState => {
            // the history (sent to this function) array is being referred to as prevState
            // prevState is the array containing current values of all 9 square-grids at their respective indices
            // map the array elements: assign a value to the grid which is clicked on

            const last = prevState[prevState.length - 1]; // getting the last element of the prevState (history) array

            const newBoard = last.board.map((square, index) => {
                if (index === position) {
                    // if the index of the array matches the position of the grid clicked on, return 'X'
                    return last.isXNext ? 'X' : 'O'; // used to change the value of grid clicked on. Value written is 'X' or 'O' based on what isXNext returns
                }
                return square; // else return square (do nothing)
            });

            return prevState.concat({
                board: newBoard,
                isXNext: !last.isXNext,
            }); // concatenating to history array
        });

        // update current move
        // the setCurrentMove() function receives the currentMove as an argument
        setCurrentMove(prevState => prevState + 1); // updating state of currentMove
    };

    // function to move to the current step
    const moveTo = move => {
        setCurrentMove(move);
    };

    return (
        <div className="app">
            <h1>TIC TAC TOE</h1>
            <h2>{message}</h2>
            <Board
                board={current.board}
                handleSquareClick={handleSquareClick}
            />
            <History
                history={history}
                moveTo={moveTo}
                currentMove={currentMove}
            />
        </div>
    );
};

export default App;
