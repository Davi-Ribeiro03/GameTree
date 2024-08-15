import { useState } from "react";
import { GameProps } from "../types/GameProps.type";
import { checkWinner } from "../utils/checkWinner";

export const TicTacToe = ({
  board,
  setBoard,
  setTree,
  currentPlayer,
  setCurrentPlayer,
}: GameProps) => {
  const [gameStatus, setGameStatus] = useState<string>("In Progress");

  const handleClick = (row: number, col: number) => {
    if (board[row][col] === " " && gameStatus === "In Progress") {
      const newBoard = board.map((r) => r.slice());
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);

      const winner = checkWinner(newBoard);
      if (winner) {
        setGameStatus(winner === "Draw" ? "Draw" : `${winner} Wins!`);
      } else {
        setCurrentPlayer!(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  const resetGame = () => {
    setBoard([
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
    setTree(null);
    setCurrentPlayer!("X");
    setGameStatus("In Progress");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Tic-Tac-Toe</h2>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {board.flat().map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(Math.floor(index / 3), index % 3)}
            className={`w-20 h-20 text-4xl border-4 rounded-lg flex items-center justify-center ${
              cell === "X"
                ? "text-red-500"
                : cell === "O"
                ? "text-blue-500"
                : "text-gray-400"
            } bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-200`}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="text-lg mb-1">
        <div>
          <strong>Current Player:</strong> {currentPlayer}
        </div>
        <div>
          <strong>Status:</strong> {gameStatus}
        </div>
      </div>
      <button
        onClick={resetGame}
        className="px-6 py-3 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Reset Game
      </button>
    </div>
  );
};
