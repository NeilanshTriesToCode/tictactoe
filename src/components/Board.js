// React Component for tic-tac-toe board
import React from 'react';
import Square from './Square'; // React component for square-grid to be placed inside the board

const Board = ({ board, handleSquareClick, winningSquares }) => {
    // board and handleSquareClick are sent to the Board Component custom props to keep track of state of square-grids

    // function to render properties to a square-grid, so that they won't have to be hard-coded
    const renderSquare = position => {
        // boolean const to check if the array consist of winningSquares
        const isWinningSquare = winningSquares.includes(position);

        return (
            <Square
                value={board[position]}
                updateStateFunction={() => {
                    handleSquareClick(position);
                }}
                isWinningSquare={isWinningSquare}
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
