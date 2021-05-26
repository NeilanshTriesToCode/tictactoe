// React Component to print the winner of the game
import React from 'react';

const StatusMessage = ({ winner, current }) => {
    // message to print

    // check if all square-grids are full (to determine if there is draw)
    const noMovesLeft = current.board.every(el => el !== null);

    return (
        <div className="status-message">
            {winner && (
                <>
                    Winner is{' '}
                    <span
                        className={
                            winner === 'X' ? 'text-green' : 'text-orange'
                        }
                    >
                        {winner}
                    </span>
                </>
            )}
            {!winner && !noMovesLeft && (
                <>
                    Next player:
                    <span
                        className={
                            current.isXNext ? 'text-green' : 'text-orange'
                        }
                    >
                        {current.isXNext ? ' X' : ' O'}
                    </span>
                </>
            )}
            {!winner && noMovesLeft && (
                <>
                    <span className="text-green">X</span> and
                    <span className="text-orange"> O</span> tied
                </>
            )}
        </div>
    );
};

export default StatusMessage;
