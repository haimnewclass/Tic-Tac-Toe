import React, { useState } from "react";
import "./ticTacToe.css";
import { useAuth0 } from "@auth0/auth0-react";

export const TicTacToe = () => {
  const { logout } = useAuth0();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (winner || newBoard[index]) return;
    newBoard[index] = player;
    setBoard(newBoard);
    const nextPlayer = player === "X" ? "O" : "X";
    setPlayer(nextPlayer);
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    const isBoardFull = board.every((square) => square !== null);
    if (isBoardFull) setWinner("Tie");
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setPlayer("X");
  };

  return (
    <div className="game">
      <div className="game-info">
        <button
          className="btn btn-danger"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </div>
      <div className="game-board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="game-info">
        <div>{winner ? `Winner: ${winner}` : `Next player: ${player}`}</div>
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
};

// const [squares, setSquares] = useState(Array(9).fill(null));
// const [player, setPlayer] = useState("X");
// const [winner, setWinner] = useState(null);

// const checkWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (
//       squares[a] &&
//       squares[a] === squares[b] &&
//       squares[a] === squares[c]
//     ) {
//       return squares[a];
//     }
//   }

//   return null;
// };

// const handleClick = (i) => {
//   if (winner || squares[i]) {
//     return;
//   }

//   const newSquares = [...squares];
//   newSquares[i] = player;
//   setSquares(newSquares);

//   const newWinner = checkWinner(newSquares);
//   if (newWinner) {
//     setWinner(newWinner);
//   } else {
//     setPlayer(player === "X" ? "O" : "X");
//   }
// };

// const renderSquare = (i) => {
//   return (
//     <button className="btn btn-primary square" onClick={() => handleClick(i)}>
//       {squares[i]}
//     </button>
//   );
// };

// const renderStatus = () => {
//   if (winner) {
//     return (
//       <div className="alert alert-success mt-3" role="alert">
//         Winner: {winner}
//       </div>
//     );
//   } else {
//     return (
//       <div className="alert alert-info mt-3" role="alert">
//         Next player: {player}
//       </div>
//     );
//   }
// };

// return (
//   <div className="container">
//     <h1 className="text-center my-4">Tic Tac Toe</h1>
//     {renderStatus()}
//     <div className="board">
//       <div className="row">
//         <div className="col">{renderSquare(0)}</div>
//         <div className="col">{renderSquare(1)}</div>
//         <div className="col">{renderSquare(2)}</div>
//       </div>
//       <div className="row">
//         <div className="col">{renderSquare(3)}</div>
//         <div className="col">{renderSquare(4)}</div>
//         <div className="col">{renderSquare(5)}</div>
//       </div>
//       <div className="row">
//         <div className="col">{renderSquare(6)}</div>
//         <div className="col">{renderSquare(7)}</div>
//         <div className="col">{renderSquare(8)}</div>
//       </div>
//     </div>
//   </div>
// );
// };
