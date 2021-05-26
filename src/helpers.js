// function to determine the winner
export function calculateWinner(squares) {
    // lays down all possible combinations a player could have to win
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            // return squares[a]; // return the winner (X or O)
            return {
                winner: squares[a],
                winningSquares: [a, b, c],
            };
        }
    }
    return {
        winner: null,
        winningSquares: [],
    };
}
