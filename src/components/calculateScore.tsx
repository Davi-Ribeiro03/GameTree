
export const calculateScore = (board: string[][]): number => {
  const lines = [
    ...board,
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  const checkWin = (player: string) => lines.some(line => line.every(cell => cell === player));

  if (checkWin('X')) return 9;
  if (checkWin('O')) return -9;

  const countLines = (player: string) => lines.reduce((count, line) => {
    if (line.filter(cell => cell === player).length === 2 && line.includes(' ')) {
      return count + 1;
    }
    return count;
  }, 0);

  return countLines('X') - countLines('O');
};
