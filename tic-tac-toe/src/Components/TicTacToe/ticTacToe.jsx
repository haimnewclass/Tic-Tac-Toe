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
