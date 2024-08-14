import { checkWin } from "../utils/checkWin";

export const bestBranch = (board: string[][]): number => {
  const lines = [
    ...board,
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  if (checkWin(lines, "X")) return 9;
  if (checkWin(lines, "O")) return -9;

  const countLines = (player: string) =>
    lines.reduce((count, line) => {
      if (
        line.filter((cell) => cell === player).length > 0 &&
        line.includes(" ") &&
        !line.includes(player === "X" ? "O" : "X")
      ) {
        return count + 1;
      }
      return count;
    }, 0);

  return countLines("X") - countLines("O");
};
