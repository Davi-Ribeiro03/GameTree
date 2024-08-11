import { useState } from "react";

export const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[][]>([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [gameStatus, setGameStatus] = useState<string>('In Progress');

  const checkWinner = (board: string[][]): 'X' | 'O' | 'Draw' | null => {
    const lines = [
      ...board,
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];

    const checkWin = (player: string) => lines.some(line => line.every(cell => cell === player));

    if (checkWin('X')) return 'X';
    if (checkWin('O')) return 'O';

    if (board.flat().every(cell => cell !== ' ')) return 'Draw';

    return null;
  };

  const handleClick = (row: number, col: number) => {
    if (board[row][col] === ' ' && gameStatus === 'In Progress') {
      const newBoard = board.map(r => r.slice());
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);

      const winner = checkWinner(newBoard);
      if (winner) {
        setGameStatus(winner === 'Draw' ? 'Draw' : `${winner} Wins!`);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const resetGame = () => {
    setBoard([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]);
    setCurrentPlayer('X');
    setGameStatus('In Progress');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Tic-Tac-Toe</h2>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {board.flat().map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(Math.floor(index / 3), index % 3)}
            className={`w-20 h-20 text-4xl border-4 rounded-lg flex items-center justify-center ${cell === 'X' ? 'text-red-500' : cell === 'O' ? 'text-blue-500' : 'text-gray-400'
              } bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-200`}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="text-lg mb-6">
        <div><strong>Current Player:</strong> {currentPlayer}</div>
        <div><strong>Status:</strong> {gameStatus}</div>
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