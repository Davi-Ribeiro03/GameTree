import { checkWin } from "./checkWin";

export const checkWinner = (board: string[][]): "X" | "O" | "Draw" | null => {
    const lines = [
      ...board,
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];

    if (checkWin(lines, "X")) return "X";
    if (checkWin(lines, "O")) return "O";

    if (board.flat().every((cell) => cell !== " ")) return "Draw";

    return null;
  };