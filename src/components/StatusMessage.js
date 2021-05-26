// React Component to print the winner of the game
import React from 'react';

const StatusMessage = ({ winner, current }) => {
    // message to print

    // check if all square-grids are full (to determine if there is draw)
    const noMovesLeft = current.board.every(el => el !== null);

    return (
        <div>
            <h2>
                {winner && `Winner is ${winner}`}
                {!winner &&
                    !noMovesLeft &&
                    `Next player: ${current.isXNext ? 'X' : 'O'}`}
                {!winner && noMovesLeft && `Game drawn`}
            </h2>
        </div>
    );
};

export default StatusMessage;
